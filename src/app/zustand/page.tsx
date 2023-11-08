"use client";

import { Accordion } from "@/components/ui/accordion";
import { useEffect } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Module from "./components/Module";
import PlayerVideo from "./components/PlayerVideo";
import { useCourseLoading } from "./hooks/useCourseLoading";
import { usePlayerStore } from "./store";

export default function ReduxPage() {
  const currentModuleOpenedIndex = usePlayerStore((state) => state.currentModuleOpenedIndex);
  const modules = usePlayerStore((state) => state.course?.modules);
  const openModule = usePlayerStore((state) => state.openModule);
  const loadCourses = usePlayerStore((state) => state.start);

  const isLoading = useCourseLoading();

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  return (
    <div className="flex w-[1440px] flex-col gap-6">
      <Header />
      <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
        <PlayerVideo />
        <aside className="w-96 border-l border-zinc-800 bg-zinc-900">
          {isLoading ? (
            <Loading description="Carregando módulos" />
          ) : (
            <Accordion
              type="single"
              collapsible
              className="w-full"
              onValueChange={(module) => openModule(module)}
              value={`${currentModuleOpenedIndex}`}
            >
              {modules &&
                modules.map((module, moduleIndex) => (
                  <Module
                    key={module.id}
                    title={module.title}
                    moduleIndex={moduleIndex}
                    amountOfLessons={module.lessons.length}
                  />
                ))}
            </Accordion>
          )}
        </aside>
      </main>
    </div>
  );
}
