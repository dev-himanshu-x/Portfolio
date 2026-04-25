import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const TRACK_URL = "/music.mp3";
const START_TIME = 10;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasErrored = useRef(false);
  const hasStarted = useRef(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setError(null);
      if (!hasStarted.current) {
        audio.currentTime = START_TIME;
        hasStarted.current = true;
      }
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Playback failed:', err);
        setError("Playback failed");
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  };

  const handleError = () => {
    if (hasErrored.current) return;
    hasErrored.current = true;
    setError("Audio unavailable");
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-[200px] mx-auto">
      <audio
        ref={audioRef}
        src={TRACK_URL}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onError={handleError}
        loop
        preload="metadata"
      />
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={togglePlay}
          className={`shrink-0 transition-colors ${isPlaying ? 'text-cyan-400' : 'text-cyan-400/40 hover:text-cyan-400'}`}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-xs" />
        </button>
        <div
          className="flex-1 h-[2px] bg-white/5 rounded-full cursor-pointer relative overflow-hidden"
          onClick={handleProgressClick}
        >
          <div
            className={`h-full transition-all duration-100 ${isPlaying ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]' : 'bg-cyan-400/20'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          onClick={toggleMute}
          className="shrink-0 text-white/5 hover:text-cyan-400/30 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} className="text-[10px]" />
        </button>
      </div>
      {error && (
        <span className="text-[8px] text-red-400/40 uppercase tracking-[0.2em]">{error}</span>
      )}
    </div>
  );
}
