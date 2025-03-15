import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Tools({ className, ...props }: & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex text-xl font-bold">Tools</div>
        <Link href="https://gps.uniu.moe" target="_blank">
          <Card className="flex flex-wrap gap-4">
            <CardHeader className="items-center">
              <CardTitle>
                Gakumas Pick Simulator
                <SquareArrowOutUpRight className="inline-block ml-2" size="16" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/images/tools/gps.png" alt="GPS" width="320" height="280" style={{ objectFit: "cover" }} />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
