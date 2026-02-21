import Image from "next/image";

export default function PaugeranTembang() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold font-sans text-black">
        Paugeran Tembang
      </h1>
      <Image
        src="/paugeran-tembang.jpg"
        alt="Paugeran Tembang"
        width={700}
        height={483}
        className="object-contain"
      />
    </div>
  );
}
