import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Lesson from "./Lesson";

interface ModuleItemProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export default function ModuleItem({ title, moduleIndex, amountOfLessons }: ModuleItemProps) {
  return (
    <AccordionItem data-state="open" value={`module-${moduleIndex}`}>
      <AccordionTrigger className="flex w-full items-center border-zinc-950 bg-zinc-800 p-4">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
            {moduleIndex + 1}
          </div>
          <div className="flex flex-col gap-1 text-left">
            <strong className="text-sm">{title}</strong>
            <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="relative flex flex-col gap-4 p-4">
          <Lesson title="Desvendando redux" duration="12:00" />
          <Lesson title="Desvendando redux" duration="12:00" />
          <Lesson title="Desvendando redux" duration="12:00" />
          <Lesson title="Desvendando redux" duration="12:00" />
          <Lesson title="Desvendando redux" duration="12:00" />
          <Lesson title="Desvendando redux" duration="12:00" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
