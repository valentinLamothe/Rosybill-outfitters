import { useEffect, useLayoutEffect, useRef } from 'react';

// Like SectionBackdrop but for a looping muted video. Pauses when scrolled
// far from view so it isn't decoding while nobody can see it.
export default function SectionVideoBackdrop({ sources, poster, objectPosition = '50% 50%', scrimVar = '--rb-scrim', scrimFallback = 'rgba(0,0,0,0.5)', priority = false, sticky = false }) {
  const videoRef = useRef(null);
  const reduced = useRef(false);
  const intersecting = useRef(false);

  // Runs before paint so an autoplaying video never visibly starts moving.
  useLayoutEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced.current = query.matches;
    if (reduced.current) videoRef.current?.pause();

    const onChange = () => {
      reduced.current = query.matches;
      const video = videoRef.current;
      if (!video) return;
      if (reduced.current) video.pause();
      else if (intersecting.current) video.play().catch(() => {});
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting.current = entry.isIntersecting;
        if (reduced.current) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: '50% 0px' }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* No data-parallax here on purpose: iOS Safari throttles scroll events
          during momentum scrolling, so a JS-driven transform on a decoding
          video stutters — the img backdrops don't have that decode cost.
          `sticky` is for sections much taller than one viewport (Lodge):
          pins the video at viewport scale via compositor-only CSS instead of
          stretching it thin across the whole section height. */}
      <div
        style={
          sticky
            ? { position: 'sticky', top: 0, height: '100vh', marginBottom: '-100vh', overflow: 'hidden', background: 'var(--rb-photo, #1A2438)' }
            : { position: 'absolute', inset: 0, overflow: 'hidden', background: 'var(--rb-photo, #1A2438)' }
        }
      >
        <video
          ref={videoRef}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay={priority}
          preload={priority ? 'auto' : 'none'}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition }}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: `var(${scrimVar}, ${scrimFallback})` }} />
    </>
  );
}
