import { PlayCircle, VideoIcon } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function Lesson({ title, duration, isPlaying, onPlay }: LessonProps) {
  const icon = isPlaying ? (
    <PlayCircle className="h-5 w-5 text-emerald-400" />
  ) : (
    <VideoIcon className="h-5 w-5 text-zinc-500" />
  );

  return (
    <button
      className="flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100 data-[active=true]:text-emerald-400"
      data-active={isPlaying}
      disabled={isPlaying}
      onClick={onPlay}
    >
      {icon}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  );
}
