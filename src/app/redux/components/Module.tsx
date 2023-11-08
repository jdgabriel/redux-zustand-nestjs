import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useDispatch } from "react-redux";
import { useCurrentIndexes } from "../hooks/useCurrentIndexes";
import { useGetLessons } from "../hooks/useGetLessons";
import { play } from "../store/slices/player";
import Lesson from "./Lesson";

interface ModuleItemProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export default function Module({ title, moduleIndex, amountOfLessons }: ModuleItemProps) {
  const dispatch = useDispatch();
  const lessons = useGetLessons(moduleIndex);
  const { currentModuleIndex, currentLessonIndex } = useCurrentIndexes();

  return (
    <AccordionItem data-state="open" value={`${moduleIndex}`}>
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
          {lessons.map((lesson, lessonIndex) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
              isPlaying={currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
