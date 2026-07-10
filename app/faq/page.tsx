"use client";

import Link from "next/link";
import { useState } from "react";

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

  .faq-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .faq-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .faq-header {
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

  .faq-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .faq-logo img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .faq-back {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
  }
  .faq-back:hover { color: var(--green-mid); }

  .faq-hero {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    padding: 2rem 1.25rem 1.5rem;
  }

  .faq-eyebrow {
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

  .faq-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .faq-hero-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.6);
    line-height: 1.8;
  }

  .faq-main {
    padding: 1.75rem 1.25rem 2rem;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
  }

  .faq-item {
    border-bottom: 1px solid var(--cream-mid);
  }
  .faq-item:first-child {
    border-top: 1px solid var(--cream-mid);
  }

  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: none;
    border: none;
    text-align: left;
    padding: 1.1rem 0.25rem;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
  }

  .faq-question-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-dark);
    line-height: 1.5;
  }

  .faq-question[data-open="true"] .faq-question-text {
    color: var(--green-deep);
  }

  .faq-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--green-pale);
    color: var(--green-mid);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .faq-question[data-open="true"] .faq-icon {
    background: var(--green-mid);
    color: white;
    transform: rotate(135deg);
  }

  .faq-answer-wrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  .faq-answer-wrap[data-open="true"] {
    grid-template-rows: 1fr;
  }

  .faq-answer-inner {
    overflow: hidden;
  }

  .faq-answer {
    padding: 0 0.25rem 1.25rem;
  }

  .faq-answer p {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    margin-bottom: 0.6rem;
  }
  .faq-answer p:last-child { margin-bottom: 0; }

  .faq-answer ul {
    list-style: none;
    padding: 0;
    margin: 0.4rem 0 0.6rem;
  }

  .faq-answer ul li {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.8;
    padding-left: 1.25rem;
    position: relative;
    margin-bottom: 0.35rem;
  }

  .faq-answer ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--green-mid);
    font-size: 11px;
  }

  .faq-answer ul li strong,
  .faq-answer p strong {
    color: var(--text-dark);
    font-weight: 500;
  }

  .faq-answer a {
    color: var(--green-mid);
    font-weight: 500;
    text-decoration: none;
  }

  .faq-cta {
    margin-top: 2rem;
    background: var(--green-pale);
    border: 1px solid var(--green-bright);
    border-radius: 16px;
    padding: 1.25rem;
    text-align: center;
  }

  .faq-cta p {
    font-size: 13px;
    color: var(--green-deep);
    margin-bottom: 0.75rem;
  }

  .faq-cta a {
    display: inline-block;
    background: var(--green-mid);
    color: white;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    padding: 0.65rem 1.5rem;
    border-radius: 30px;
  }

  .faq-note {
    font-size: 11px;
    font-weight: 300;
    font-style: italic;
    color: var(--text-muted);
    line-height: 1.8;
    margin-top: 1.5rem;
    text-align: center;
  }

  .faq-footer {
    border-top: 1px solid var(--cream-mid);
    padding: 1.25rem;
    text-align: center;
  }

  .faq-footer-copy {
    font-size: 10px;
    color: var(--text-muted);
  }
`;

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Bagaimana cara melakukan pemesanan?",
    a: (
      <>
        <p>Untuk melakukan pemesanan di RamuDjitu:</p>
        <ul>
          <li>Pilih produk di kategori, klik &#x201C;Lihat Detail Produk&#x201D;</li>
          <li>Lengkapi informasi pengiriman dan pilih metode pembayaran</li>
          <li>Lakukan pembayaran sesuai metode yang dipilih</li>
          <li>Anda akan menerima konfirmasi pesanan setelah pembayaran berhasil diverifikasi</li>
        </ul>
      </>
    ),
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: (
      <>
        <p>Kami menyediakan berbagai metode pembayaran melalui payment gateway pihak ketiga yang terintegrasi:</p>
        <ul>
          <li>Transfer bank / Virtual Account</li>
          <li>E-wallet (OVO, GoPay, DANA, ShopeePay, dll.)</li>
          <li>Kartu kredit/debit</li>
          <li>Cash on Delivery / COD (jika tersedia untuk area Anda)</li>
        </ul>
        <p>Ketersediaan metode pembayaran dapat bervariasi tergantung pada layanan payment gateway yang aktif.</p>
      </>
    ),
  },
  {
    q: "Apakah transaksi saya aman?",
    a: (
      <>
        <p>Ya, keamanan transaksi Anda adalah prioritas kami:</p>
        <ul>
          <li>Semua pembayaran diproses melalui payment gateway tersertifikasi dengan enkripsi SSL</li>
          <li>Kami tidak menyimpan data kartu kredit/debit Anda secara langsung</li>
          <li>Situs ini menggunakan protokol HTTPS untuk melindungi data Anda</li>
          <li>Platform teknologi (Scalev) menyediakan infrastruktur yang aman untuk operasional toko</li>
        </ul>
      </>
    ),
  },
  {
    q: "Berapa lama proses pengiriman?",
    a: (
      <>
        <p>Waktu pengiriman tergantung pada beberapa faktor:</p>
        <ul>
          <li>Lokasi tujuan pengiriman</li>
          <li>Jasa pengiriman yang dipilih saat checkout</li>
          <li>Waktu proses pengemasan pesanan (biasanya 1&#8211;2 hari kerja)</li>
        </ul>
        <p>Estimasi waktu pengiriman akan ditampilkan saat Anda memilih jasa pengiriman di halaman checkout. Perlu diingat bahwa estimasi bersifat perkiraan dan dapat berbeda dari waktu aktual.</p>
      </>
    ),
  },
  {
    q: "Bagaimana cara melacak pesanan saya?",
    a: (
      <ul>
        <li>Jika pesanan sudah dikirim, gunakan nomor resi yang diberikan untuk melacak melalui situs jasa pengiriman terkait</li>
        <li>Hubungi kami dengan menyertakan <strong>nomor pesanan</strong> jika Anda memerlukan bantuan lebih lanjut</li>
      </ul>
    ),
  },
  {
    q: "Apakah saya bisa mengubah atau membatalkan pesanan?",
    a: (
      <ul>
        <li><strong>Sebelum pengiriman:</strong> Ya, pesanan yang belum dikirim dapat diubah atau dibatalkan. Hubungi kami sesegera mungkin dengan menyertakan nomor pesanan Anda.</li>
        <li><strong>Setelah pengiriman:</strong> Pesanan yang sudah dikirim tidak dapat dibatalkan. Anda dapat mengajukan pengembalian setelah produk diterima sesuai dengan kebijakan pengembalian kami.</li>
      </ul>
    ),
  },
  {
    q: "Bagaimana kebijakan pengembalian dan refund?",
    a: (
      <>
        <p>Kami menerima pengembalian produk dalam kondisi berikut:</p>
        <ul>
          <li>Produk diterima dalam keadaan rusak atau cacat produksi</li>
          <li>Produk tidak sesuai dengan deskripsi atau spesifikasi yang tertera</li>
          <li>Produk yang diterima berbeda dari yang dipesan</li>
        </ul>
        <p>
          Pengajuan pengembalian harus dilakukan dalam waktu 3 hari kalender setelah produk diterima. Untuk informasi lengkap, silakan baca halaman{" "}
          <Link href="/kebijakan-pengembalian">Kebijakan Pengembalian</Link> kami.
        </p>
      </>
    ),
  },
  {
    q: "Berapa lama proses refund?",
    a: (
      <>
        <p>Refund diproses dalam waktu <strong>7&#8211;14 hari kerja</strong> setelah pengajuan pengembalian disetujui. Dana dikembalikan melalui metode pembayaran yang sama dengan yang digunakan saat pembelian.</p>
        <p>Untuk pesanan COD, refund dilakukan melalui transfer bank ke rekening yang Anda berikan. Waktu penerimaan dana dapat bervariasi tergantung pada kebijakan bank atau penyedia layanan pembayaran.</p>
      </>
    ),
  },
  {
    q: "Bagaimana jika produk yang diterima rusak atau tidak sesuai?",
    a: (
      <>
        <p>Jika Anda menerima produk yang rusak atau tidak sesuai pesanan:</p>
        <ul>
          <li>Hubungi kami dalam waktu <strong>3 hari kalender</strong> setelah produk diterima</li>
          <li>Sertakan <strong>foto dan/atau video</strong> yang menunjukkan kondisi produk serta kemasan</li>
          <li>Sertakan nomor pesanan dan deskripsi masalah</li>
          <li>Tim kami akan meninjau dan merespon dalam 1&#8211;3 hari kerja</li>
        </ul>
        <p>Biaya pengiriman pengembalian untuk produk rusak atau tidak sesuai ditanggung oleh RamuDjitu.id.</p>
      </>
    ),
  },
  {
    q: "Apakah bisa bayar di tempat (COD)?",
    a: (
      <>
        <p>Layanan Cash on Delivery (COD) tersedia untuk wilayah tertentu, tergantung pada jasa pengiriman yang mendukung COD di area Anda.</p>
        <ul>
          <li>Opsi COD akan muncul di halaman checkout jika tersedia untuk alamat Anda</li>
          <li>Pembayaran dilakukan secara tunai saat barang diterima</li>
          <li>Pastikan alamat dan nomor telepon Anda valid agar pengiriman lancar</li>
          <li>Penolakan paket COD tanpa alasan yang sah dapat membatasi penggunaan layanan di masa depan</li>
        </ul>
      </>
    ),
  },
  {
    q: "Bagaimana cara menghubungi kami?",
    a: (
      <>
        <p>Anda dapat menghubungi RamuDjitu.id melalui:</p>
        <ul>
          <li><strong>Email:</strong> ramudjitu.id@gmail.com</li>
          <li><strong>Telepon/WhatsApp:</strong> 0851-2607-9197</li>
        </ul>
        <p>Jam operasional: Senin&#8211;Jumat 09:00&#8211;17:00 WIB. Pesan di luar jam operasional akan direspon pada hari kerja berikutnya.</p>
      </>
    ),
  },
  {
    q: "Siapa yang mengelola toko ini?",
    a: (
      <>
        <p>RamuDjitu.id adalah pemilik dan pengelola toko ini. Seluruh transaksi, pemenuhan pesanan, layanan pelanggan, dan pengelolaan data merupakan tanggung jawab RamuDjitu.id.</p>
        <p>Scalev adalah penyedia platform teknologi yang menyediakan infrastruktur untuk pembuatan dan pengelolaan toko online. Scalev bukan merupakan pihak dalam transaksi jual beli antara Anda dan RamuDjitu.id.</p>
      </>
    ),
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="faq-outer">
        <div className="faq-wrapper">

          {/* HEADER */}
          <header className="faq-header">
            <Link className="faq-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}>
                <span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span>
              </span>
            </Link>
            <Link href="/#produk" className="faq-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="faq-hero">
            <div className="faq-eyebrow">Bantuan</div>
            <h1 className="faq-hero-title">Pertanyaan yang Sering Diajukan</h1>
            <p className="faq-hero-sub">Ketuk pertanyaan untuk melihat jawabannya.</p>
          </section>

          {/* MAIN */}
          <main className="faq-main">
            <div className="faq-list">
              {faqs.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div className="faq-item" key={i}>
                    <button
                      type="button"
                      className="faq-question"
                      data-open={isOpen}
                      aria-expanded={isOpen}
                      onClick={() => toggle(i)}
                    >
                      <span className="faq-question-text">{item.q}</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer-wrap" data-open={isOpen}>
                      <div className="faq-answer-inner">
                        <div className="faq-answer">{item.a}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="faq-cta">
              <p>Masih ada pertanyaan lain? Tim kami siap membantu.</p>
              <a href="https://wa.me/6285126079197" target="_blank" rel="noopener noreferrer">
                Chat via WhatsApp
              </a>
            </div>

            <p className="faq-note">
              Terakhir diperbarui: Maret 2026 · Halaman ini dibuat menggunakan platform Scalev sebagai penyedia teknologi. Seluruh aktivitas jual beli dan operasional toko merupakan tanggung jawab ramudjitu.id.
            </p>
          </main>

          {/* FOOTER */}
          <footer className="faq-footer">
            <div className="faq-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
