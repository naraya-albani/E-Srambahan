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
      <h1 className="text-2xl">
        Swantên {gender === "kakung" ? "Kakùng" : "Putri"}
      </h1>
      <h1 className="text-4xl">Pilihan Laras</h1>

      <div className="flex gap-4">
        <Link
          href={`/dhetektor-pleng/${gender}/slendro`}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/slendro.png"
            alt="Swanten Putri"
            width={615}
            height={503}
            className="object-contain size-3/4"
            priority
          />
        </Link>

        <Link
          href={`/dhetektor-pleng/${gender}/pelog`}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/pelog.png"
            alt="Swanten Putri"
            width={617}
            height={503}
            className="object-contain size-3/4"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
