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

interface NoteInfo {
  note: string;
  octave: number;
  cents: number;
  frequency: number;
}

const noteStrings = [
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

const PitchDetector = forwardRef<
  PitchDetectorHandle,
  {
    gender: "male" | "female";
    laras: "slendro" | "pelog";
  }
>(function PitchDetector({ gender, laras }, ref) {
  const [currentNote, setCurrentNote] = useState<NoteInfo | null>(null);
  const [javaNote, setJavaNote] = useState<string>("");
  const [isDetecting, setIsDetecting] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const frequencyToNote = (frequency: number): NoteInfo => {
    const noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
    const roundedNote = Math.round(noteNum);
    const cents = Math.floor((noteNum - roundedNote) * 100);
    const noteIndex = (roundedNote + 69) % 12;
    const octave = Math.floor((roundedNote + 69) / 12);

    return {
      note: noteStrings[noteIndex < 0 ? noteIndex + 12 : noteIndex],
      octave: octave,
      cents: cents,
      frequency: frequency,
    };
  };

  const autoCorrelate = (buffer: Float32Array, sampleRate: number): number => {
    const SIZE = buffer.length;
    const MAX_SAMPLES = Math.floor(SIZE / 2);
    let best_offset = -1;
    let best_correlation = 0;
    let rms = 0;

    for (let i = 0; i < SIZE; i++) {
      const val = buffer[i];
      rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);

    if (rms < 0.01) return -1;

    let lastCorrelation = 1;
    for (let offset = 1; offset < MAX_SAMPLES; offset++) {
      let correlation = 0;
      for (let i = 0; i < MAX_SAMPLES; i++) {
        correlation += Math.abs(buffer[i] - buffer[i + offset]);
      }
      correlation = 1 - correlation / MAX_SAMPLES;

      if (correlation > 0.9 && correlation > lastCorrelation) {
        const foundGoodCorrelation = correlation > best_correlation;
        if (foundGoodCorrelation) {
          best_correlation = correlation;
          best_offset = offset;
        }
      }
      lastCorrelation = correlation;
    }

    if (best_correlation > 0.01) {
      return sampleRate / best_offset;
    }
    return -1;
  };

  const detectPitch = () => {
    if (!analyserRef.current || !audioContextRef.current) return;

    const bufferLength = analyserRef.current.fftSize;
    const buffer = new Float32Array(bufferLength);
    analyserRef.current.getFloatTimeDomainData(buffer);

    const frequency = autoCorrelate(buffer, audioContextRef.current.sampleRate);

    if (frequency > 0 && frequency < 2000) {
      const noteInfo = frequencyToNote(frequency);
      const gamelanNote = frequencyToGamelan(frequency, gender, laras);

      setCurrentNote(noteInfo);
      setJavaNote(gamelanNote.number);
    }

    animationIdRef.current = requestAnimationFrame(detectPitch);
  };

  const startDetection = async () => {
    try {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const microphone =
        audioContextRef.current.createMediaStreamSource(stream);
      microphone.connect(analyserRef.current);

      setIsDetecting(true);
      detectPitch();
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert(
        "Tidak dapat mengakses mikrofon. Pastikan izin mikrofon diaktifkan."
      );
    }
  };

  const stopDetection = () => {
    setIsDetecting(false);

    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    setCurrentNote(null);
    setJavaNote("");
  };

  useImperativeHandle(ref, () => ({
    stopDetection,
  }));

  // Calculate horizontal shift based on detected gamelan note
  const getGamelanNoteShift = () => {
    if (!javaNote) return 0;

    const gamelanNotes = GAMELAN_FREQ_MAP[gender][laras];
    const currentIndex = gamelanNotes.findIndex((n) => n.number === javaNote);

    if (currentIndex === -1) return 0;

    // Center position depends on total notes
    const centerPosition = Math.floor(gamelanNotes.length / 2);
    const shift = (centerPosition - currentIndex) * 100;

    // Add fine-tuning based on cents
    const centsShift = currentNote ? (currentNote.cents / 100) * -100 : 0;

    return shift + centsShift;
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="text-4xl text-center font-bold text-gray-800">
        Titilarasipun Panjênêngan
      </h1>

      {/* Horizontal Note Display */}
      <div className="relative w-full max-w-3xl h-48 overflow-hidden rounded-2xl shadow-inner">
        {/* Center Indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-red-500 z-10">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-15 border-r-15 border-t-20 border-l-transparent border-r-transparent border-t-red-500" />
        </div>

        {/* Sliding Gamelan Notes Container */}
        <div
          className="absolute top-1/2 -translate-y-1/2 flex items-center transition-all duration-200 ease-out"
          style={{
            left: "50%",
            transform: `translate(calc(-50% + ${getGamelanNoteShift()}px), -50%)`,
          }}
        >
          {(() => {
            const gamelanNotes = GAMELAN_FREQ_MAP[gender][laras];

            return gamelanNotes.map((noteData, index) => {
              return (
                <div
                  key={`${noteData.number}-${index}`}
                  className={`shrink-0 text-center font-bold transition-all duration-300 ${
                    javaneseFont.className
                  } ${
                    javaNote === noteData.number
                      ? "text-5xl text-red-500 scale-125"
                      : "text-3xl"
                  }`}
                  style={{ width: "100px" }}
                >
                  {noteData.number}
                </div>
              );
            });
          })()}
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center">
        {/* ===== CENTER CONTENT ===== */}
        <div className="flex flex-col items-center gap-8">
          {/* Info Display */}
          <div className="text-center">
            <div
              className={`${javaneseFont.className} text-5xl font-bold mb-4`}
            >
              {javaNote}
            </div>
            <div className="text-3xl text-gray-600">
              {laras === "slendro" ? "Slendro" : "Pelòg"}
            </div>
          </div>

          {/* Controls */}
          {isDetecting ? (
            <button
              onClick={stopDetection}
              className="px-6 py-3 text-xl rounded-xl bg-red-600 text-white hover:bg-red-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Mandhêg
            </button>
          ) : (
            <button
              onClick={startDetection}
              className="px-6 py-3 text-xl rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Wiwit
            </button>
          )}
        </div>

        {/* ===== GENDER IMAGE (RIGHT) ===== */}
        <div className="absolute right-0 bottom-0">
          {gender === "male" ? (
            <Image
              src="/kakung.png"
              alt="Swantên Kakung"
              width={250}
              height={304}
              className="object-contain size-1/2"
              priority
            />
          ) : (
            <Image
              src="/putri.png"
              alt="Swantên Putri"
              width={172}
              height={304}
              className="object-contain size-1/2"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
});

/* ================================
   GAMELAN FREQUENCY MAPPING
================================ */
const GAMELAN_FREQ_MAP = {
  male: {
    slendro: [
      { freq: 104, number: "t", note: "G#2" },
      { freq: 117, number: "y", note: "A#2" },
      { freq: 139, number: "1", note: "C#3" },
      { freq: 156, number: "2", note: "D#3" },
      { freq: 185, number: "3", note: "F#3" },
      { freq: 208, number: "5", note: "G#3" },
      { freq: 233, number: "6", note: "A#3" },
      { freq: 277, number: "!", note: "C#4" },
      { freq: 311, number: "@", note: "D#4" },
      { freq: 370, number: "#", note: "F#4" },
    ],
    pelog: [
      { freq: 110, number: "t", note: "A2" },
      { freq: 117, number: "y", note: "A#2" },
      { freq: 131, number: "u", note: "C3" },
      { freq: 147, number: "1", note: "D3" },
      { freq: 165, number: "2", note: "E3" },
      { freq: 175, number: "3", note: "F3" },
      { freq: 196, number: "4", note: "G3" },
      { freq: 220, number: "5", note: "A3" },
      { freq: 233, number: "6", note: "A#3" },
      { freq: 262, number: "7", note: "C4" },
      { freq: 294, number: "!", note: "D4" },
      { freq: 330, number: "@", note: "E4" },
      { freq: 349, number: "#", note: "F4" },
    ],
  },
  female: {
    slendro: [
      { freq: 208, number: "t", note: "G#3" },
      { freq: 233, number: "y", note: "A#3" },
      { freq: 277, number: "1", note: "C#4" },
      { freq: 311, number: "2", note: "D#4" },
      { freq: 370, number: "3", note: "F#4" },
      { freq: 415, number: "5", note: "G#4" },
      { freq: 466, number: "6", note: "A#4" },
      { freq: 554, number: "!", note: "C#5" },
      { freq: 622, number: "@", note: "D#5" },
      { freq: 740, number: "#", note: "F#5" },
    ],
    pelog: [
      { freq: 220, number: "t", note: "A3" },
      { freq: 233, number: "y", note: "A#3" },
      { freq: 262, number: "u", note: "C4" },
      { freq: 294, number: "1", note: "D4" },
      { freq: 330, number: "2", note: "E4" },
      { freq: 349, number: "3", note: "F4" },
      { freq: 392, number: "4", note: "G4" },
      { freq: 440, number: "5", note: "A4" },
      { freq: 466, number: "6", note: "A#4" },
      { freq: 523, number: "7", note: "C5" },
      { freq: 587, number: "!", note: "D5" },
      { freq: 659, number: "@", note: "E5" },
      { freq: 698, number: "#", note: "F5" },
    ],
  },
} as const;

type GamelanNote = {
  freq: number;
  number: string;
  note: string;
};

function frequencyToGamelan(
  freq: number,
  gender: "male" | "female",
  laras: "slendro" | "pelog"
) {
  const notes = GAMELAN_FREQ_MAP[gender][laras] as readonly GamelanNote[];

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
