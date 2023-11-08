import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useCurrentLesson } from "../hooks/useCurrentLesson";

export default function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
        <span className="text-small text-zinc-400">Módulo &quot;{currentModule.title}&quot;</span>
      </div>
      <Button>
        <MessageCircle className="w-5 h-5" />
        Deixar Feedback
      </Button>
    </header>
  );
}
