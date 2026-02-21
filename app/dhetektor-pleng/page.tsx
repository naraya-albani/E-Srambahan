import Image from "next/image";
import Link from "next/link";

export default function DhetektorPleng() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center sm:items-start">
        <h1 className="text-4xl text-center">
          Mangga Panjênêngan pilih cakrik swantênipun!
        </h1>

        <div className="flex gap-16 justify-center">
          <Link
            href={"/dhetektor-pleng/kakung"}
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
            href={"/dhetektor-pleng/putri"}
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
      </main>
    </div>
  );
}
