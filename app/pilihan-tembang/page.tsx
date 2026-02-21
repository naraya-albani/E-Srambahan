"use client";

import { SRAMBAHAN, TEMBANG_MACAPAT } from "@/types/const";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function TembangButton({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer relative w-44 h-12 md:w-52 md:h-14"
    >
      {/* Parchment scroll background */}
      <Image
        src="/bg-btn.png"
        alt="Background"
        width={816}
        height={183}
        className="absolute inset-0 w-full h-full object-fill"
        style={{ zIndex: 0 }}
      />
      <span className="relative z-10 text-2xl font-bold">{name}</span>
    </button>
  );
}

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

export default function PilihanTembang() {
  const [tembang, setTembang] = useState<"macapat" | "tengahan" | null>(null);
  const [tembangMacapat, setTembangMacapat] = useState<
    (typeof TEMBANG_MACAPAT)[number] | null
  >(null);
  const [variantMacapat, setVariantMacapat] = useState<string | null>(null);
  const [indexVariant, setIndexVariant] = useState<number>();
  const [gender, setGender] = useState<"kakung" | "putri">("kakung");

  const gridItems = TEMBANG_MACAPAT.slice(0, 10);
  const centerItem = TEMBANG_MACAPAT[10];

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      {/* ================= PILIH TEMBANG ================= */}
      {tembang === null && (
        <div>
          <h1 className="text-center text-4xl font-bold">Pilihan Têmbang</h1>
          <div className="flex flex-col gap-6 mt-4 justify-center items-center">
            <Link
              href="/pilihan-tembang/tembang-macapat"
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
              <h1 className="text-3xl font-bold relative z-10">
                Têmbang Macapat
              </h1>
            </Link>
            <button
              onClick={() => setTembang("tengahan")}
              className="flex items-center justify-center hover:scale-105 transition cursor-pointer w-102 h-16 relative isolate"
              disabled
            >
              <Image
                src="/bg-btn.png"
                alt="Background"
                width={816}
                height={183}
                className="absolute inset-0 w-full h-full object-contain"
                style={{ zIndex: -1 }}
              />
              <h1 className="text-2xl font-bold relative z-10">
                Têmbang Têngahan
                <br /> Mangsa Wêkasan
              </h1>
            </button>
          </div>
        </div>
      )}

      {/* ================= PILIH TEMBANG MACAPAT ================= */}
      {tembang === "macapat" && tembangMacapat === null && (
        <div>
          <div className="grid grid-cols-3 items-center w-full">
            {/* Kiri */}
            <button
              onClick={() => setTembang(null)}
              className="hover:scale-105 transition cursor-pointer lg:ml-24"
            >
              <Image
                src="/back.png"
                alt="Back"
                width={385}
                height={248}
                className="object-contain w-20 md:w-24"
              />
            </button>

            {/* Tengah (lebih lebar) */}
            <h1 className="col-span-1 text-center text-4xl font-bold">
              Têmbang Macapat
            </h1>

            {/* Kosong kanan */}
            <div />
          </div>
          <div className="flex flex-col gap-6 mt-4 justify-center items-center">
            <div className="grid grid-cols-2 gap-3">
              {gridItems.map((item) => (
                <TembangButton
                  key={item.name}
                  name={item.name === "Megatruh" ? "Mêgatruh" : item.name}
                  onClick={() => setTembangMacapat(item)}
                />
              ))}
            </div>

            {/* Dhandanggula di tengah bawah */}
            <TembangButton
              name={centerItem.name}
              onClick={() => setTembangMacapat(centerItem)}
            />
          </div>
        </div>
      )}

      {/* ================= PILIH VARIAN TEMBANG MACAPAT ================= */}
      {tembang === "macapat" &&
        tembangMacapat !== null &&
        variantMacapat === null && (
          <div>
            <div className="grid grid-cols-3 items-center w-full">
              {/* Kiri */}
              <button
                onClick={() => setTembangMacapat(null)}
                className="hover:scale-105 transition cursor-pointer lg:ml-24"
              >
                <Image
                  src="/back.png"
                  alt="Back"
                  width={385}
                  height={248}
                  className="object-contain w-20 md:w-24"
                />
              </button>

              {/* Tengah (lebih lebar) */}
              <h1 className="col-span-1 text-center text-4xl font-bold">
                {tembangMacapat.name}
              </h1>

              {/* Kosong kanan */}
              <div />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              {tembangMacapat.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setVariantMacapat(variant);
                    setIndexVariant(index);
                  }}
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
                </button>
              ))}
            </div>
          </div>
        )}

      {/* ================= VARIAN TEMBANG MACAPAT TERPILIH ================= */}
      {tembang === "macapat" &&
        tembangMacapat !== null &&
        variantMacapat !== null && (
          <div>
            <div className="grid grid-cols-3 items-center w-full">
              {/* Kiri */}
              <button
                onClick={() => {
                  setVariantMacapat(null);
                  setIndexVariant(undefined);
                }}
                className="hover:scale-105 transition cursor-pointer lg:ml-24"
              >
                <Image
                  src="/back.png"
                  alt="Back"
                  width={385}
                  height={248}
                  className="object-contain w-20 md:w-24"
                />
              </button>

              {/* Tengah (lebih lebar) */}
              <h1 className="col-span-1 text-center text-4xl font-bold">
                {variantMacapat}
              </h1>

              {/* Kosong kanan */}
              <div />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Image
                src={`/${tembang}/${tembangMacapat.name.toLowerCase()}/${indexVariant}.png`}
                alt="Tembang"
                width={816}
                height={183}
                className="object-contain mt-8"
              />
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
            </div>
          </div>
        )}
    </div>
  );
}
