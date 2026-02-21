import { Gender } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function GenderPage({
  params,
}: {
  params: Promise<{ gender: Gender }>;
}) {
  const { gender } = use(params);

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-center text-4xl font-bold">Laras</h1>
      <div className="flex items-center">
        <Link
          href={`/srambahan/${gender}/slendro`}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/slendro.png"
            alt="Slendro"
            width={615}
            height={503}
            className="object-contain size-1/3"
          />
        </Link>

        <Link
          href={`/srambahan/${gender}/pelog`}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/pelog.png"
            alt="Pelog"
            width={617}
            height={503}
            className="object-contain size-1/3"
          />
        </Link>
      </div>
    </div>
  );
}
