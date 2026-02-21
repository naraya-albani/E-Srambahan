import Image from "next/image";
import Link from "next/link";

export default function PilihanTembang() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
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
          <h1 className="text-3xl font-bold relative z-10">Têmbang Macapat</h1>
        </Link>
        <button
          // onClick={() => setTembang("tengahan")}
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
  );
}
