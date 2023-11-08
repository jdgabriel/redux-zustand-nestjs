"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
