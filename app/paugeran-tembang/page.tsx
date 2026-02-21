import Image from "next/image";

export default function PaugeranTembang() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
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
