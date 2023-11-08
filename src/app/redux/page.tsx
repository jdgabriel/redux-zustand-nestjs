"use client";

import { Accordion } from "@/components/ui/accordion";
import { useEffect } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Module from "./components/Module";
import PlayerVideo from "./components/PlayerVideo";
import { useCourseLoading } from "./hooks/useCourseLoading";
import { useAppDispatch, useAppSelector } from "./store";
import { loadCourses, openModule } from "./store/slices/player";

export default function ReduxPage() {
  const dispatch = useAppDispatch();
  const modules = useAppSelector((state) => state.player.course?.modules);
  const currentModuleOpenedIndex = useAppSelector((state) => state.player.currentModuleOpenedIndex);
  const isLoading = useCourseLoading();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

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
              onValueChange={(module) => dispatch(openModule(module))}
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
