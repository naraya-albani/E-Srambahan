"use client";

import { useRef, useState } from "react";
import { YIN } from "pitchfinder";

export default function PitchDetector() {
  const [frequency, setFrequency] = useState<number | null>(null);
  const [note, setNote] = useState<string>("–");

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Float32Array | null>(null);
  const yinRef = useRef<ReturnType<typeof YIN> | null>(null);

  const startDetection = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;

    yinRef.current = YIN({
      sampleRate: audioContext.sampleRate,
      threshold: 0.15,
    });

    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 4096;
    analyserRef.current = analyser;
    dataRef.current = new Float32Array(analyser.fftSize);

    source.connect(analyser);
    detectPitch();
  };

  const detectPitch = () => {
    if (!analyserRef.current || !dataRef.current || !yinRef.current) return;

    analyserRef.current.getFloatTimeDomainData(dataRef.current);

    const pitch = yinRef.current(dataRef.current);

    if (pitch && pitch > 50 && pitch < 2000) {
      setFrequency(pitch);
      setNote(frequencyToNote(pitch));
    }

    requestAnimationFrame(detectPitch);
  };

  return (
    <div>
      <h1>🎤 Pitch Detector</h1>
      <button onClick={startDetection}>Start</button>

      <p>Frequency</p>
      <h2>{frequency ? `${frequency.toFixed(2)} Hz` : "--"}</h2>

      <p>Note</p>
      <h2>{note}</h2>
    </div>
  );
}

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
