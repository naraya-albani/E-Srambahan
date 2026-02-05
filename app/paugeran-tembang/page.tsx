import Image from "next/image";
import Link from "next/link";

export default function PaugeranTembang() {
  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-8 flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 items-center w-full mb-8">
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
        <h1 className="col-span-1 text-center text-4xl font-bold text-black">
          Paugeran Tembang
        </h1>

        {/* Kosong kanan */}
        <div />
      </div>
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
