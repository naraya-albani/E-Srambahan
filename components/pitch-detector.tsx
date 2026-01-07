"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

const javaneseFont = localFont({
  src: "../public/fonts/kepatihan.ttf",
  display: "swap",
});

export type PitchDetectorHandle = {
  stopDetection: () => void;
};

const PitchDetector = forwardRef<
  PitchDetectorHandle,
  {
    gender: "male" | "female";
    javaTone: "slendro" | "pelog";
  }
>(function PitchDetector({ gender, javaTone }, ref) {
  const [frequency, setFrequency] = useState<number | null>(null);
  const [javaNote, setJavaNote] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [laras, setLaras] = useState<string>("");
  const [isDetecting, setIsDetecting] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Float32Array<ArrayBuffer> | null>(null);
  const animationRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();

      analyser.fftSize = 4096;
      analyserRef.current = analyser;
      dataRef.current = new Float32Array(analyser.fftSize);

      source.connect(analyser);
      setIsDetecting(true);
      detectPitch();
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert(
        "Tidak dapat mengakses mikrofon. Pastikan izin mikrofon diaktifkan."
      );
    }
  };

  const stopDetection = async () => {
    // Stop animation loop
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Stop microphone
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    // Close audio context
    if (audioContextRef.current) {
      await audioContextRef.current.close();
      audioContextRef.current = null;
    }

    setIsDetecting(false);
    setFrequency(null);
    setJavaNote("");
    setNote("");
    setLaras("");
  };

  // 👉 expose ke parent
  useImperativeHandle(ref, () => ({
    stopDetection,
  }));

  const detectPitch = () => {
    if (!analyserRef.current || !dataRef.current || !audioContextRef.current)
      return;

    analyserRef.current.getFloatTimeDomainData(dataRef.current);

    const pitch = autoCorrelate(
      dataRef.current as Float32Array,
      audioContextRef.current.sampleRate
    );

    if (pitch && pitch > 50 && pitch < 2000) {
      const westernNote = frequencyToNote(pitch);
      const gamelanNote = frequencyToGamelan(pitch, gender, javaTone);

      setFrequency(pitch);
      setNote(westernNote);
      setJavaNote(gamelanNote.number);
    }

    animationRef.current = requestAnimationFrame(detectPitch);
  };

  // Auto-correlation pitch detection algorithm
  const autoCorrelate = (
    buffer: Float32Array,
    sampleRate: number
  ): number | null => {
    let size = buffer.length;
    let maxSamples = Math.floor(size / 2);
    let bestOffset = -1;
    let bestCorrelation = 0;
    let rms = 0;

    // Calculate RMS (Root Mean Square) for volume detection
    for (let i = 0; i < size; i++) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / size);

    // Not enough signal
    if (rms < 0.01) return null;

    // Find the best correlation
    let lastCorrelation = 1;
    for (let offset = 1; offset < maxSamples; offset++) {
      let correlation = 0;
      for (let i = 0; i < maxSamples; i++) {
        correlation += Math.abs(buffer[i] - buffer[i + offset]);
      }
      correlation = 1 - correlation / maxSamples;

      if (correlation > 0.9 && correlation > lastCorrelation) {
        let foundGoodCorrelation = false;
        if (correlation > bestCorrelation) {
          bestCorrelation = correlation;
          bestOffset = offset;
          foundGoodCorrelation = true;
        }
      }
      lastCorrelation = correlation;
    }

    if (bestCorrelation > 0.01 && bestOffset !== -1) {
      const fundamentalFreq = sampleRate / bestOffset;
      return fundamentalFreq;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="text-4xl text-center">Titilarasipun Panjênêngan</h1>

      {isDetecting && (
        <div className="text-center">
          <h1 className={`${javaneseFont.className} text-4xl font-semibold`}>
            {javaNote}
          </h1>
          <h1 className="mt-4 text-3xl">
            {javaTone === "slendro" ? "Slendro" : "Pelòg"}
          </h1>
        </div>
      )}

      {isDetecting ? (
        <button
          onClick={stopDetection}
          className="px-3 py-2 text-xl rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
        >
          Mandhêg
        </button>
      ) : (
        <button
          onClick={startDetection}
          className="px-3 py-2 text-xl rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
        >
          Wiwit
        </button>
      )}

      {gender === "male" ? (
        <Image
          src="/kakung.png"
          alt="Swantên Kakung"
          width={250}
          height={304}
          className="object-contain size-1/8 self-end"
          priority
        />
      ) : (
        <Image
          src="/putri.png"
          alt="Swantên Putri"
          width={172}
          height={304}
          className="object-contain size-1/8 self-end"
          priority
        />
      )}
    </div>
  );
});

/* ================================
   NOTE BARAT
================================ */
function frequencyToNote(freq: number): string {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const A4 = 440;
  const noteNumber = Math.round(12 * Math.log2(freq / A4) + 69);
  const noteName = notes[noteNumber % 12];
  const octave = Math.floor(noteNumber / 12) - 1;

  return `${noteName}${octave}`;
}

/* ===============================
   MAPPING FREKUENSI GAMELAN
   Berdasarkan gambar yang diberikan
================================ */
const GAMELAN_FREQ_MAP = {
  male: {
    slendro: [
      { freq: 208, number: "t", note: "G#3" }, // Banem/Gulu
      { freq: 233, number: "y", note: "A#3" }, // Dada
      { freq: 277, number: "1", note: "C#4" }, // Pelog/Ji
      { freq: 311, number: "2", note: "D#4" }, // Lima
      { freq: 370, number: "3", note: "F#4" }, // Nem
      { freq: 415, number: "5", note: "G#4" }, // Banem (tinggi)
      { freq: 466, number: "6", note: "A#4" }, // Dada (tinggi)
      { freq: 554, number: "!", note: "C#5" }, // Ji (tinggi)
      { freq: 622, number: "@", note: "D#5" }, // Lima (tinggi)
      { freq: 740, number: "#", note: "F#5" }, // Nem (tinggi)
    ],
    pelog: [
      { freq: 110, number: "t", note: "A2" }, // Banem
      { freq: 117, number: "y", note: "A#2" }, // Dada
      { freq: 131, number: "u", note: "C3" }, // Pitu
      { freq: 147, number: "1", note: "D3" }, // Ji
      { freq: 165, number: "2", note: "E3" }, // Ro
      { freq: 175, number: "3", note: "F3" }, // Lu
      { freq: 196, number: "4", note: "G3" }, // Pat
      { freq: 220, number: "5", note: "A3" }, // Banem
      { freq: 233, number: "6", note: "A#3" }, // Dada
      { freq: 262, number: "7", note: "C4" }, // Pitu
      { freq: 294, number: "!", note: "D4" }, // Ji (tinggi)
      { freq: 330, number: "@", note: "E4" }, // Ro (tinggi)
      { freq: 349, number: "#", note: "F4" }, // Lu (tinggi)
    ],
  },

  female: {
    slendro: [
      { freq: 415, number: "t", note: "G#4" }, // Banem
      { freq: 466, number: "y", note: "A#4" }, // Dada
      { freq: 554, number: "1", note: "C#5" }, // Ji
      { freq: 622, number: "2", note: "D#5" }, // Lima
      { freq: 740, number: "3", note: "F#5" }, // Nem
      { freq: 831, number: "5", note: "G#5" }, // Banem (tinggi)
      { freq: 932, number: "6", note: "A#5" }, // Dada (tinggi)
      { freq: 1109, number: "!", note: "C#6" }, // Ji (tinggi)
      { freq: 1245, number: "@", note: "D#6" }, // Lima (tinggi)
      { freq: 1480, number: "#", note: "F#6" }, // Nem (tinggi)
    ],
    pelog: [
      { freq: 220, number: "t", note: "A3" }, // Banem
      { freq: 233, number: "y", note: "A#3" }, // Dada
      { freq: 262, number: "u", note: "C4" }, // Pitu
      { freq: 294, number: "1", note: "D4" }, // Ji
      { freq: 330, number: "2", note: "E4" }, // Ro
      { freq: 349, number: "3", note: "F4" }, // Lu
      { freq: 392, number: "4", note: "G4" }, // Pat
      { freq: 440, number: "5", note: "A4" }, // Banem
      { freq: 466, number: "6", note: "A#4" }, // Dada
      { freq: 523, number: "7", note: "C5" }, // Pitu
      { freq: 587, number: "!", note: "D5" }, // Ji (tinggi)
      { freq: 659, number: "@", note: "E5" }, // Ro (tinggi)
      { freq: 698, number: "#", note: "F5" }, // Lu (tinggi)
    ],
  },
} as const;

type GamelanNote = {
  freq: number;
  number: string;
  note: string;
};

/* ===============================
   CONVERTER dengan Pencarian Terdekat
   Hanya mencari di laras yang dipilih
================================ */
function frequencyToGamelan(
  freq: number,
  gender: "male" | "female",
  javaTone: "slendro" | "pelog"
) {
  // Ambil notes sesuai laras yang dipilih
  const notes = GAMELAN_FREQ_MAP[gender][javaTone] as readonly GamelanNote[];

  // Cari nada terdekat di laras yang dipilih
  let closest: GamelanNote = notes[0];
  let minDiff = Math.abs(freq - closest.freq);

  for (const note of notes) {
    const diff = Math.abs(freq - note.freq);
    if (diff < minDiff) {
      minDiff = diff;
      closest = note;
    }
  }

  return {
    number: closest.number,
    note: closest.note,
    diff: minDiff,
  };
}

export default PitchDetector;
