import Image from "next/image";
import Link from "next/link";

const menus = [
  { title: "Srambahan", link: "/srambahan" },
  { title: "Pilihan Têmbang", link: "/pilihan-tembang" },
  { title: "Paugeran Têmbang", link: "/paugeran-tembang" },
  { title: "Profil Pangêmbang", link: "/profil-pangembang" },
  { title: "Katrangan Aplikasi", link: "/katrangan-aplikasi" },
  { title: "Dhétèktor Plêng", link: "/dhetektor-pleng" },
];

export default function Home() {
  return (
    <div className="min-h-screen px-8 font-sans text-black">
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
        <Image
          src="/menu.png"
          alt="Menu"
          width={250}
          height={483}
          className="object-contain"
        />
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={menu.link}
            className="flex items-center justify-center hover:scale-105 transition cursor-pointer w-102 h-16 relative isolate"
          >
            <Image
              src="/bg-btn.png"
              alt="Background"
              width={816}
              height={183}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ zIndex: -1 }}
            />
            <h1 className="text-3xl font-bold relative z-10">{menu.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
