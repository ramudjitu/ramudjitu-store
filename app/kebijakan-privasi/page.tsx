import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Ramudjitu",
  description: "Kebijakan privasi toko RamuDjitu mengenai pengumpulan, penggunaan, dan perlindungan data pribadi Anda.",
};

const CSS = `
  :root {
    --brown-dark: #1E1208;
    --cream: #F5ECD7;
    --cream-light: #FAF7F2;
    --cream-mid: #EDE0C8;
    --green-deep: #2D4A1A;
    --green-mid: #4A7A25;
    --green-bright: #7A9E4E;
    --green-light: #C5DC8E;
    --green-pale: #EFF5E6;
    --text-dark: #1E1208;
    --text-mid: #5A4030;
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .kp-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .kp-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .kp-header {
    background: var(--cream-light);
    padding: 0 1.25rem;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid var(--cream-mid);
    box-shadow: 0 2px 8px rgba(30,18,8,0.06);
  }

  .kp-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .kp-logo img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .kp-back {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
  }
  .kp-back:hover { color: var(--green-mid); }

  .kp-hero {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    padding: 2rem 1.25rem 1.5rem;
  }

  .kp-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(122,158,78,0.15);
    border: 1px solid rgba(122,158,78,0.3);
    color: var(--green-light);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 1rem;
  }

  .kp-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .kp-hero-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.6);
    line-height: 1.8;
  }

  .kp-main {
    padding: 2rem 1.25rem;
  }

  .kp-updated {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .kp-intro {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.9;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .kp-intro p {
    margin-bottom: 0.75rem;
  }
  .kp-intro p:last-child {
    margin-bottom: 0;
  }

  .kp-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .kp-section:last-child {
    border-bottom: none;
  }

  .kp-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
  }

  .kp-section-num {
    color: var(--green-mid);
    margin-right: 6px;
  }

  .kp-section p {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    margin-bottom: 0.75rem;
  }

  .kp-section p:last-child {
    margin-bottom: 0;
  }

  .kp-section ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0.75rem;
  }

  .kp-section ul li {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    padding-left: 1.25rem;
    position: relative;
    margin-bottom: 0.4rem;
  }

  .kp-section ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--green-mid);
    font-size: 11px;
  }

  .kp-section ul li strong,
  .kp-section p strong {
    color: var(--text-dark);
    font-weight: 500;
  }

  .kp-subitem {
    padding-left: 1.25rem;
    margin-bottom: 0.9rem;
  }

  .kp-subitem-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dark);
    margin-bottom: 0.2rem;
    position: relative;
  }

  .kp-subitem-title::before {
    content: '—';
    position: absolute;
    left: -1.25rem;
    color: var(--green-mid);
    font-size: 11px;
  }

  .kp-subitem-desc {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
  }

  .kp-contact-box {
    background: var(--green-pale);
    border: 1px solid var(--green-bright);
    border-radius: 14px;
    padding: 1.25rem;
    margin-top: 0.5rem;
  }

  .kp-contact-box p {
    font-size: 13px;
    font-weight: 400;
    color: var(--green-deep);
    margin-bottom: 0.25rem;
  }

  .kp-contact-box a {
    color: var(--green-mid);
    text-decoration: none;
    font-weight: 500;
  }

  .kp-note {
    font-size: 11px;
    font-weight: 300;
    font-style: italic;
    color: var(--text-muted);
    line-height: 1.8;
    margin-top: 1.5rem;
  }

  .kp-footer {
    border-top: 1px solid var(--cream-mid);
    padding: 1.25rem;
    text-align: center;
  }

  .kp-footer-copy {
    font-size: 10px;
    color: var(--text-muted);
  }
`;

type SubItem = { title: string; desc: string };

const sections: {
  num: string;
  title: string;
  intro?: string;
  items?: (string | SubItem)[];
  subitems?: SubItem[];
  outro?: string[];
}[] = [
  {
    num: "1",
    title: "Definisi",
    intro: "Dalam Kebijakan Privasi ini, istilah berikut memiliki arti sebagai berikut:",
    items: [
      '"Data Pribadi" adalah setiap data tentang individu atau seseorang yang teridentifikasi atau dapat diidentifikasi, baik secara tersendiri maupun tidak langsung.',
      '"Pengelola Data" mengacu pada ramudjitu.id sebagai pihak yang menentukan tujuan dan melakukan pengelolaan data pribadi.',
      '"Subjek Data" mengacu pada Anda sebagai pemilik data pribadi yang menggunakan Toko.',
      '"Platform" adalah layanan teknologi yang disediakan oleh Scalev untuk pembuatan dan pengelolaan toko online.',
      '"Pemrosesan" mencakup pengumpulan, penyimpanan, penggunaan, pengubahan, pengungkapan, dan penghapusan data pribadi.',
    ],
  },
  {
    num: "2",
    title: "Data yang Dikumpulkan",
    intro: "Kami mengumpulkan data pribadi yang diperlukan untuk memberikan layanan kepada Anda, meliputi:",
    items: [
      "Data Identitas, meliputi nama lengkap sesuai identitas, email dan nomor telepon.",
      "Data Alamat, meliputi alamat pengiriman sesuai KTP atau domisili termasuk provinsi, kota, kecamatan, dan kode pos.",
      "Data Transaksi dan Pembayaran, meliputi informasi yang diperlukan untuk memproses transaksi melalui payment gateway. Kami tidak menyimpan data kartu kredit/debit secara langsung.",
      "Data Perangkat, meliputi jenis perangkat, sistem browser, sistem operasi, resolusi layar, dan pengaturan teknis lainnya.",
      "Data Aktivitas, meliputi riwayat halaman kunjungan, alamat IP, cookie, waktu akses, dan interaksi dengan situs dan data penggunaan lainnya.",
    ],
  },
  {
    num: "3",
    title: "Tujuan Pengumpulan Data",
    intro: "Data pribadi Anda diproses oleh Kami untuk tujuan-tujuan sebagai berikut:",
    subitems: [
      { title: "Pemrosesan Transaksi", desc: "Untuk memverifikasi, memproses, memenuhi dan/atau menyelesaikan pesanan yang Anda lakukan melalui Toko." },
      { title: "Pengiriman Produk", desc: "Untuk mengatur dan melaksanakan pengiriman produk melalui mitra logistik ke alamat yang Anda berikan." },
      { title: "Komunikasi", desc: "Untuk menghubungi Anda sehubungan dengan status pesanan, konfirmasi pembayaran, layanan pelanggan dan informasi penting lainnya terkait penggunaan Toko." },
      { title: "Peningkatan Layanan", desc: "Untuk menganalisis penggunaan Toko, memahami kebutuhan pengguna, serta meningkatkan kualitas layanan dan pengalaman pengguna." },
      { title: "Keamanan dan Pencegahan Penyalahgunaan", desc: "Untuk mendeteksi, mencegah, dan menangani aktivitas yang mencurigakan, penipuan, atau pelanggaran terhadap ketentuan yang berlaku." },
      { title: "Kepatuhan Hukum", desc: "Untuk memenuhi kewajiban hukum, peraturan perundang-undangan, serta permintaan yang sah dari otoritas yang berwenang." },
    ],
  },
  {
    num: "4",
    title: "Dasar Hukum Pemrosesan",
    intro: "Pemrosesan Data Pribadi Anda dilakukan berdasarkan satu atau lebih dasar hukum sebagai berikut:",
    subitems: [
      { title: "Persetujuan Anda", desc: "Yaitu persetujuan yang Anda berikan pada saat mengakses dan/atau menggunakan Toko, termasuk saat melakukan transaksi atau memberikan Data Pribadi kepada Kami." },
      { title: "Pelaksanaan Perjanjian", desc: "Yaitu pemrosesan yang diperlukan untuk melaksanakan hubungan hukum antara Anda dan Kami, termasuk namun tidak terbatas pada pemrosesan pesanan, pembayaran, dan pengiriman Produk." },
      { title: "Pemenuhan Kewajiban Hukum", desc: "Yaitu pemrosesan yang diperlukan untuk memenuhi kewajiban Kami berdasarkan peraturan perundang-undangan yang berlaku, termasuk kewajiban pencatatan dan pelaporan." },
      { title: "Kepentingan Sah", desc: "Yaitu pemrosesan yang dilakukan untuk kepentingan sah Kami dalam menjalankan dan mengembangkan Toko, sepanjang tidak bertentangan dengan hak dan kepentingan Anda sebagai subjek data." },
    ],
  },
  {
    num: "5",
    title: "Pengungkapan Data kepada Pihak Ketiga",
    intro: "Dalam rangka penyediaan layanan pada Toko, Kami dapat mengungkapkan Data Pribadi Anda kepada pihak ketiga tertentu, sepanjang diperlukan dan sesuai dengan tujuan pemrosesan yang telah dijelaskan dalam Kebijakan Privasi ini. Pengungkapan Data Pribadi tersebut hanya dapat dilakukan kepada:",
    subitems: [
      { title: "Penyedia Layanan Pembayaran / Penyedia Payment Gateway", desc: "Untuk memproses transaksi pembayaran Anda. Pemrosesan dilakukan sesuai dengan kebijakan masing-masing penyedia layanan." },
      { title: "Mitra Logistik", desc: "Untuk keperluan pengiriman Produk ke alamat yang Anda berikan, terbatas pada data yang diperlukan seperti nama, alamat, dan nomor kontak." },
      { title: "Platform Scalev", desc: "Sebagai penyedia infrastruktur teknologi yang memproses Data Pribadi secara teknis untuk mendukung operasional Toko. Dalam hal ini, Platform hanya bertindak sebagai pemroses data (data processor) dan tidak bertindak sebagai pengendali data (data controller) atas transaksi antara Anda dan Kami." },
    ],
    outro: [
      "Kami memastikan bahwa setiap pengungkapan Data Pribadi dilakukan secara terbatas, relevan, dan hanya untuk tujuan yang sah sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.",
      "Kami tidak menjual, menyewakan, atau memperdagangkan Data Pribadi Anda kepada pihak ketiga untuk kepentingan pemasaran mereka sendiri.",
    ],
  },
  {
    num: "6",
    title: "Cookie dan Teknologi Pelacakan",
    intro: "Toko menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna, menganalisis penggunaan situs, serta mendukung aktivitas pemasaran. Cookie adalah file kecil yang disimpan pada perangkat Anda yang memungkinkan sistem untuk mengenali perangkat, preferensi, dan aktivitas penggunaan Anda. Jenis teknologi pelacakan yang digunakan meliputi:",
    subitems: [
      { title: "Facebook Pixel", desc: "Untuk analitik pengunjung, remarketing, dan pelacakan konversi." },
      { title: "TikTok Pixel", desc: "Untuk pelacakan konversi dan penargetan ulang iklan." },
      { title: "Google Tag Manager", desc: "Untuk mengelola tag analitik dan pemasaran." },
      { title: "Kwai Pixel", desc: "Untuk pelacakan konversi dan analitik kampanye." },
    ],
    outro: [
      "Selain itu, cookie pihak ketiga juga dapat ditempatkan oleh mitra payment gateway dan penyedia jasa logistik yang terintegrasi dengan Toko untuk mendukung pemrosesan transaksi. Data yang dikumpulkan melalui cookie dapat mencakup alamat IP, jenis perangkat, browser, halaman yang diakses, waktu kunjungan, serta interaksi Anda dengan Toko.",
      "Anda memiliki pilihan untuk mengatur, membatasi, atau menonaktifkan penggunaan cookie melalui pengaturan browser yang Anda gunakan. Namun demikian, pembatasan atau penonaktifan cookie tertentu dapat memengaruhi fungsi dan pengalaman penggunaan Toko secara keseluruhan.",
      "Dengan tetap mengakses dan menggunakan Toko, Anda dianggap telah menyetujui penggunaan cookie dan teknologi pelacakan sebagaimana dijelaskan dalam Kebijakan Privasi ini.",
    ],
  },
  {
    num: "7",
    title: "Keamanan Data",
    intro: "Kami menerapkan langkah-langkah teknis keamanan yang wajar untuk melindungi data pribadi Anda, termasuk:",
    items: [
      "Enkripsi data saat transmisi menggunakan protokol HTTPS/SSL.",
      "Pembatasan akses data hanya kepada pihak yang berwenang.",
      "Pemantauan sistem secara berkala untuk mendeteksi potensi ancaman keamanan.",
      "Penggunaan payment gateway tersertifikasi untuk pemrosesan data pembayaran.",
    ],
    outro: [
      "Meskipun kami berusaha melindungi data Anda, tidak ada metode transmisi atau penyimpanan elektronik yang sepenuhnya aman. Kami tidak dapat menjamin keamanan absolut data yang ditransmisikan melalui internet.",
    ],
  },
  {
    num: "8",
    title: "Penyimpanan Data",
    items: [
      "Data pribadi disimpan selama diperlukan untuk memenuhi tujuan pengumpulan sebagaimana dijelaskan dalam kebijakan ini.",
      "Data transaksi disimpan sesuai dengan kewajiban hukum dan perpajakan yang berlaku di Indonesia.",
      "Setelah periode penyimpanan berakhir atau tujuan pemrosesan terpenuhi, data pribadi akan dihapus atau dianonimkan.",
      "Anda dapat meminta penghapusan data pribadi Anda kapan saja, dengan mempertimbangkan kewajiban hukum yang mengharuskan kami menyimpan data tertentu.",
    ],
  },
  {
    num: "9",
    title: "Hak Subjek Data",
    intro: "Sesuai dengan ketentuan peraturan perundang-undangan yaitu Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda memiliki hak-hak berikut:",
    subitems: [
      { title: "Hak Akses", desc: "Memperoleh informasi tentang data pribadi Anda yang Kami proses." },
      { title: "Hak Koreksi", desc: "Meminta atau mengajukan perbaikan atas data pribadi yang tidak akurat atau tidak lengkap." },
      { title: "Hak Penghapusan", desc: "Meminta atau mengajukan penghapusan data pribadi Anda, kecuali jika terdapat kewajiban hukum untuk menyimpannya." },
      { title: "Hak Pembatasan Pemrosesan", desc: "Meminta pembatasan pemrosesan data pribadi dalam kondisi tertentu." },
      { title: "Hak Portabilitas", desc: "Memperoleh dan memindahkan data pribadi Anda ke pihak lain dalam format yang umum digunakan." },
      { title: "Hak Pencabutan Persetujuan", desc: "Mencabut persetujuan pemrosesan data pribadi kapan saja, tanpa memengaruhi keabsahan pemrosesan sebelum pencabutan." },
    ],
    outro: ["Permintaan dapat diajukan melalui kontak resmi Kami."],
  },
  {
    num: "10",
    title: "Data Anak",
    outro: [
      "Toko tidak ditujukan untuk pengguna di bawah usia 18 (delapan belas) tahun. Kami tidak secara sengaja mengumpulkan data pribadi dari anak di bawah 18 tahun. Jika Anda mengetahui bahwa seorang anak telah memberikan data pribadi kepada kami, silakan hubungi kami agar kami dapat mengambil tindakan yang diperlukan untuk menghapus data tersebut.",
    ],
  },
  {
    num: "11",
    title: "Perubahan Kebijakan Privasi",
    items: [
      "Kami berhak untuk sewaktu-waktu mengubah, menambah dan/atau memperbarui kebijakan privasi ini.",
      "Setiap perubahan, penambahan atau pembaruan terhadap Kebijakan Privasi ini akan diberitahukan melalui situs Toko dan mulai berlaku sejak tanggal dipublikasikan.",
      "Dengan tetap mengakses dan/atau menggunakan Toko setelah adanya perubahan tersebut, Anda dianggap telah membaca, memahami dan menyetujui perubahan dalam Kebijakan Privasi ini.",
      "Kami menyarankan Anda untuk meninjau kebijakan privasi ini secara berkala.",
    ],
  },
  {
    num: "12",
    title: "Peran Platform",
    intro: "Platform Scalev bertindak semata-mata sebagai penyedia layanan teknologi (technology provider) yang menyediakan infrastruktur untuk pembuatan dan pengelolaan toko online. Platform tidak bertindak sebagai penjual, pembeli, agen, perantara, maupun pihak dalam transaksi jual beli antara Anda dan Kami. Dalam hal ini, maka:",
    items: [
      "Platform bukan merupakan pengelola data (data controller) untuk transaksi jual beli antara Anda dan Kami.",
      "Platform hanya memproses data pribadi secara teknis sebagai pemroses data untuk mendukung operasional Toko.",
      "Platform tidak bertanggung jawab atas pengelolaan Data Pribadi sehubungan dengan transaksi antara Anda dan Kami.",
      "Selaku pemilik Toko, Kami bertanggung jawab atas pengelolaan dan perlindungan data pribadi Anda.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="kp-outer">
        <div className="kp-wrapper">

          {/* HEADER */}
          <header className="kp-header">
            <Link className="kp-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}>
                <span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span>
              </span>
            </Link>
            <Link href="/#produk" className="kp-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="kp-hero">
            <div className="kp-eyebrow">Legal</div>
            <h1 className="kp-hero-title">Kebijakan Privasi</h1>
            <p className="kp-hero-sub">Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.</p>
          </section>

          {/* MAIN */}
          <main className="kp-main">
            <p className="kp-updated">Terakhir diperbarui: Maret 2026</p>

            <div className="kp-intro">
              <p>
                Dengan mengakses dan menggunakan situs ramudjitu.id (&#x201C;Toko&#x201D;), Anda dengan ini menyatakan telah membaca, memahami dan menyetujui ketentuan dalam Kebijakan Privasi ini.
              </p>
              <p>
                ramudjitu.id berkomitmen untuk melindungi privasi dan data pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda dalam penggunaan Toko.
              </p>
            </div>

            {sections.map((s) => (
              <div className="kp-section" key={s.num}>
                <h2 className="kp-section-title">
                  <span className="kp-section-num">{s.num}.</span>{s.title}
                </h2>

                {s.intro && <p>{s.intro}</p>}

                {s.items && (
                  <ul>
                    {s.items.map((item, i) => (
                      <li key={i}>{item as string}</li>
                    ))}
                  </ul>
                )}

                {s.subitems && (
                  <div style={{ marginTop: "0.75rem" }}>
                    {s.subitems.map((sub, i) => (
                      <div className="kp-subitem" key={i}>
                        <div className="kp-subitem-title">{sub.title}</div>
                        <div className="kp-subitem-desc">{sub.desc}</div>
                      </div>
                    ))}
                  </div>
                )}

                {s.outro && s.outro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}

            {/* KONTAK */}
            <div className="kp-section">
              <h2 className="kp-section-title">
                <span className="kp-section-num">13.</span>Kontak
              </h2>
              <p>Untuk pertanyaan, permintaan, atau keluhan terkait data pribadi Anda, silakan hubungi:</p>
              <div className="kp-contact-box">
                <p><strong>RamuDjitu</strong></p>
                <p>Telepon/WhatsApp: <a href="https://wa.me/6285126079197">0851-2607-9197</a></p>
              </div>
              <p className="kp-note">
                Halaman ini dibuat menggunakan platform Scalev sebagai penyedia teknologi. Seluruh aktivitas jual beli, pengelolaan data pribadi, dan operasional toko merupakan tanggung jawab ramudjitu.id.
              </p>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="kp-footer">
            <div className="kp-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
