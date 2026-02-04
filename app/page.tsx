import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-8 font-sans bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat text-black">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image
          src="/title.png"
          alt="Title"
          width={400}
          height={483}
          className="object-contain"
        />
        <h1 className="text-5xl text-center font-bold">E-Srambahan</h1>
        <button className="flex items-center justify-center hover:scale-105 transition cursor-pointer">
          <Image
            src="/start.png"
            alt="Mlêbêt"
            width={200}
            height={283}
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
}
