import ProfileCard from "@/app/_components/profile-card";
import { Separator } from "@/components/ui/separator";
import Tools from "@/app/_components/tools";

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col gap-8">
        <ProfileCard />
        <Separator />
        <Tools />
      </div>
    </div>
  );
}
