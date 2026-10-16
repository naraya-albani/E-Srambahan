import Image from "next/image";
import Link from "next/link";

export default function ProfilPangembang() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-screen p-8 text-black">
      <h1 className="text-center text-4xl font-sans font-bold">
        Profil Pangembang
      </h1>
      <p className="text-justify text-lg lg:mx-24">
        Kula Ahmad Rizky Wahyudi, mahasiswa program studi S-2 Pendhidhikan Basa
        lan Sastra Universitas Nêgêri Surabaya angkatan 2024, minangka
        pangêmbang medhia pasinaon E-Srambahan. Pandamelipun medhia pasinaon
        mênika kawahyon saking kawontênanipun pasinaon sêni swantên Jawi têmbang
        macapat dalah têmbang têngahan mangsa wêkasan samangké ingkang taksih
        asipat tradisional lan ewed dipuncakaken menggah sabageyan tiyang menapa
        dene lare ingkang ingkang sinau nembang. Tamtunipun, pasinaon sêni
        swantên Jawi ingkang kados makatên sagêd saya mungkrêd kawontenanipun
        bilih mbotên dipunslarasakên kalihan éwah-éwahanipun jaman.
        <br />
        <br /> Sasanèsipun mênika, ngantos sêpriki, mbotên wontên medhia
        pasinaon têmbang macapat lan têmbang têngahan mangsa wêkasan ingkang
        wosipun arupi pandom cak-cakan titilaras adhêdhasar swantênipun piyantun
        sinartan piranti kangge ngukur tataran plengipun (<i>pitch</i>)
        titilaras ingkang dipunswantenaken kados déné <i>E-Srambahan</i>. Medhia
        pasinaon mênika kula rancang kanthi kairingan kalawan lumampahipun
        program tèsis kula. Mugi <i>E-Srambahan</i> murakabi tur saged
        nggangsaraken sinten kemawon ingkang mengku pikajengan sinau nembang,
        sarta dados pisumbang kangge ngipuk-ipuk pangrembakanipun pasinaon seni
        swanten Jawi slaras kalihan bebetahipun jaman samangke.
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
