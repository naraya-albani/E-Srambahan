import { SRAMBAHAN } from "@/types/const";
import {
  Gender,
  Laras,
  Phetet,
  PhetetPelog,
  PhetetSlendro,
} from "@/types/type";
import localFont from "next/font/local";
import Image from "next/image";
import { useRef, useState } from "react";

const javaneseFont = localFont({
  src: "../public/fonts/kepatihan.ttf",
  display: "swap",
});

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

function getAudioPath(
  notasi: string,
  gender: Gender,
  laras: Laras,
  phetet: Phetet,
): string {
  const namaFile = notasiToFile[notasi];
  return `/voices/${gender}/${laras}/${phetet}/${namaFile}.wav`;
}

export default function VoicePlayer({
  laras,
  phetet,
  isChangeableGender = false,
  gender: genderProp = "kakung",
}: {
  laras: Laras;
  phetet: Phetet;
  isChangeableGender?: boolean;
  gender?: Gender;
}) {
  const [playingNote, setPlayingNote] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [gender, setGender] = useState<Gender>(genderProp);

  const playAudio = (notasi: string) => {
    if (!gender || !laras) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const path = getAudioPath(notasi, gender, laras, phetet);
    const audio = new Audio(path);
    audioRef.current = audio;
    setPlayingNote(notasi);

    audio.play().catch(() => {
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

  const notes =
    laras === "slendro"
      ? (SRAMBAHAN.slendro[phetet as PhetetSlendro] ?? [])
      : (SRAMBAHAN.pelog[phetet as PhetetPelog] ?? []);

  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-8 max-lg:flex-col">
        {notes.map((note, idx) => {
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
              <span
                className={`${javaneseFont.className} w-16 text-center mb-2`}
              >
                {notasi}
              </span>
              <span className="w-24 text-center">{solmisasi}</span>
              <span className="text-2xl">{isPlaying ? "🔊" : "🔈"}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-12">
        {isChangeableGender ? (
          <>
            {gender === "kakung" ? (
              <button
                onClick={() => setGender("putri")}
                className="flex items-center justify-center hover:scale-105 transition cursor-pointer relative isolate"
              >
                <Image
                  src="/kakung.png"
                  alt="Swantên Kakung"
                  width={250}
                  height={304}
                  className="object-contain size-2/3 md:size-1/3"
                  priority
                />
              </button>
            ) : (
              <button
                onClick={() => setGender("kakung")}
                className="flex items-center justify-center hover:scale-105 transition cursor-pointer relative isolate"
              >
                <Image
                  src="/putri.png"
                  alt="Swantên Putri"
                  width={172}
                  height={304}
                  className="object-contain size-2/3 md:size-1/3"
                  priority
                />
              </button>
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
