import { ModeToggle } from "@/app/components/mode-toggle";


export const Header = () => {
  return (
    <div className="fixed flex justify-between px-8 w-screen h-16 items-center drop-shadow-2xl shadow-md">
      <h1 className="font-bold text-2xl">uniu.moe</h1>
      <div className="flex gap-3">
        <ModeToggle />
      </div>
    </div>
  );
};
