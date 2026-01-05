"use client";

import PitchDetector from "@/components/pitch-detector";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [javaTone, setJavaTone] = useState<"slendro" | "pelog" | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* ================= PILIH GENDER ================= */}
        {gender === null && (
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-2xl font-semibold">Pilih Gender</h1>

            <div className="flex gap-4">
              <button
                onClick={() => setGender("male")}
                className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Kàkùng
              </button>

              <button
                onClick={() => setGender("female")}
                className="px-6 py-3 rounded bg-pink-600 text-white hover:bg-pink-700"
              >
                Putri
              </button>
            </div>
          </div>
        )}

        {/* ================= PILIH LARAS ================= */}
        {gender !== null && javaTone === null && (
          <div>
            <button
              onClick={() => {
                setGender(null);
              }}
              className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
            >
              ← Kembali pilih gender
            </button>
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-xl">
                Gender ({gender === "male" ? "Kàkùng" : "Putri"})
              </h1>
              <h1 className="text-2xl font-semibold">Pilih Nada</h1>

              <div className="flex gap-4">
                <button
                  onClick={() => setJavaTone("slendro")}
                  className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Slendro
                </button>

                <button
                  onClick={() => setJavaTone("pelog")}
                  className="px-6 py-3 rounded bg-pink-600 text-white hover:bg-pink-700"
                >
                  Pelòg
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= PITCH DETECTOR ================= */}
        {gender !== null && javaTone !== null && (
          <div className="space-y-6">
            <button
              onClick={() => {
                setJavaTone(null);
              }}
              className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
            >
              ← Kembali pilih nada
            </button>

            <PitchDetector gender={gender} javaTone={javaTone} />
          </div>
        )}
      </main>
    </div>
  );
}
