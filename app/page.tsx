import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen px-8 font-sans text-black">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image
          src="/title.png"
          alt="Title"
          width={400}
          height={483}
          className="object-contain"
          loading="eager"
        />
        <h1 className="text-5xl text-center font-bold">E-Srambahan</h1>
        <Link
          href={"/main"}
          className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        >
          <Image
            src="/start.png"
            alt="Mlêbêt"
            width={200}
            height={283}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
