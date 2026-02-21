import { TEMBANG_MACAPAT } from "@/types/const";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function Macapat({
  params,
}: {
  params: Promise<{ macapat: string }>;
}) {
  const { macapat } = use(params);

  const tembangMacapat = TEMBANG_MACAPAT.find(
    (t) => t.name.toLowerCase() === macapat,
  );

  if (!tembangMacapat) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center text-4xl font-bold font-sans text-black">
        Têmbang tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-center text-4xl font-bold">
        {macapat === "megatruh"
          ? "Mêgatruh"
          : macapat.charAt(0).toUpperCase() + macapat.slice(1)}
      </h1>
      {tembangMacapat.variants.map((variant, index) => (
        <Link
          key={index}
          href={`/pilihan-tembang/tembang-macapat/${macapat}/${index}`}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer w-102 h-16 relative isolate"
        >
          <Image
            src="/bg-btn.png"
            alt="Background"
            width={816}
            height={183}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: -1 }}
          />
          <h1 className="text-lg font-bold relative z-10">{variant}</h1>
        </Link>
      ))}
    </div>
  );
}
