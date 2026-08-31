import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const SRC = '/audio/hunting-day/birds.mp3';

// Starts muted always (browsers block unmuted autoplay anyway).
export default function AmbientSound() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const wasPlaying = useRef(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play().catch(() => {});
    setPlaying((v) => !v);
  };

  // Pause when backgrounded; only auto-resume if the user had it on before leaving.
  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        wasPlaying.current = playing;
        if (playing) {
          audio.pause();
          setPlaying(false);
        }
      } else if (wasPlaying.current) {
        wasPlaying.current = false;
        audio.play().catch(() => {});
        setPlaying(true);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [playing]);

  // Birds don't belong over the 21:00 lodge/fire section — mute (not pause,
  // iOS ignores .volume) while it's in view, unmute on the way back out.
  useEffect(() => {
    const lodge = document.getElementById('lodge');
    if (!lodge || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const audio = audioRef.current;
        if (audio) audio.muted = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );
    io.observe(lodge);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <audio ref={audioRef} src={SRC} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Mute ambient sound' : 'Play ambient sound'}
        className={playing ? '' : 'hd-sound-hint'}
        style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0, opacity: 0.85 }}
      >
        {playing
          ? <Volume2 size={19} style={{ width: 19, height: 19, flexShrink: 0 }} />
          : <VolumeX size={19} style={{ width: 19, height: 19, flexShrink: 0 }} />}
      </button>
      <style jsx>{`
        .hd-sound-hint {
          animation: hd-sound-pulse 1.6s ease-in-out 3;
        }
        @keyframes hd-sound-pulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hd-sound-hint { animation: none; }
        }
      `}</style>
    </>
  );
}
