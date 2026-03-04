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
            Menu <em>Srambahan</em> berfungsi sebagai tahap latihan dasar untuk
            mengenali dan melatih kepekaan vokal terhadap tangga nada (
            <em>laras</em>) dan wilayah nada/harmoni nada (<em>pathet</em>).
            Langkah-langkah operasional pada menu ini adalah sebagai berikut:
          </p>
          <ol className="list-[lower-alpha] list-outside ml-6 text-justify text-xl leading-relaxed">
            <li>
              <span className="font-bold">
                Pemilihan Jenis Suara (<em>Cakrik Swantên</em>)
              </span>{" "}
              Saat pertama kali masuk ke menu ini, layar akan menampilkan
              instruksi bertuliskan &quot;
              <em>Mangga Panjênêngan pilih cakrik swantênipun!</em>&quot;. Pada
              tahap ini, pengguna diwajibkan memilih jenis suara contoh dengan
              mengeklik tombol <em className="font-bold">Putri</em> (untuk suara
              perempuan) atau <em className="font-bold">Kakung</em> (untuk suara
              laki-laki)
              <Image
                src="/pandom/3a.png"
                alt="Pemilihan Jenis Suara Cakrik Swantên"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              <span className="font-bold">
                Pemilihan <em>Laras</em>
              </span>{" "}
              Setelah menentukan jenis suara, sistem akan menampilkan pilihan
              sistem tangga nada. Pengguna dapat mengeklik salah satu tombol,
              yaitu <em className="font-bold">Slendro</em> atau{" "}
              <em className="font-bold">Pelog</em>.
              <Image
                src="/pandom/3b.png"
                alt="Pemilihan Laras"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              <span className="font-bold">
                Pemilihan <em>Pathet</em>
              </span>{" "}
              Langkah selanjutnya adalah memilih wilayah nada/harmoni nada (
              <em>pathet</em>). Pilihan yang muncul akan menyesuaikan dengan{" "}
              <em>laras</em> yang dipilih sebelumnya:
              <ul className="list-disc list-outside ml-6 mt-4 space-y-4">
                <li>
                  Jika pengguna mengeklik tombol <em>Laras</em>{" "}
                  <strong>Slendro</strong>, maka akan muncul tiga pilihan{" "}
                  <em>pathet</em> untuk diklik, yaitu:{" "}
                  <em className="font-bold">Nem</em>,{" "}
                  <em className="font-bold">Sanga</em>, dan{" "}
                  <em className="font-bold">Manyura</em>.
                  <Image
                    src="/pandom/3c1.png"
                    alt="Pilihan Pathet Slendro"
                    width={400}
                    height={304}
                    className="border-2 border-black mx-auto my-4"
                  />
                </li>
                <li>
                  Jika pengguna mengeklik tombol <em>Laras</em>{" "}
                  <em className="font-bold">Pelog</em>, maka akan muncul tiga
                  pilihan <em>pathet</em> untuk diklik, yaitu:{" "}
                  <em className="font-bold">Lima</em>,{" "}
                  <em className="font-bold">Nem</em>, dan{" "}
                  <em className="font-bold">Barang</em>.
                  <Image
                    src="/pandom/3c2.png"
                    alt="Pilihan Pathet Pelog"
                    width={400}
                    height={304}
                    className="border-2 border-black mx-auto my-4"
                  />
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Interaksi Angka Srambahan</span>{" "}
              Setelah pengguna mengeklik salah satu <em>pathet</em>, layar akan
              menampilkan deretan notasi angka <em>srambahan</em> sesuai dengan{" "}
              <em>laras</em> dan <em>pathet</em> yang dipilih. Deretan angka ini
              bersifat interaktif (berfungsi seperti tombol). Jika pengguna
              mengeklik salah satu angka tersebut, sistem akan memutar
              audio/suara nada yang presisi. Pengguna dapat mengeklik
              angka-angka tersebut secara berurutan dan menirukan suaranya
              sebagai bentuk pemanasan vokal.
              <Image
                src="/pandom/3d.png"
                alt="Interaksi Angka Srambahan"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
          </ol>
        </li>

        <li>
          <p className="text-xl">
            <strong>Menu Pilihan Têmbang</strong>
            <br />
            Menu <em>Pilihan Têmbang</em> berfungsi sebagai halaman materi inti.
            Di halaman ini, pengguna dapat mempelajari dan mempraktikkan tembang
            secara utuh. Langkah-langkah operasional dan navigasi pada menu ini
            adalah sebagai berikut:
          </p>
          <ol className="list-[lower-alpha] list-outside ml-6 text-justify text-xl leading-relaxed space-y-4">
            <li>
              Setelah mengeklik menu ini, layar akan menampilkan 2 (dua) pilihan
              kategori utama, yaitu{" "}
              <em className="font-bold">Têmbang Macapat</em> dan{" "}
              <em className="font-bold">Têmbang Têngahan Mangsa Wêkasan</em>.{" "}
              <em>
                (Catatan: Saat ini akses menu Têmbang Têngahan Mangsa Wêkasan
                belum dapat digunakan karena masih dalam tahap
                pengembangan/maintenance).
              </em>
              <Image
                src="/pandom/4a.png"
                alt="Pilihan Kategori Têmbang"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              Apabila pengguna mengeklik kategori{" "}
              <em className="font-bold">Têmbang Macapat</em>, sistem akan
              menampilkan daftar lengkap 11 (sebelas) jenis{" "}
              <em>têmbang macapat</em>. Pengguna dapat memilih salah satu judul{" "}
              <em>têmbang macapat</em> yang tersedia.
              <Image
                src="/pandom/4b.png"
                alt="Daftar Têmbang Macapat"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              Setelah memilih salah satu jenis <em>têmbang macapat</em>, sistem
              akan menampilkan pilihan <em>laras</em> yang tersedia untuk
              tembang tersebut, yaitu <em>laras</em>{" "}
              <em className="font-bold">Pelog</em> dan{" "}
              <em className="font-bold">Slendro</em>, lengkap dengan keterangan
              gaya notasinya masing-masing.
              <Image
                src="/pandom/4c.png"
                alt="Pilihan Laras Têmbang Macapat"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              Ketika salah satu <em>laras</em> diklik, pengguna akan diarahkan
              ke halaman materi inti. Pada halaman ini, disajikan gambar notasi
              angka (<em>titilaras</em>) yang sudah terintegrasi secara langsung
              dengan syair atau lirik <em>têmbang macapat</em> (<em>cakepan</em>
              ).
            </li>
            <li>
              Tepat di bagian bawah gambar notasi, terdapat tombol interaktif{" "}
              <em className="font-bold">Srambahan</em> yang jika diklik akan
              memutar audio panduan vokal (<em>Mastery Model</em>). Selain itu,
              di halaman ini juga terdapat tombol visual berupa logo wayang Rama
              bertuliskan <em>Kakung</em> (representasi suara laki-laki/
              <em>kakung</em>). Jika pengguna mengeklik logo wayang tersebut,
              gambarnya akan berubah menjadi wayang Sinta bertuliskan{" "}
              <em>Putri</em> (representasi suara perempuan/<em>putri</em>).
              Perubahan ikon ini secara otomatis akan mengubah jenis suara audio{" "}
              <em>srambahan</em> yang diputar menyesuaikan dengan karakter
              wayang yang sedang aktif di layar.
              <Image
                src="/pandom/4e.png"
                alt="Halaman Materi Inti Têmbang Macapat"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
          </ol>
        </li>

        <li>
          <p className="text-xl">
            <strong>Menu Paugêran Têmbang</strong>
            <br />
            Menu <em>Paugeran Têmbang</em> berfungsi sebagai pusat informasi
            teoretis yang memuat aturan-aturan baku dalam penulisan dan pelaguan{" "}
            <em>têmbang macapat</em>. Apabila pengguna mengeklik menu ini, layar
            akan menampilkan penjelasan komprehensif mengenai kaidah dasar{" "}
            <em>têmbang macapat</em>.
          </p>
          <Image
            src="/pandom/5.png"
            alt="Menu Paugeran Têmbang"
            width={400}
            height={304}
            className="border-2 border-black mx-auto my-4"
          />
        </li>

        <li>
          <p className="text-xl">
            <strong>Menu Profil Pangêmbang</strong>
            <br />
            Menu <em>Profil Pangêmbang</em> memuat informasi identitas mengenai
            pihak yang merancang dan mengembangkan media pembelajaran{" "}
            <em>E-Srambahan</em>. Saat diakses, halaman ini akan menampilkan
            biodata peneliti, asal instansi pendidikan, serta informasi kontak.
            Menu ini disediakan untuk memberikan validitas, transparansi, dan
            pertanggungjawaban akademis atas media pembelajaran yang
            dikembangkan.
          </p>
        </li>

        <li>
          <p className="text-xl">
            <strong>Menu Katrangan Aplikasi</strong>
            <br />
            Menu <em>Katrangan Aplikasi</em> berfungsi sebagai halaman informasi
            yang mendeskripsikan latar belakang, tujuan, dan kelengkapan media{" "}
            <em>E-Srambahan</em>.
          </p>
        </li>

        <li>
          <p className="text-xl">
            <strong>Menu Dhetektor Pleng</strong>
            <br />
            Menu <em>Dhêtèktor Plêng</em> merupakan fitur utama evaluasi mandiri
            berbasis teknologi pendeteksi nada untuk menguji tingkat presisi (
            <em>plêng</em>) suara pengguna secara real-time.
          </p>
          <ol className="list-[lower-alpha] list-outside ml-6 text-justify text-xl leading-relaxed space-y-4">
            <li>
              Ketika pengguna mengeklik menu ini, sistem akan langsung
              mengarahkan pada halaman pemilihan jenis suara. Pengguna kemudian
              memilih antara <em className="font-bold">Kakung</em> (suara
              laki-laki) atau <em className="font-bold">Putri</em> (suara
              perempuan).
              <Image
                src="/pandom/8a.png"
                alt="Pemilihan Jenis Suara Dhêtèktor Plêng"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              Setelah salah satu jenis suara dipilih, pengguna akan diarahkan
              untuk memilih jenis <em>laras</em>, yaitu{" "}
              <em className="font-bold">Slendro</em> atau{" "}
              <em className="font-bold">Pelog</em>. Pemilihan <em>laras</em>{" "}
              tersebut akan membawa pengguna masuk ke halaman utama{" "}
              <em>Dhétèktor Plêng</em> yang menampilkan indikator visual
              pendeteksi nada.
              <Image
                src="/pandom/8b.png"
                alt="Pemilihan Laras Dhêtèktor Plêng"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
            <li>
              Di halaman selanjutnya atau halaman inti <em>Dhétèktor Plêng</em>,
              pengguna dapat menekan tombol <em className="font-bold">Wiwit</em>{" "}
              berwarna biru untuk memulai proses deteksi. Saat tombol ditekan,
              peramban akan meminta izin akses mikrofon, dan pengguna wajib
              mengaktifkan atau menyetujui perizinan tersebut. Setelah mikrofon
              aktif, pengguna dapat langsung mencoba menyuarakan nada dan
              melihat tingkat ketepatannya pada layar. Apabila pengguna ingin
              mengakhiri proses deteksi nada, pengguna cukup menekan kembali
              tombol <em className="font-bold">Wiwit</em> yang kini telah
              berubah warna menjadi merah bertuliskan{" "}
              <em className="font-bold">Mandhêg</em>.
              <Image
                src="/pandom/8c1.png"
                alt="Halaman Inti Dhêtèktor Plêng - Wiwit"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
              <Image
                src="/pandom/8c2.png"
                alt="Halaman Inti Dhêtèktor Plêng - Mandhêg"
                width={400}
                height={304}
                className="border-2 border-black mx-auto my-4"
              />
            </li>
          </ol>
        </li>
      </ol>
    </main>
  );
}
