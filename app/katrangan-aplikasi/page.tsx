import Image from "next/image";
import Link from "next/link";

export default function KatranganAplikasi() {
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
          Katrangan Aplikasi
        </h1>

        {/* Kosong kanan */}
        <div />
      </div>
      <p className="text-justify text-lg lg:mx-24">
        Sinau nywantênakên titilaras (notasi) wontên sêni swantên Jawi
        limrahipun kanthi cara nirokakên ungêlipun gamêlan utawi swantênipun
        piyantun sanès. Wondéné samangké, supados têtêp slaras kalawan ombyaking
        jaman, kêkalih cara mênika kêdah asipat efisien lan praktis nênggih
        lumantar panganggénipun aplikasi.
        <br /> <br />
        E-Srambahan mujudakên aplikasi kanggé nyaranani para dwija basa Jawi
        dalasan para pamarsudi sêni swantên Jawi anggènipun sinau lan mulangakên
        tatacaranipun nywantênakên titilarasipun têmbang macapat mênapa déné
        têmbang têngahan mangsa wêkasan adhêdhasar pilihan laras tuwin
        pathêtipun dhumatêng para siswa utawi para cantrikipun.
        <br /> <br />
        E-Srambahan nyugata dhaftar srambahan arupi laras Pélog kanthi tigang
        pathêt: (1) Lima, (2) Nêm, lan (3) Barang dalasan laras Sléndro kanthi
        tigang pathêt: (1) Nêm, (2) Sanga, lan (3) Manyura. Kêjawi saking
        mênika, aplikasi mênika ugi dipunpêpaki kalihan paugêran têmbang macapat
        lan têmbang têngahan mangsa wêkasan tuwin pilihan têmbang macapat lan
        têmbang têngahan mangsa wêkasan kanthi manéka warni cakrik lan gagrag.
      </p>
    </div>
  );
}
