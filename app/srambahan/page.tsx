"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const srambahan = {
  slendro: {
    nem: [
      { y: "Nêm" },
      { "1": "Ji" },
      { "2": "Ro" },
      { "3": "Lu" },
      { "5": "Ma" },
      { "6": "Nêm" },
      { "!": "Ji" },
      { "@": "Ro" },
    ],
    sanga: [
      { t: "Ma" },
      { y: "Nêm" },
      { "1": "Ji" },
      { "2": "Ro" },
      { "3": "Lu" },
      { "5": "Ma" },
      { "6": "Nêm" },
      { "!": "Ji" },
      { "@": "Ro" },
    ],
    manyura: [
      { y: "Nêm" },
      { "1": "Ji" },
      { "2": "Ro" },
      { "3": "Lu" },
      { "5": "Ma" },
      { "6": "Nêm" },
      { "!": "Ji" },
      { "@": "Ro" },
      { "#": "Lu" },
    ],
  },
  pelog: {
    lima: [
      { t: "Ma" },
      { y: "Nêm" },
      { "1": "Ji" },
      { "2": "Ro" },
      { "3": "Lu" },
      { "4": "Pat" },
      { "5": "Ma" },
      { "6": "Nêm" },
      { "!": "Ji" },
      { "@": "Ro" },
    ],
    nem: [
      { y: "Nêm" },
      { "1": "Ji" },
      { "2": "Ro" },
      { "3": "Lu" },
      { "4": "Pat" },
      { "5": "Ma" },
      { "6": "Nêm" },
      { "!": "Ji" },
      { "@": "Ro" },
      { "#": "Lu" },
    ],
    barang: [
      { y: "Nêm" },
      { u: "Pi" },
      { "2": "Ro" },
      { "3": "Lu" },
      { "5": "Ma" },
      { "6": "Nêm" },
      { "7": "Pi" },
      { "@": "Ro" },
      { "#": "Lu" },
    ],
  },
};

// const javaneseFont = localFont({
//   src: "../public/fonts/kepatihan.ttf",
//   display: "swap",
// });

// Mapping notasi ke nama file audio (karakter spesial tidak valid untuk nama file)
const notasiToFile: Record<string, string> = {
  t: "t",
  y: "y",
  u: "u",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "!": "1h",
  "@": "2h",
  "#": "3h",
};

// Buat path audio: /audio/{gender}/{laras}/{namaFile}.mp3
function getAudioPath(
  notasi: string,
  gender: "kakung" | "putri",
  laras: "slendro" | "pelog",
  phetet: "nem" | "sanga" | "manyura" | "lima" | "barang",
): string {
  const namaFile = notasiToFile[notasi] ?? notasi;
  return `/voices/${gender}/${laras}/${phetet}/${namaFile}.wav`;
}

export default function Srambahan() {
  const [gender, setGender] = useState<"kakung" | "putri" | null>(null);
  const [laras, setLaras] = useState<"slendro" | "pelog" | null>(null);
  const [rangeSlendro, setRangeSlendro] = useState<
    "nem" | "sanga" | "manyura" | null
  >(null);
  const [rangePelog, setRangePelog] = useState<
    "lima" | "nem" | "barang" | null
  >(null);

  // Helper: apakah sudah memilih range (sesuai laras)
  const rangeSelected =
    (laras === "slendro" && rangeSlendro !== null) ||
    (laras === "pelog" && rangePelog !== null);

  const [playingNote, setPlayingNote] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play audio notasi yang diklik, stop audio sebelumnya otomatis
  const playAudio = (notasi: string) => {
    if (!gender || !laras) return;

    // Stop audio yang sedang berjalan
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const phetet = (rangeSlendro ?? rangePelog)!;
    const path = getAudioPath(notasi, gender, laras, phetet);
    const audio = new Audio(path);
    audioRef.current = audio;
    setPlayingNote(notasi);

    audio.play().catch(() => {
      // File tidak ditemukan atau format tidak didukung
      console.warn(`Audio tidak ditemukan: ${path}`);
    });

    audio.onended = () => setPlayingNote(null);
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setPlayingNote(null);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      {/* ================= PILIH GENDER ================= */}
      {gender === null && (
        <div>
          <div className="grid grid-cols-3 items-center w-full">
            {/* Kiri */}
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

            {/* Tengah (lebih lebar) */}
            <div className="col-span-1 flex items-center justify-center w-102 h-16 relative isolate size-1/4">
              <Image
                src="/bg-btn.png"
                alt="Background"
                width={816}
                height={183}
                className="absolute inset-0 w-full h-full object-contain"
                style={{ zIndex: -1 }}
              />
              <h1 className="text-3xl font-bold relative z-10">Srambahan</h1>
            </div>

            {/* Kosong kanan */}
            <div />
          </div>
          <h1 className="text-4xl text-center pt-4">
            Mangga Panjênêngan pilih
            <br />
            cakrik swantênipun!
          </h1>

          <div className="flex gap-16 justify-center">
            <button
              onClick={() => setGender("kakung")}
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
              onClick={() => setGender("putri")}
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
          <div className="grid grid-cols-3 items-center w-full">
            <button
              onClick={() => {
                setGender(null);
              }}
              className="flex items-start hover:scale-105 transition cursor-pointer"
            >
              <Image
                src="/back.png"
                alt="Back"
                width={385}
                height={248}
                className="object-contain w-20 md:w-24"
              />
            </button>

            <h1 className="col-span-1 text-center text-4xl font-bold">Laras</h1>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setLaras("slendro")}
              className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
            >
              <Image
                src="/slendro.png"
                alt="Slendro"
                width={615}
                height={503}
                className="object-contain size-1/3"
              />
            </button>

            <button
              onClick={() => setLaras("pelog")}
              className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
            >
              <Image
                src="/pelog.png"
                alt="Pelog"
                width={617}
                height={503}
                className="object-contain size-1/3"
              />
            </button>
          </div>
        </div>
      )}

      {/* ================= PILIH PATHET ================= */}
      {gender !== null && laras !== null && !rangeSelected && (
        <div>
          <div className="grid grid-cols-3 items-center w-full">
            <button
              onClick={() => {
                setLaras(null);
              }}
              className="flex items-start hover:scale-105 transition cursor-pointer"
            >
              <Image
                src="/back.png"
                alt="Back"
                width={385}
                height={248}
                className="object-contain w-20 md:w-24"
              />
            </button>

            <h1 className="col-span-1 text-center text-4xl font-bold">
              Pathetipun Laras {laras === "slendro" ? "Sléndro" : "Pélog"}
            </h1>
          </div>

          {laras === "slendro" && (
            <div className="flex flex-col items-center justify-center gap-8 mt-8">
              {(["nem", "sanga", "manyura"] as const).map((pathet) => (
                <button
                  key={pathet}
                  onClick={() => setRangeSlendro(pathet)}
                  className="flex flex-col items-center justify-center px-8 py-2 border-2 bg-[#c5ac90] border-black hover:scale-105 transition cursor-pointer"
                >
                  <span className="text-4xl font-bold capitalize">
                    {pathet === "nem" ? "Nêm" : pathet}
                  </span>
                </button>
              ))}
            </div>
          )}

          {laras === "pelog" && (
            <div className="flex flex-col items-center justify-center gap-8 mt-8">
              {(["lima", "nem", "barang"] as const).map((pathet) => (
                <button
                  key={pathet}
                  onClick={() => setRangePelog(pathet)}
                  className="flex flex-col items-center justify-center px-8 py-2 border-2 bg-[#c5ac90] border-black hover:scale-105 transition cursor-pointer"
                >
                  <span className="text-4xl font-bold capitalize">
                    {pathet === "nem" ? "Nêm" : pathet}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= FINAL ================= */}
      {rangeSelected && (
        <div>
          <div className="grid grid-cols-3 items-center w-full">
            <button
              onClick={() => {
                setRangeSlendro(null);
                setRangePelog(null);
                setPlayingNote(null);
                stopAudio();
              }}
              className="flex items-start hover:scale-105 transition cursor-pointer max-lg:w-md"
            >
              <Image
                src="/back.png"
                alt="Back"
                width={385}
                height={248}
                className="object-contain w-20 md:w-24"
              />
            </button>

            <h1 className="col-span-1 text-center text-4xl font-bold capitalize max-lg:text-xl">
              Laras {laras === "slendro" ? "Sléndro" : "Pélog"} Pathêt{" "}
              {laras === "slendro"
                ? rangeSlendro === "nem"
                  ? "Nêm"
                  : rangeSlendro
                : rangePelog === "nem"
                  ? "Nêm"
                  : rangePelog}
            </h1>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8 max-lg:flex-col">
            {(laras === "slendro"
              ? srambahan.slendro[rangeSlendro!]
              : srambahan.pelog[rangePelog!]
            ).map((note, idx) => {
              const [notasi, solmisasi] = Object.entries(note)[0];
              const isPlaying = playingNote === notasi;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (playingNote === notasi) {
                      stopAudio();
                    } else {
                      playAudio(notasi);
                    }
                  }}
                  className={`flex flex-col items-center gap-4 text-4xl font-bold py-2 rounded-lg border-2 transition cursor-pointer max-lg:flex-row
                    ${
                      isPlaying
                        ? "bg-[#8b6340] border-[#5a3e20] text-white scale-105"
                        : "bg-[#c5ac90] border-black hover:bg-[#b09070] hover:scale-105"
                    }`}
                >
                  <span className="w-16 text-center">{notasi}</span>
                  <span className="w-24 text-center">{solmisasi}</span>
                  <span className="text-2xl">{isPlaying ? "🔊" : "🔈"}</span>
                </button>
              );
            })}
          </div>

          <div className="w-24 h-auto pt-4 md:w-40 lg:w-56">
            {gender === "kakung" ? (
              <Image
                src="/kakung.png"
                alt="Swantên Kakung"
                width={250}
                height={304}
                className="object-contain size-2/3 md:size-1/3"
                priority
              />
            ) : (
              <Image
                src="/putri.png"
                alt="Swantên Putri"
                width={172}
                height={304}
                className="object-contain size-2/3 md:size-1/3"
                priority
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
