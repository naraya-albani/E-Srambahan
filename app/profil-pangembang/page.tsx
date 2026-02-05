import Image from "next/image";
import Link from "next/link";

export default function ProfilPangembang() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 font-sans bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat text-black">
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
          Profil Pangembang
        </h1>

        {/* Kosong kanan */}
        <div />
      </div>
      <p className="text-justify text-lg lg:mx-24">
        Kula Ahmad Rizky Wahyudi, mahasiswa pascasarjana program studi
        Pendhidhikan Basa lan Sastra Universitas Nêgêri Surabaya angkatan 2024,
        minangka pangêmbang aplikasi E-Srambahan. Aplikasi mênika kawahyon
        saking kawontênanipun pasinaon sêni swantên Jawi têmbang macapat dalah
        têmbang têngahan mangsa wêkasan samangké ingkang taksih asipat
        tradisional. Tamtunipun, pasinaon sêni swantên Jawi ingkang kados
        makatên sagêd mungkrêd bilih mbotên dipunslarasakên kalihan
        éwah-éwahanipun jaman.
        <br />
        <br /> Sasanèsipun mênika, ngantos sêpriki, mbotên wontên aplikasi
        pasinaon têmbang macapat lan têmbang têngahan mangsa wêkasan ingkang
        wosipun arupi pandom cak-cakan titilaras adhêdhasar swantênipun piyantun
        kados déné E-Srambahan. Aplikasi mênika kula rancang kanthi kairingan
        kalawan program tèsis kula. Mugi aplikasi mênika sagêd kaginakakên
        sasaé-saénipun minangka pandom sinau nywantênakên titilaras kanthi trêp
        kalawan plêng (pocapanipun slaras titilaras).
      </p>
      <Link
        href={"https://www.linkedin.com/in/ahmad-rizky-wahyudi-996a39207/"}
        className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
        target="_blank"
      >
        <Image
          src={"/biodata.png"}
          alt={`Biodata Pangembang`}
          width={300}
          height={483}
          className="object-contain"
        />
      </Link>
    </div>
  );
}
