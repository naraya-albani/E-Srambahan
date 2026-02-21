import Image from "next/image";
import Link from "next/link";

export default function Srambahan() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-4xl text-center pt-4">
        Mangga Panjênêngan pilih
        <br />
        cakrik swantênipun!
      </h1>

      <div className="flex gap-16 justify-center">
        <Link
          href={"/srambahan/kakung"}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/kakung.png"
            alt="Swantên Kakung"
            width={250}
            height={304}
            className="object-contain size-3/4"
            priority
          />
        </Link>

        <Link
          href={"/srambahan/putri"}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/putri.png"
            alt="Swantên Putri"
            width={172}
            height={304}
            className="object-contain size-3/4"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
