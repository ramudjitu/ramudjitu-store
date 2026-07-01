import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Ramudjitu",
  description: "Syarat dan ketentuan penggunaan toko RamuDjitu. Harap baca sebelum melakukan transaksi.",
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

  .sk-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .sk-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .sk-header {
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

  .sk-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .sk-logo img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .sk-back {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
  }
  .sk-back:hover { color: var(--green-mid); }

  .sk-hero {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    padding: 2rem 1.25rem 1.5rem;
  }

  .sk-eyebrow {
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

  .sk-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .sk-hero-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.6);
    line-height: 1.8;
  }

  .sk-main {
    padding: 2rem 1.25rem;
  }

  .sk-updated {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .sk-intro {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.9;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .sk-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .sk-section:last-child {
    border-bottom: none;
  }

  .sk-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
  }

  .sk-section-num {
    color: var(--green-mid);
    margin-right: 6px;
  }

  .sk-section p {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    margin-bottom: 0.75rem;
  }

  .sk-section ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0.75rem;
  }

  .sk-section ul li {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    padding-left: 1.25rem;
    position: relative;
    margin-bottom: 0.4rem;
  }

  .sk-section ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--green-mid);
    font-size: 11px;
  }

  .sk-contact-box {
    background: var(--green-pale);
    border: 1px solid var(--green-bright);
    border-radius: 14px;
    padding: 1.25rem;
    margin-top: 0.5rem;
  }

  .sk-contact-box p {
    font-size: 13px;
    font-weight: 400;
    color: var(--green-deep);
    margin-bottom: 0.25rem;
  }

  .sk-contact-box a {
    color: var(--green-mid);
    text-decoration: none;
    font-weight: 500;
  }

  .sk-footer {
    border-top: 1px solid var(--cream-mid);
    padding: 1.25rem;
    text-align: center;
  }

  .sk-footer-copy {
    font-size: 10px;
    color: var(--text-muted);
  }
`;

const sections = [
  {
    num: "1",
    title: "Definisi",
    content: (
      <ul>
        <li><strong>"Kami"</strong> adalah ramudjitu.id selaku penjual, pemilik dan/atau pengelola Toko.</li>
        <li><strong>"Anda"</strong> adalah setiap individu yang mengakses dan/atau menggunakan Toko sebagai Pelanggan, yang telah berusia sekurang-kurangnya 18 tahun atau telah memperoleh persetujuan dari orang tua atau wali yang sah.</li>
        <li><strong>"Platform"</strong> adalah sistem atau layanan teknologi yang disediakan oleh Scalev untuk mendukung operasional Toko.</li>
        <li><strong>"Produk"</strong> adalah setiap barang berbentuk fisik yang ditawarkan melalui Toko.</li>
      </ul>
    ),
  },
  {
    num: "2",
    title: "Peran Platform",
    content: (
      <ul>
        <li>Platform menyediakan infrastruktur teknologi untuk pembuatan, pengoperasian dan pengelolaan Toko.</li>
        <li>Platform bukan merupakan pihak dalam transaksi jual beli antara Anda dan Kami, serta tidak bertindak sebagai agen, perantara, maupun perwakilan dari salah satu pihak dalam transaksi.</li>
        <li>Seluruh aspek transaksi, penawaran produk, penetapan harga, pemrosesan pesanan, pengiriman, layanan pelanggan serta penyelesaian sengketa merupakan tanggung jawab penuh Kami selaku Pemilik Toko.</li>
      </ul>
    ),
  },
  {
    num: "3",
    title: "Perubahan Ketentuan",
    content: (
      <ul>
        <li>Kami berhak untuk sewaktu-waktu mengubah, menambah dan/atau memperbarui Syarat dan Ketentuan ini.</li>
        <li>Setiap perubahan akan diberitahukan melalui situs Toko dan mulai berlaku sejak tanggal dipublikasikan.</li>
        <li>Dengan tetap mengakses Toko setelah adanya perubahan, Anda dianggap telah menyetujui perubahan tersebut.</li>
      </ul>
    ),
  },
  {
    num: "4",
    title: "Akun dan Data",
    content: (
      <ul>
        <li>Anda bertanggung jawab atas keakuratan data yang diberikan dalam penggunaan Toko.</li>
        <li>Anda dilarang menggunakan identitas palsu, memberikan informasi yang menyesatkan atau melakukan penyalahgunaan data dalam bentuk apapun.</li>
        <li>Kami berhak menolak, membatasi atau membatalkan pesanan apabila ditemukan indikasi bahwa data yang diberikan tidak akurat atau digunakan secara tidak sah.</li>
        <li>Kami tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan atau kelalaian Anda dalam memberikan data.</li>
      </ul>
    ),
  },
  {
    num: "5",
    title: "Privasi dan Perlindungan Data Pribadi",
    content: (
      <>
        <p>Kami berkomitmen melindungi data pribadi Anda sesuai dengan ketentuan peraturan perundang-undangan yang berlaku, termasuk Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.</p>
        <p>Data pribadi yang dikumpulkan dapat meliputi:</p>
        <ul>
          <li>Nama sesuai identitas, alamat, email, dan nomor telepon</li>
          <li>Informasi lain yang relevan untuk pemrosesan transaksi</li>
        </ul>
        <p>Kami tidak akan menjual atau membagikan data pribadi Anda kepada pihak ketiga, kecuali sepanjang diperlukan untuk pelaksanaan transaksi kepada penyedia Payment Gateway dan Jasa Logistik.</p>
      </>
    ),
  },
  {
    num: "6",
    title: "Cookie dan Teknologi Pelacakan",
    content: (
      <>
        <p>Toko menggunakan cookie dan teknologi pelacakan untuk meningkatkan pengalaman pengguna, melakukan analisis serta mendukung aktivitas pemasaran, termasuk Facebook Pixel, TikTok Pixel, Google Tag Manager, dan Kwai Pixel.</p>
        <p>Dengan menggunakan Toko, Anda menyetujui penggunaan teknologi tersebut. Anda dapat mengatur preferensi cookie melalui pengaturan browser, namun hal ini dapat mempengaruhi fungsi tertentu pada Toko.</p>
      </>
    ),
  },
  {
    num: "7",
    title: "Produk dan Ketersediaan",
    content: (
      <ul>
        <li>Kami berupaya menyajikan informasi Produk secara akurat, terkini dan lengkap.</li>
        <li>Perbedaan tampilan warna dapat terjadi akibat perbedaan perangkat atau pencahayaan dan tidak dianggap sebagai cacat Produk.</li>
        <li>Ketersediaan stok Produk dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.</li>
        <li>Kami berhak menolak atau membatalkan pesanan apabila stok tidak tersedia, terdapat indikasi penipuan, atau terdapat kesalahan harga yang material.</li>
      </ul>
    ),
  },
  {
    num: "8",
    title: "Harga dan Pembayaran",
    content: (
      <ul>
        <li>Harga yang berlaku adalah harga yang tercantum pada saat proses checkout dilakukan.</li>
        <li>Seluruh pembayaran diproses melalui layanan payment gateway pihak ketiga yang terintegrasi dengan Toko.</li>
        <li>Pesanan dianggap sah setelah pembayaran terverifikasi oleh penyedia payment gateway.</li>
      </ul>
    ),
  },
  {
    num: "9",
    title: "Metode Pembayaran",
    content: (
      <>
        <p>Metode pembayaran yang tersedia dapat mencakup:</p>
        <ul>
          <li>Transfer Bank, Virtual Account, E-Wallet</li>
          <li>Kartu Kredit/Debit</li>
          <li>Cash On Delivery (COD) — jika tersedia</li>
          <li>Metode lainnya yang dapat tersedia dari waktu ke waktu</li>
        </ul>
      </>
    ),
  },
  {
    num: "10",
    title: "Ketentuan Cash On Delivery (COD)",
    content: (
      <ul>
        <li>Pembayaran dilakukan secara langsung saat Produk diterima di alamat pengiriman.</li>
        <li>Anda wajib memastikan alamat pengiriman dan informasi kontak yang diberikan benar dan dapat dihubungi.</li>
        <li>Penolakan pesanan tanpa alasan yang sah dapat mengakibatkan pembatasan akses terhadap metode pembayaran COD di masa mendatang.</li>
        <li>Kami tidak menjamin ketersediaan COD untuk seluruh Produk atau wilayah pengiriman.</li>
      </ul>
    ),
  },
  {
    num: "11",
    title: "Pengiriman Produk",
    content: (
      <ul>
        <li>Pengiriman dilakukan melalui penyedia jasa logistik pihak ketiga yang bekerja sama dengan Kami.</li>
        <li>Estimasi waktu pengiriman bersifat perkiraan dan dapat berubah tergantung lokasi dan kondisi operasional.</li>
        <li>Risiko atas Produk beralih kepada Anda sejak Produk diterima di alamat pengiriman.</li>
        <li>Kami tidak bertanggung jawab atas keterlambatan atau kegagalan pengiriman yang disebabkan oleh pihak penyedia jasa logistik.</li>
      </ul>
    ),
  },
  {
    num: "12",
    title: "Pembatalan, Pengembalian, dan Refund",
    content: (
      <ul>
        <li>Permohonan hanya dapat diajukan dalam kondisi tertentu seperti Produk rusak, cacat, tidak sesuai pesanan, atau tidak diterima.</li>
        <li>Permohonan harus diajukan paling lambat 3 (tiga) hari kalender sejak Produk diterima, dengan melampirkan bukti berupa foto atau video unboxing.</li>
        <li>Refund akan diproses dalam waktu 7–14 hari kerja sejak permohonan disetujui.</li>
        <li>Kami berhak menolak permohonan apabila diajukan melewati batas waktu, Produk telah digunakan, atau tidak terdapat bukti yang memadai.</li>
      </ul>
    ),
  },
  {
    num: "13",
    title: "Larangan",
    content: (
      <>
        <p>Dalam menggunakan Toko, Anda dilarang untuk:</p>
        <ul>
          <li>Melakukan transaksi fiktif, penipuan atau tindakan yang merugikan Kami maupun pihak lain.</li>
          <li>Memberikan informasi tidak benar atau menggunakan identitas palsu.</li>
          <li>Menyalahgunakan sistem pembayaran atau memanipulasi transaksi.</li>
          <li>Mengganggu atau mencoba mengakses secara tidak sah sistem yang terkait dengan Toko.</li>
          <li>Menggunakan Toko untuk tujuan yang melanggar hukum.</li>
        </ul>
      </>
    ),
  },
  {
    num: "14",
    title: "Batasan Tanggung Jawab",
    content: (
      <ul>
        <li>Kami bertanggung jawab atas penyediaan produk dan layanan sesuai dengan deskripsi yang tercantum pada Toko.</li>
        <li>Kami tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan Anda dalam memberikan data atau penggunaan Produk yang tidak sesuai peruntukannya.</li>
        <li>Kami tidak bertanggung jawab atas keterlambatan atau gangguan yang disebabkan oleh pihak ketiga seperti penyedia payment gateway atau jasa logistik.</li>
      </ul>
    ),
  },
  {
    num: "15",
    title: "Keadaan Kahar (Force Majeure)",
    content: (
      <>
        <p>Keadaan Kahar meliputi namun tidak terbatas pada bencana alam, perang, gangguan sistem, serangan siber, kebijakan pemerintah, atau gangguan pada layanan pihak ketiga.</p>
        <p>Dalam hal terjadi Keadaan Kahar, Kami tidak bertanggung jawab atas keterlambatan atau kegagalan pelaksanaan kewajiban selama berlangsungnya keadaan tersebut.</p>
      </>
    ),
  },
  {
    num: "16",
    title: "Hukum yang Berlaku",
    content: (
      <p>Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Setiap sengketa yang timbul tunduk pada ketentuan peraturan perundang-undangan yang berlaku di Republik Indonesia.</p>
    ),
  },
  {
    num: "17",
    title: "Penyelesaian Sengketa",
    content: (
      <ul>
        <li>Setiap sengketa akan diselesaikan terlebih dahulu secara musyawarah untuk mufakat.</li>
        <li>Apabila musyawarah tidak mencapai kesepakatan dalam 30 hari kalender, sengketa dapat diselesaikan melalui Badan Penyelesaian Sengketa Konsumen (BPSK) atau Pengadilan Negeri yang berwenang.</li>
      </ul>
    ),
  },
  {
    num: "18",
    title: "Keterpisahan Ketentuan",
    content: (
      <p>Apabila terdapat ketentuan yang dinyatakan tidak sah atau tidak dapat dilaksanakan, ketentuan tersebut akan dianggap dipisahkan tanpa mempengaruhi keabsahan ketentuan lainnya.</p>
    ),
  },
  {
    num: "19",
    title: "Keseluruhan Perjanjian",
    content: (
      <p>Syarat dan Ketentuan ini merupakan keseluruhan perjanjian antara Anda dan Kami terkait penggunaan Toko dan menggantikan seluruh komunikasi atau kesepakatan sebelumnya yang berkaitan dengan hal yang sama.</p>
    ),
  },
];

export default function SyaratKetentuanPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="sk-outer">
        <div className="sk-wrapper">

          {/* HEADER */}
          <header className="sk-header">
            <Link className="sk-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}>
                <span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span>
              </span>
            </Link>
            <Link href="/#produk" className="sk-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="sk-hero">
            <div className="sk-eyebrow">Legal</div>
            <h1 className="sk-hero-title">Syarat & Ketentuan</h1>
            <p className="sk-hero-sub">Harap baca dan pahami ketentuan berikut sebelum menggunakan layanan RamuDjitu.</p>
          </section>

          {/* MAIN */}
          <main className="sk-main">
            <p className="sk-updated">Terakhir diperbarui: Maret 2026</p>

            <p className="sk-intro">
              Dengan mengakses dan menggunakan situs ramudjitu.id ("Toko"), Anda dengan ini menyatakan telah membaca, memahami dan menyetujui untuk terikat pada Syarat dan Ketentuan ini. Toko ini dimiliki dan dikelola oleh ramudjitu.id ("Kami").
            </p>

            {sections.map((s) => (
              <div className="sk-section" key={s.num}>
                <h2 className="sk-section-title">
                  <span className="sk-section-num">{s.num}.</span>{s.title}
                </h2>
                {s.content}
              </div>
            ))}

            {/* KONTAK */}
            <div className="sk-section">
              <h2 className="sk-section-title">
                <span className="sk-section-num">20.</span>Kontak
              </h2>
              <div className="sk-contact-box">
                <p><strong>RamuDjitu</strong></p>
                <p>Telepon/WhatsApp: <a href="https://wa.me/6285126079197">0851-2607-9197</a></p>
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="sk-footer">
            
            <div className="sk-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
