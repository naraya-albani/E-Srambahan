import Image from "next/image";

export default function Pandom() {
  return (
    <main className="min-h-screen p-8 text-black">
      <h1 className="text-4xl text-center pt-4 font-bold">Pandom</h1>
      <ol className="list-decimal list-outside mx-auto mt-6 space-y-6 text-justify text-xl leading-relaxed max-w-2xl">
        <li>
          <p className="text-xl">
            <strong>Halaman Awal</strong>
            <br />
            Pengguna dapat membuka aplikasi{" "}
            <em className="font-bold">E-Srambahan</em> melalui tautan yang telah
            disediakan. Setelah tautan diakses, sistem akan menampilkan{" "}
            <strong>halaman awal</strong> media pembelajaran. Di bagian tengah
            halaman terdapat tombol{" "}
            <em className="font-bold">Mangga mlêbêt!</em> yang berfungsi sebagai
            akses awal untuk masuk ke dalam media pembelajaran. Silakan klik
            tombol tersebut untuk memasuki menu utama.
          </p>
          <Image
            src="/pandom/1.png"
            alt="Halaman Awal"
            width={400}
            height={304}
            className="border-2 border-black mx-auto my-4"
          />
        </li>
        <li>
          <p className="text-xl">
            <strong>Menu Utama</strong>
            <br />
            Setelah mengeklik tombol{" "}
            <em className="font-bold">Mangga mlêbêt!</em> di halaman awal,
            pengguna akan diarahkan ke menu utama/
            <em className="font-bold">menu utami</em> media pembelajaran ini.
            Pada halaman <em className="font-bold">menu utami</em>, terdapat
            beberapa opsi yaitu:
          </p>
          <ol className="list-decimal list-outside ml-6 text-justify text-xl leading-relaxed">
            <li>
              <p>
                <em className="font-bold">Srambahan</em> untuk mengakses
                pengantar materi.
              </p>
            </li>
            <li>
              <p>
                <em className="font-bold">Pilihan Têmbang</em> untuk menentukan
                jenis tembang macapat yang akan dipelajari.
              </p>
            </li>
            <li>
              <p>
                <em className="font-bold">Paugeran Têmbang</em> untuk mengetahui
                aturan atau kaidah dalam melantunkan tembang macapat.
              </p>
            </li>
            <li>
              <p>
                <em className="font-bold">Profil Pangêmbang</em> untuk melihat
                informasi pengembang media pembelajaran.
              </p>
            </li>
            <li>
              <p>
                <em className="font-bold">Katrangan Aplikasi</em> untuk
                mengetahui deskripsi dan tujuan pengembangan aplikasi.
              </p>
            </li>
            <li>
              <p>
                <em className="font-bold">Dhêtèktor Plêng</em> untuk
                memanfaatkan fitur pendeteksi nada suara.
              </p>
            </li>
            <li>
              <p>
                <em className="font-bold">Pedhoman</em> yang terletak pada
                bagian bawah untuk membuka halaman panduan penggunaan media
                pembelajaran <em className="font-bold">E-Srambahan</em>.
              </p>
            </li>
          </ol>
          <Image
            src="/pandom/2.png"
            alt="Menu Utama"
            width={400}
            height={304}
            className="border-2 border-black mx-auto my-4"
          />
        </li>
        <li>
          <p className="text-xl">
            <strong>
              Menu <em>Srambahan</em>
            </strong>
            <br />
            Menu Srambahan berfungsi sebagai tahap latihan dasar untuk mengenali
            dan melatih kepekaan vokal terhadap tangga nada (laras) dan wilayah
            nada/harmoni nada (pathet). Langkah-langkah operasional pada menu
            ini adalah sebagai berikut:
          </p>
        </li>
      </ol>
    </main>
  );
}
