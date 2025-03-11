import { ModeToggle } from "@/app/_components/mode-toggle";

export const Header = () => {
  return (
    <div
      className="fixed flex justify-between px-8 w-screen h-16 items-center drop-shadow-2xl border-b shadow-md z-50 bg-white dark:bg-gray-900">
      <h1 className="font-bold text-2xl">uniu.moe</h1>
      <div className="flex gap-3">
        <ModeToggle />
      </div>
    </div>
  );
};
