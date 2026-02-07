import Image from "next/image";
import Link from "next/link";

export default function PilihanTembang() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
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
        <h1 className="col-span-1 text-center text-4xl font-bold">
          Pilihan Tembang
        </h1>

        {/* Kosong kanan */}
        <div />
      </div>
      <Link
        href={"/tembang-macapat"}
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
        <h1 className="text-3xl font-bold relative z-10">Tembang Macapat</h1>
      </Link>
      <Link
        href={"/tembang-tengahan-mangsa-wekasan"}
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
        <h1 className="text-2xl font-bold relative z-10">
          Tembang Tengahan
          <br /> Mangsa Wekasan
        </h1>
      </Link>
    </div>
  );
}
