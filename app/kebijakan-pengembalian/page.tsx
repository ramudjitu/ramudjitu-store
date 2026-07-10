import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Pengembalian | Ramudjitu",
  description: "Kebijakan pengembalian, penukaran, dan refund produk yang dibeli melalui toko RamuDjitu.",
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

  .kpg-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .kpg-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .kpg-header {
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

  .kpg-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .kpg-logo img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .kpg-back {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
  }
  .kpg-back:hover { color: var(--green-mid); }

  .kpg-hero {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    padding: 2rem 1.25rem 1.5rem;
  }

  .kpg-eyebrow {
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

  .kpg-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .kpg-hero-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.6);
    line-height: 1.8;
  }

  .kpg-main {
    padding: 2rem 1.25rem;
  }

  .kpg-updated {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .kpg-intro {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.9;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .kpg-intro p {
    margin-bottom: 0.75rem;
  }
  .kpg-intro p:last-child {
    margin-bottom: 0;
  }

  .kpg-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .kpg-section:last-child {
    border-bottom: none;
  }

  .kpg-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
  }

  .kpg-section-num {
    color: var(--green-mid);
    margin-right: 6px;
  }

  .kpg-section-sub {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dark);
    margin: 1rem 0 0.4rem;
  }

  .kpg-section p {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    margin-bottom: 0.75rem;
  }

  .kpg-section p:last-child {
    margin-bottom: 0;
  }

  .kpg-section ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0.75rem;
  }

  .kpg-section ul li {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    padding-left: 1.25rem;
    position: relative;
    margin-bottom: 0.4rem;
  }

  .kpg-section ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--green-mid);
    font-size: 11px;
  }

  .kpg-section ul li strong,
  .kpg-section p strong {
    color: var(--text-dark);
    font-weight: 500;
  }

  .kpg-contact-box {
    background: var(--green-pale);
    border: 1px solid var(--green-bright);
    border-radius: 14px;
    padding: 1.25rem;
    margin-top: 0.5rem;
  }

  .kpg-contact-box p {
    font-size: 13px;
    font-weight: 400;
    color: var(--green-deep);
    margin-bottom: 0.25rem;
  }

  .kpg-contact-box a {
    color: var(--green-mid);
    text-decoration: none;
    font-weight: 500;
  }

  .kpg-note {
    font-size: 11px;
    font-weight: 300;
    font-style: italic;
    color: var(--text-muted);
    line-height: 1.8;
    margin-top: 1.5rem;
  }

  .kpg-footer {
    border-top: 1px solid var(--cream-mid);
    padding: 1.25rem;
    text-align: center;
  }

  .kpg-footer-copy {
    font-size: 10px;
    color: var(--text-muted);
  }
`;

const sections: {
  num: string;
  title: string;
  blocks: (
    | { type: "p"; text: string }
    | { type: "sub"; text: string }
    | { type: "ul"; items: string[] }
  )[];
}[] = [
  {
    num: "1",
    title: "Definisi",
    blocks: [
      { type: "p", text: "Kecuali secara tegas dinyatakan lain dalam Kebijakan ini, istilah-istilah berikut memiliki arti sebagai berikut:" },
      { type: "ul", items: [
        '"Pengembalian" adalah proses pengembalian produk yang telah diterima oleh Anda kepada Kami untuk tujuan penukaran atau refund.',
        '"Penukaran" adalah proses penggantian Produk yang telah diterima dengan produk lain yang setara atau sesuai kesepakatan Para Pihak.',
        '"Refund" adalah pengembalian dana kepada pembeli atas produk yang dikembalikan sesuai dengan ketentuan yang berlaku.',
        '"Produk Fisik" adalah barang berwujud yang dikirim melalui jasa pengiriman.',
      ]},
    ],
  },
  {
    num: "2",
    title: "Syarat Pengembalian Produk",
    blocks: [
      { type: "p", text: "Pengembalian produk fisik dapat diajukan dalam kondisi berikut:" },
      { type: "ul", items: [
        "Produk diterima dalam keadaan rusak atau cacat produksi.",
        "Produk tidak sesuai dengan deskripsi atau spesifikasi yang tertera pada Toko.",
        "Produk yang diterima berbeda dari spesifikasi yang dipesan (salah warna, ukuran, atau jenis).",
        "Jumlah produk yang diterima tidak sesuai dengan pesanan.",
      ]},
      { type: "sub", text: "Pengajuan pengembalian wajib memenuhi ketentuan sebagai berikut:" },
      { type: "ul", items: [
        "Pengajuan pengembalian wajib dilakukan paling lambat 3 (tiga) hari kalender setelah produk diterima.",
        "Produk dalam kondisi asli, belum digunakan, dan masih dalam kemasan asli (sepanjang memungkinkan).",
        "Anda wajib mengirimkan bukti berupa foto dan/atau video yang menunjukkan kondisi produk dan kemasan saat diterima.",
        "Mencantumkan nomor pesanan serta deskripsi permasalahan.",
      ]},
      { type: "sub", text: "Kami berhak untuk menolak permohonan pengembalian apabila:" },
      { type: "ul", items: [
        "Permohonan diajukan melewati batas waktu yang ditentukan.",
        "Produk telah digunakan, rusak karena kesalahan penggunaan, atau tidak dalam kondisi semula.",
        "Tidak terdapat bukti yang memadai.",
        "Permohonan tidak memenuhi ketentuan yang berlaku.",
      ]},
    ],
  },
  {
    num: "3",
    title: "Proses Pengajuan Pengembalian",
    blocks: [
      { type: "p", text: "Proses pengajuan pengembalian produk dilakukan sebagai berikut:" },
      { type: "ul", items: [
        "Anda menghubungi Kami melalui kontak resmi yang tersedia pada Toko.",
        "Anda menyampaikan nomor pesanan, deskripsi permasalahan dan bukti pendukung kepada Kami.",
        "Kami akan melakukan verifikasi atas pengajuan pengembalian dalam jangka waktu 1 (satu) hingga 3 (tiga) hari kerja.",
        "Apabila pengajuan disetujui, kami akan memberikan instruksi pengiriman pengembalian produk. Anda wajib mengembalikan Produk dalam kondisi semula, termasuk kemasan, label, dan kelengkapan lainnya, kecuali ditentukan lain.",
        "Refund atau penukaran akan diproses setelah Produk diterima dan diverifikasi.",
      ]},
    ],
  },
  {
    num: "4",
    title: "Biaya Pengiriman Pengembalian",
    blocks: [
      { type: "p", text: "Dalam hal pengembalian produk disetujui:" },
      { type: "ul", items: [
        "Biaya pengiriman ditanggung oleh Kami apabila pengembalian disebabkan oleh kesalahan Kami (produk rusak, cacat, tidak sesuai spesifikasi atau tidak sesuai deskripsi).",
        "Biaya pengiriman ditanggung oleh Anda apabila disebabkan oleh alasan lain, termasuk perubahan keputusan pembelian.",
        "Metode pengiriman pengembalian akan diinformasikan oleh tim kami saat pengajuan disetujui.",
      ]},
    ],
  },
  {
    num: "5",
    title: "Penukaran Produk",
    blocks: [
      { type: "ul", items: [
        "Proses penukaran produk mengikuti langkah-langkah kebijakan yang sama dengan pengembalian produk dalam Ketentuan ini.",
        "Penukaran produk dapat dilakukan apabila produk pengganti tersedia di stok.",
        "Dalam hal produk pengganti yang diinginkan tidak tersedia, Anda dapat memilih produk lain dengan nilai setara atau mengajukan refund sesuai ketentuan yang berlaku.",
        "Setiap selisih harga (jika ada) akan diinformasikan oleh Kami kepada Anda sebelum proses penukaran dilanjutkan.",
      ]},
    ],
  },
  {
    num: "6",
    title: "Proses Refund",
    blocks: [
      { type: "ul", items: [
        "Refund akan diproses dalam jangka waktu 7 (tujuh) hingga 14 (empat belas) hari kerja setelah pengajuan disetujui dan untuk produk fisik setelah produk diterima kembali oleh Kami.",
        "Refund dilakukan melalui metode pembayaran yang sama dengan yang digunakan saat transaksi atau pembelian.",
        "Untuk pembatalan atau pengembalian sebagian pesanan, refund dihitung secara proporsional berdasarkan item yang dikembalikan.",
        "Biaya pengiriman awal tidak termasuk dalam refund, kecuali pengembalian disebabkan oleh kesalahan Kami.",
        "Waktu penerimaan dana refund dapat berbeda tergantung pada kebijakan bank atau penyedia layanan pembayaran.",
      ]},
    ],
  },
  {
    num: "7",
    title: "Ketentuan Khusus Pesanan COD",
    blocks: [
      { type: "p", text: "Untuk pesanan dengan metode Cash on Delivery (COD):" },
      { type: "ul", items: [
        "Ketentuan pengembalian dan refund produk mengikuti langkah-langkah dalam kebijakan ini.",
        "Refund dilakukan melalui transfer bank ke rekening yang Anda berikan.",
        "Anda wajib memberikan informasi rekening bank yang benar, lengkap dan valid pada saat mengajukan permohonan refund pesanan COD.",
        "Anda bertanggung jawab penuh atas keakuratan informasi rekening yang diberikan. Kami tidak bertanggung jawab atas kesalahan transfer dana yang disebabkan oleh ketidaksesuaian atau kesalahan data rekening yang Anda berikan.",
        "Proses refund COD dapat memerlukan tambahan waktu 3 (tiga) hingga 5 (lima) hari kerja untuk proses verifikasi dan transfer.",
      ]},
    ],
  },
  {
    num: "8",
    title: "Produk yang Tidak Dapat Dikembalikan",
    blocks: [
      { type: "p", text: "Produk berikut tidak dapat dikembalikan atau direfund, kecuali terdapat cacat produksi atau kesalahan dari Kami:" },
      { type: "ul", items: [
        "Produk custom atau personalisasi yang dibuat sesuai permintaan khusus pembeli.",
        "Produk yang telah digunakan, dicuci, dimodifikasi setelah diterima, atau tidak dalam kondisi semula.",
        "Produk dengan segel keamanan yang sudah terbuka atau rusak (jika berlaku).",
        "Produk digital yang telah diunduh atau diakses (kecuali memenuhi pengecualian dalam kebijakan ini).",
        "Produk yang dikembalikan karena alasan subjektif, termasuk namun tidak terbatas pada ketidaksesuaian selera, preferensi pribadi atau ekspektasi pribadi.",
        "Produk dengan masa berlaku (perishable) yang sudah melewati tanggal kedaluwarsa.",
      ]},
    ],
  },
  {
    num: "9",
    title: "Pembatalan Pesanan",
    blocks: [
      { type: "sub", text: "Pembatalan pesanan produk sebelum pengiriman:" },
      { type: "ul", items: [
        "Pesanan yang belum diproses atau belum dikirim dapat diajukan pembatalan dengan menghubungi Kami melalui kontak resmi yang tersedia pada Toko.",
        "Persetujuan pembatalan tunduk pada status pemrosesan pesanan pada saat permohonan diajukan. Dalam hal pesanan telah memasuki tahap pengemasan atau pemrosesan lebih lanjut, kami berhak untuk menolak permohonan pembatalan.",
        "Dalam hal pembatalan disetujui sebelum pengiriman produk dilakukan, refund akan diproses penuh sesuai dengan metode pembayaran yang digunakan.",
      ]},
      { type: "sub", text: "Pembatalan pesanan produk setelah pengiriman:" },
      { type: "ul", items: [
        "Pesanan yang telah dikirim tidak dapat dibatalkan.",
        "Anda dapat mengajukan pengembalian produk setelah produk diterima sesuai dengan ketentuan dalam Kebijakan ini.",
        "Biaya pengiriman, termasuk biaya pengiriman ulang atau biaya lain yang timbul akibat pembatalan setelah pengiriman, menjadi tanggung jawab Anda, kecuali dalam hal kesalahan berasal dari Kami.",
      ]},
    ],
  },
  {
    num: "10",
    title: "Peran Platform",
    blocks: [
      { type: "p", text: "Platform Scalev bertindak semata-mata sebagai penyedia layanan teknologi (technology provider) yang menyediakan infrastruktur untuk pembuatan dan pengelolaan toko online. Platform tidak bertindak sebagai penjual, pembeli, agen, perantara, maupun pihak dalam transaksi jual beli antara Anda dan Kami. Dalam hal ini, maka:" },
      { type: "ul", items: [
        "Seluruh aktivitas transaksi, pemrosesan pesanan, pengiriman produk, pengembalian produk, penukaran dan refund merupakan tanggung jawab penuh Kami sebagai pemilik toko.",
        "Platform tidak terlibat dalam proses verifikasi, persetujuan, maupun penolakan atas permohonan pengembalian, penukaran, dan/atau refund yang diajukan oleh Anda.",
        "Platform tidak bertanggung jawab atas kerugian, klaim, tuntutan, atau sengketa yang timbul dari atau sehubungan dengan transaksi antara Anda dan Kami, termasuk namun tidak terbatas pada pelaksanaan kebijakan pengembalian dan refund.",
        "Platform tidak bertanggung jawab atas keputusan persetujuan atau penolakan pengajuan pengembalian.",
      ]},
    ],
  },
  {
    num: "11",
    title: "Penyelesaian Sengketa",
    blocks: [
      { type: "ul", items: [
        "Setiap sengketa terkait pengembalian, penukaran atau refund akan diselesaikan terlebih dahulu secara musyawarah untuk mufakat antara Anda dengan Kami.",
        "Apabila musyawarah tidak mencapai kesepakatan dalam waktu 30 (tiga puluh) hari kalender, maka sengketa dapat diselesaikan melalui Badan Penyelesaian Sengketa Konsumen (BPSK) atau Pengadilan Negeri yang berwenang di wilayah hukum Indonesia.",
      ]},
    ],
  },
];

export default function KebijakanPengembalianPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="kpg-outer">
        <div className="kpg-wrapper">

          {/* HEADER */}
          <header className="kpg-header">
            <Link className="kpg-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}>
                <span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span>
              </span>
            </Link>
            <Link href="/#produk" className="kpg-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="kpg-hero">
            <div className="kpg-eyebrow">Legal</div>
            <h1 className="kpg-hero-title">Kebijakan Pengembalian</h1>
            <p className="kpg-hero-sub">Ketentuan pengembalian, penukaran, dan refund produk yang dibeli melalui Toko.</p>
          </section>

          {/* MAIN */}
          <main className="kpg-main">
            <p className="kpg-updated">Terakhir diperbarui: Maret 2026</p>

            <div className="kpg-intro">
              <p>
                Dengan mengakses dan menggunakan situs ramudjitu.id (&#x201C;Toko&#x201D;), Anda dengan ini menyatakan telah membaca, memahami dan menyetujui ketentuan dalam Kebijakan Pengembalian, Penukaran dan Refund ini.
              </p>
              <p>
                RamuDjitu.id berkomitmen untuk memberikan produk dan layanan terbaik. Kebijakan ini mengatur ketentuan terkait pengembalian, penukaran dan refund atas Produk yang dibeli melalui Toko.
              </p>
            </div>

            {sections.map((s) => (
              <div className="kpg-section" key={s.num}>
                <h2 className="kpg-section-title">
                  <span className="kpg-section-num">{s.num}.</span>{s.title}
                </h2>

                {s.blocks.map((b, i) => {
                  if (b.type === "p") return <p key={i}>{b.text}</p>;
                  if (b.type === "sub") return <div className="kpg-section-sub" key={i}>{b.text}</div>;
                  return (
                    <ul key={i}>
                      {b.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  );
                })}
              </div>
            ))}

            {/* KONTAK */}
            <div className="kpg-section">
              <h2 className="kpg-section-title">
                <span className="kpg-section-num">12.</span>Kontak
              </h2>
              <p>Untuk mengajukan pengembalian, penukaran, refund atau pertanyaan terkait kebijakan ini, silakan hubungi:</p>
              <div className="kpg-contact-box">
                <p><strong>RamuDjitu</strong></p>
                <p>Telepon/WhatsApp: <a href="https://wa.me/6285126079197">0851-2607-9197</a></p>
              </div>
              <p className="kpg-note">
                Halaman ini dibuat menggunakan platform Scalev sebagai penyedia teknologi. Seluruh aktivitas jual beli, pengelolaan data pribadi, dan operasional toko merupakan tanggung jawab ramudjitu.id.
              </p>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="kpg-footer">
            <div className="kpg-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
