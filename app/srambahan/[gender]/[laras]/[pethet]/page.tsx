"use client";

import VoicePlayer from "@/components/voice-player";
import { Gender, Laras, Phetet } from "@/types/type";
import { use } from "react";

export default function PethetPage({
  params,
}: {
  params: Promise<{ gender: Gender; laras: Laras; pethet: Phetet }>;
}) {
  const { gender, laras, pethet } = use(params);

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-center text-4xl font-bold">
        Laras {laras === "slendro" ? "Sléndro" : "Pélog"} Pathêt{" "}
        {pethet === "nem" ? "Nêm" : pethet}
      </h1>
      <VoicePlayer laras={laras} phetet={pethet} gender={gender} />
    </div>
  );
}
