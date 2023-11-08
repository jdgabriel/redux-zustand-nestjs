import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App with Redux",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      {children}
    </div>
  );
  // return <ReduxProvider store={}>{children}</ReduxProvider>;
}
