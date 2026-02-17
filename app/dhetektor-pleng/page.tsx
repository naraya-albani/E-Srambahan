"use client";

import PitchDetector, {
  PitchDetectorHandle,
} from "@/components/pitch-detector";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function DhetektorPleng() {
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [laras, setLaras] = useState<"slendro" | "pelog" | null>(null);

  const pitchRef = useRef<PitchDetectorHandle | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center sm:items-start">
        {/* ================= PILIH GENDER ================= */}
        {gender === null && (
          <div>
            <Link
              href={"/"}
              className="hover:scale-105 transition cursor-pointer lg:ml-24"
            >
              <Image
                src="/back.png"
                alt="Back"
                width={385}
                height={248}
                className="object-contain w-20 md:w-24"
              />
            </Link>
            <h1 className="text-4xl text-center">
              Mangga Panjênêngan pilih cakrik swantênipun!
            </h1>

            <div className="flex gap-16 justify-center">
              <button
                onClick={() => setGender("male")}
                className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
              >
                <Image
                  src="/kakung.png"
                  alt="Swantên Kakung"
                  width={250}
                  height={304}
                  className="object-contain size-3/4"
                  priority
                />
              </button>

              <button
                onClick={() => setGender("female")}
                className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
              >
                <Image
                  src="/putri.png"
                  alt="Swantên Putri"
                  width={172}
                  height={304}
                  className="object-contain size-3/4"
                  priority
                />
              </button>
            </div>
          </div>
        )}

        {/* ================= PILIH LARAS ================= */}
        {gender !== null && laras === null && (
          <div>
            <button
              onClick={() => {
                setGender(null);
              }}
              className="flex items-start hover:scale-105 transition cursor-pointer"
            >
              <Image
                src="/back.png"
                alt="Swanten Putri"
                width={385}
                height={248}
                className="object-contain size-1/3 md:size-1/4"
                priority
              />
            </button>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl">
                Swantên {gender === "male" ? "Kakùng" : "Putri"}
              </h1>
              <h1 className="text-4xl">Pilihan Laras</h1>

              <div className="flex gap-4">
                <button
                  onClick={() => setLaras("slendro")}
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
                </button>

                <button
                  onClick={() => setLaras("pelog")}
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
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= PITCH DETECTOR ================= */}
        {gender !== null && laras !== null && (
          <div className="flex flex-col items-center justify-center w-full py-16">
            <button
              onClick={() => {
                if (pitchRef.current) {
                  pitchRef.current.stopDetection(); // ⬅️ STOP MIC
                }
                setLaras(null);
              }}
              className="self-start hover:scale-105 transition cursor-pointer"
            >
              <Image
                src="/back.png"
                alt="Swanten Putri"
                width={385}
                height={248}
                className="object-contain size-1/3 md:size-1/4"
                priority
              />
            </button>
            <PitchDetector ref={pitchRef} gender={gender} laras={laras} />
          </div>
        )}
      </main>
    </div>
  );
}
