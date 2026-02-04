"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menus = [
  { image: "/srambahan.png", link: "/srambahan" },
  { image: "/tembang.png", link: "/srambahan" },
  { image: "/paugeran-tembang.png", link: "/srambahan" },
  { image: "/profile.png", link: "/srambahan" },
  { image: "/about.png", link: "/srambahan" },
];

export default function Home() {
  const [start, setStart] = useState(false);

  return (
    <div className="min-h-screen px-8 font-sans bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat text-black">
      {/* START SCREEN */}
      {!start && (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Image
            src="/title.png"
            alt="Title"
            width={400}
            height={483}
            className="object-contain"
          />
          <h1 className="text-5xl text-center font-bold">E-Srambahan</h1>
          <button
            onClick={() => setStart(true)}
            className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
          >
            <Image
              src="/start.png"
              alt="Mlêbêt"
              width={200}
              height={283}
              className="object-contain"
            />
          </button>
        </div>
      )}

      {/* MENU SCREEN */}
      {start && (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className="flex items-center justify-center hover:scale-105 transition cursor-pointer"
            >
              <Image
                src={menu.image}
                alt={`Menu ${index}`}
                width={250}
                height={483}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
