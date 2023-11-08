import { Loader2 } from "lucide-react";

interface LoadingProps {
  description?: string;
}

export default function Loading({ description }: LoadingProps) {
  return (
    <div className="flex flex-col gap-3 h-full items-center justify-center">
      <Loader2 className="h-10 w-10 text-zinc-400 animate-spin" />
      {description}
    </div>
  );
}
