import { SRAMBAHAN } from "@/types/const";
import { Gender, Laras } from "@/types/type";
import Link from "next/link";
import { use } from "react";

export default function LarasPage({
  params,
}: {
  params: Promise<{ gender: Gender; laras: Laras }>;
}) {
  const { gender, laras } = use(params);

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <h1 className="text-center text-4xl font-bold">
        Pathetipun Laras {laras === "slendro" ? "Sléndro" : "Pélog"}
      </h1>
      {(laras === "slendro" || laras === "pelog") && (
        <div className="flex flex-col items-center justify-center gap-8 mt-8">
          {Object.keys(SRAMBAHAN[laras]).map((pethet) => (
            <Link
              key={pethet}
              href={`/srambahan/${gender}/${laras}/${pethet}`}
              className="flex flex-col items-center justify-center px-8 py-2 border-2 bg-[#c5ac90] border-black hover:scale-105 transition cursor-pointer"
            >
              <span className="text-4xl font-bold capitalize">
                {pethet === "nem" ? "Nêm" : pethet}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
