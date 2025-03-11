import Link from "next/link";
import Image from "next/image";

export const Background = () => {
  return (
    <div className="fixed w-screen h-screen z-[-1] overflow-hidden">
      <div className="relative w-full h-full">
        <Link href="https://zunko.jp/" target="_blank">
          <Image
            className="absolute bottom-0 right-0"
            src="/images/kiritan_0000.png"
            alt="bg"
            width={500}
            height={500}
            style={{
              objectFit: "contain",
              objectPosition: "bottom right",
              clipPath: "inset(0 0 50% 0)",
              transform: "translateY(50%)",
            }}
          />
        </Link>
      </div>
    </div>
  )
}
