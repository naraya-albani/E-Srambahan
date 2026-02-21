import PitchDetector from "@/components/pitch-detector";
import { Gender, Laras } from "@/types/type";
import { use } from "react";

export default function LarasPage({
  params,
}: {
  params: Promise<{ gender: Gender; laras: Laras }>;
}) {
  const { gender, laras } = use(params);
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans text-black">
      <PitchDetector gender={gender} laras={laras} />
    </div>
  );
}
