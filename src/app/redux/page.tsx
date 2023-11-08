"use client";

import Header from "./components/Header";
import Modules from "./components/Modules";
import PlayerVideo from "./components/PlayerVideo";

export default function ReduxPage() {
  return (
    <div className="flex w-[1440px] flex-col gap-6">
      <Header />
      <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
        <PlayerVideo />
        <aside className="w-96 border-l border-zinc-800 bg-zinc-900">
          <Modules />
        </aside>
      </main>
    </div>
  );
}
