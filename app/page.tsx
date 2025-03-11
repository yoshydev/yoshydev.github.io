import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card className="w-[450px]">
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="items-center justify-center flex flex-col gap-4">
                <Image className="rounded-full border" src="/ajnel0TT_400x400.png" alt="icon" width="120" height="120" />
                <p className="text-lg font-bold antialiased">にゃ～ん</p>
              </div>
              <div className="items-center justify-center flex flex-row gap-8">
                <a href="https://x.com/yuniuiui" target="_blank">
                  <Image className="rounded-full bg-black" src="/logo_x.svg" alt="icon" width="40" height="40" />
                </a>
                <a href="https://github.com/yoshydev" target="_blank">
                  <Image className="rounded-full hidden dark:block" src="/github-mark-white.svg" alt="icon" width="40" height="40" />
                  <Image className="rounded-full dark:hidden" src="/github-mark.svg" alt="icon" width="40" height="40" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
