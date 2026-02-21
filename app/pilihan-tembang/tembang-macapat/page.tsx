import { TEMBANG_MACAPAT } from "@/types/const";
import Image from "next/image";
import Link from "next/link";

function TembangButton({ name }: { name: string }) {
  return (
    <Link
      href={`/pilihan-tembang/tembang-macapat/${name.toLowerCase()}`}
      className="flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer relative w-44 h-12 md:w-52 md:h-14"
    >
      <Image
        src="/bg-btn.png"
        alt="Background"
        width={816}
        height={183}
        className="absolute inset-0 w-full h-full object-fill"
        style={{ zIndex: 0 }}
      />
      <span className="relative z-10 text-2xl font-bold">
        {name === "Megatruh" ? "Mêgatruh" : name}
      </span>
    </Link>
  );
}

export default function TembangMacapat() {
  const gridItems = TEMBANG_MACAPAT.slice(0, 10);
  const centerItem = TEMBANG_MACAPAT[10];

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-center text-4xl font-bold">Têmbang Macapat</h1>
      <div className="grid grid-cols-2 gap-3">
        {gridItems.map((item) => (
          <TembangButton key={item.name} name={item.name} />
        ))}
      </div>

      <TembangButton name={centerItem.name} />
    </div>
  );
}
