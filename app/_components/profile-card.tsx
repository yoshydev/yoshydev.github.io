import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import React from "react";
import { cn } from "@/lib/utils";

export default function ProfileCard({ className, ...props }: & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="items-center justify-center flex flex-col gap-4">
            <Image className="rounded-full border" src="/images/ajnel0TT_400x400.png" alt="icon" width="120"
                   height="120" />
            <p className="text-lg font-bold antialiased">にゃ～ん</p>
          </div>
          <div className="items-center justify-center flex flex-row gap-8">
            <Link href="https://x.com/yuniuiui" target="_blank">
              <SiX size="40" />
            </Link>
            <Link href="https://github.com/yoshydev" target="_blank">
              <SiGithub size="40" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
