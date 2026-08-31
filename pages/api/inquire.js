import { Resend } from 'resend';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
// Best-effort: serverless has no shared warm instance guarantee, so this
// only deters one script hammering a single lambda — honeypot is primary.
const requestLog = new Map();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRateLimited(ip) {
  const now = Date.now();
  // Evict IPs with no requests left in the window so the map doesn't grow
  // unbounded over a warm instance's lifetime.
  for (const [key, timestamps] of requestLog) {
    if (!timestamps.some((t) => now - t < RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
  }
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function validate({ name, email, partySize, month }) {
  if (!name || typeof name !== 'string' || !name.trim() || name.length > 100) return 'Please enter your name.';
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 254) return 'Please enter a valid email.';
  const size = Number.parseInt(partySize, 10);
  if (!Number.isInteger(size) || size < 1 || size > 20) return 'Please enter a valid party size.';
  if (!month || typeof month !== 'string' || month.length > 30) return 'Please select a month.';
  return null;
}

// Strips CR/LF so a crafted name can't inject extra header-like lines into the subject.
const stripControlChars = (s) => s.replace(/[\r\n]/g, ' ');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const { name, email, partySize, month, hp_website } = req.body || {};

  // Honeypot: a bot fills this hidden field, a human never sees it. Fake a
  // success so the bot has no signal it was caught.
  if (hp_website) {
    return res.status(200).json({ ok: true });
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' });
  }

  const validationError = validate({ name, email, partySize, month });
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }
  const size = Number.parseInt(partySize, 10);

  if (!process.env.RESEND_API_KEY || !process.env.INQUIRY_TO_EMAIL) {
    console.error('inquire: RESEND_API_KEY or INQUIRY_TO_EMAIL is not set');
    return res.status(500).json({ ok: false, error: 'Could not send your inquiry. Please try again.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      // Shared verified domain (not rosybill-outfitters.com yet) — swap once
      // that domain itself is verified in Resend for a cleaner from-address.
      from: 'Rosybill Outfitters <hello@noreply.krono-system.com>',
      to: process.env.INQUIRY_TO_EMAIL,
      replyTo: email,
      subject: `Hunting Day inquiry — ${stripControlChars(name)} (${size}, ${month})`,
      text: `Name: ${name}\nEmail: ${email}\nParty size: ${size}\nMonth: ${month}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('inquire: resend send failed', err);
    return res.status(500).json({ ok: false, error: 'Could not send your inquiry. Please try again.' });
  }
}
