"use client";

import VoicePlayer from "@/components/voice-player";
import { TEMBANG_MACAPAT } from "@/types/const";
import { Laras, Phetet } from "@/types/type";
import Image from "next/image";
import { use, useMemo } from "react";

export default function Variant({
  params,
}: {
  params: Promise<{ macapat: string; variant: number }>;
}) {
  const { macapat, variant } = use(params);

  const tembangData = TEMBANG_MACAPAT.find(
    (t) => t.name.toLowerCase() === macapat.toLowerCase(),
  );

  const variantData = tembangData?.variants[variant];

  const { laras, phetet } = useMemo<{ laras: Laras; phetet: Phetet }>(() => {
    if (!variantData) return { laras: "slendro", phetet: "sanga" };

    if (variantData.includes("Sléndro")) {
      if (variantData.includes("Manyura"))
        return { laras: "slendro", phetet: "manyura" };
      if (variantData.includes("Nêm"))
        return { laras: "slendro", phetet: "nem" };
      return { laras: "slendro", phetet: "sanga" };
    }

    if (variantData.includes("Pélog")) {
      if (variantData.includes("Nêm")) return { laras: "pelog", phetet: "nem" };
      if (variantData.includes("Barang"))
        return { laras: "pelog", phetet: "barang" };
      return { laras: "pelog", phetet: "lima" };
    }

    return { laras: "slendro", phetet: "sanga" };
  }, [variantData]);

  if (!variantData) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center text-4xl font-bold font-sans text-black">
        Têmbang tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-center text-4xl font-bold">{variantData}</h1>
      <Image
        src={`/macapat/${macapat}/${variant}.png`}
        alt="Tembang"
        width={816}
        height={183}
        className="object-contain mt-8"
      />
      <VoicePlayer laras={laras!} phetet={phetet!} isChangeableGender />
    </div>
  );
}
