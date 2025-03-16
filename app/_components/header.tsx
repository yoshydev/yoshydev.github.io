import { ModeToggle } from "@/app/_components/mode-toggle";
import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <div
        className="fixed flex justify-between px-8 w-screen h-16 items-center drop-shadow-2xl border-b shadow-md z-50 bg-slate-50 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width="64" height="64" />
          <h1 className="font-bold text-2xl">uniu.moe</h1>
        </div>
        <div className="flex gap-3">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
