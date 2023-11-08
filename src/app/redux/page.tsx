"use client";

import { Accordion } from "@/components/ui/accordion";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Module from "./components/Module";
import PlayerVideo from "./components/PlayerVideo";
import { useAppSelector } from "./store";
import { openModule } from "./store/slices/player";

export default function ReduxPage() {
  const dispatch = useDispatch();
  const modules = useAppSelector((state) => state.player.course.modules);
  const currentModuleOpenedIndex = useAppSelector((state) => state.player.currentModuleOpenedIndex);

  return (
    <div className="flex w-[1440px] flex-col gap-6">
      <Header />
      <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
        <PlayerVideo />
        <aside className="w-96 border-l border-zinc-800 bg-zinc-900">
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
        </aside>
      </main>
    </div>
  );
}
