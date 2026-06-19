"use client";

import { useState } from "react";
import Link from "next/link";

const produkData: Record<string, {
  nama: string;
  harga: string;
  hargaNum: number;
  img: string;
    imgs?: string[];
  lp: string;
  checkout: string;
  deskripsiSingkat: string;
  deskripsi: string[];
  fitur: string[];
}> = {
  "getamor-superfood": {
    nama: "GetAmor Superfood Premium Nutrisi Lengkap untuk Semua Keluarga Sehat Setiap Hari",
    harga: "Rp 375.000",
    hargaNum: 375000,
    img: "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781696979/GetAmor_square_1024_tl2fgz.png",
    imgs: [
      "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781696979/GetAmor_square_1024_tl2fgz.png",
      "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781696978/GetAmor_Keluarga_oubgx4.png",
      "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781696977/GetAmor_Olah_raga_p9mnwf.png",
    ],
    lp: "#", // Ganti dengan URL LP Scalev
    checkout: "#", // Ganti dengan URL checkout Scalev
    deskripsiSingkat: "Menjaga kesehatan keluarga bukan hal yang mudah di tengah aktivitas yang padat. GetAmor hadir sebagai solusi praktis dengan kombinasi superfood alami pilihan dalam satu sajian — cukup 10 detik, siap dinikmati seluruh keluarga.",
    deskripsi: [
      "Menjaga kesehatan keluarga bukan hal yang mudah di tengah aktivitas yang padat. Mulai dari anak-anak, orang tua, hingga kamu sendiri — semuanya butuh asupan nutrisi yang cukup setiap hari.",
      "GetAmor hadir sebagai solusi praktis dengan kombinasi superfood alami pilihan dalam satu sajian. Dirancang untuk membantu memenuhi kebutuhan nutrisi harian keluarga, menjaga energi tetap stabil, serta mendukung daya tahan tubuh tanpa ribet.",
      "Cukup dalam beberapa detik, satu gelas GetAmor siap dinikmati oleh seluruh anggota keluarga — kapan saja, di mana saja.",
    ],
    fitur: [
      "Nutrisi lengkap dari bahan alami pilihan",
      "Praktis, hanya 10 detik siap minum",
      "Cocok untuk anak-anak hingga orang tua",
      "Mendukung energi & daya tahan tubuh setiap hari",
    ],
  },
};

const PRODUK_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

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
    --amber: #D4860F;
    --text-dark: #1E1208;
    --text-mid: #5A4030;
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pd-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .pd-wrapper {
    width: 100%;
    max-width: 660px;
    background: var(--cream-light);
    min-height: 100vh;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    overflow-x: clip;
    padding-bottom: 160px;
  }

  /* HEADER */
  .pd-header {
    background: var(--cream-light);
    padding: 0 1.25rem; height: 68px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
    border-bottom: 1px solid rgba(245,236,215,0.08);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .pd-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .pd-logo img { height: 44px; width: 44px; border-radius: 50%; object-fit: cover; }
  .pd-logo-name { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; }
  .pd-back { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 13px; text-decoration: none; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; }
  .pd-back:hover { color: var(--green-mid); }
  .pd-back svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; }

  /* FOTO PRODUK */
  .pd-foto-col { width: 100%; }
  .pd-img-wrap {
    width: 100%;
    position: relative;
    padding-bottom: 100%;
    background: var(--cream-light);
    overflow: hidden;
  }
  .pd-img-wrap img {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: contain;
    background: var(--cream-light);
  }
  .pd-thumb-row { display: flex; gap: 8px; padding: 10px 1.25rem; overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-snap-type: x proximity; }
  .pd-thumb { scroll-snap-align: start; }
  .pd-thumb { width: 64px; height: 64px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid #E5E7EB; cursor: pointer; }
  .pd-thumb.active { border-color: #16A34A; }
  .pd-thumb img { width: 100%; height: 100%; object-fit: cover; }

  /* INFO */
  .pd-info { padding: 24px; display: flex; flex-direction: column; }
  .pd-harga { font-family: 'DM Sans', sans-serif; font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 8px; }
  .pd-nama { font-size: 15px; font-weight: 500; color: #1F2937; line-height: 1.5; margin-bottom: 20px; }

  /* JUMLAH */
  .pd-jumlah-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 10px; }
  .pd-jumlah-label { font-size: 11px; font-weight: 500; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
  .pd-jumlah { display: flex; align-items: center; gap: 0; border: 1.5px solid #E5E7EB; border-radius: 999px; width: fit-content; overflow: hidden; }
  .pd-jumlah-btn { width: 38px; height: 38px; background: none; border: none; font-size: 18px; cursor: pointer; color: #374151; transition: background 0.2s; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; }
  .pd-jumlah-btn:hover { background: #F3F4F6; }
  .pd-jumlah-num { min-width: 38px; text-align: center; font-size: 14px; font-weight: 500; color: #374151; }

  /* CTA ROW */
  .pd-cta-row { display: flex; gap: 12px; align-items: stretch; margin-bottom: 8px; }
  .pd-cta-sticky {
    position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 100%; max-width: 660px; z-index: 100;
    background: var(--cream-light); border-top: 1px solid var(--cream-mid);
    padding: 10px 1.25rem; box-shadow: 0 -4px 16px rgba(30,18,8,0.08);
  }
  .pd-cta-sticky .pd-btn-lp { margin-bottom: 0; }

  .pd-btn-keranjang {
    flex-shrink: 0;
    width: 52px; height: 52px;
    background: #FFFFFF; color: #4B5563;
    border: 1.5px solid #4B5563; border-radius: 14px;
    cursor: pointer; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center;
  }
  .pd-btn-keranjang:hover { background: #F9FAFB; }
  .pd-btn-keranjang svg { width: 22px; height: 22px; fill: none; stroke: #4B5563; stroke-width: 2; }
  .pd-btn-keranjang.added { background: #F3F4F6; border-color: #4B5563; }
  .pd-btn-keranjang.added svg { stroke: #4B5563; }

  .pd-btn-beli {
    flex: 1; height: 52px; padding: 0 16px;
    background: #00AA5B; color: #FFFFFF;
    border: none; border-radius: 14px;
    font-size: 14px; font-weight: 700; line-height: 1; letter-spacing: 0.2px;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    box-shadow: 0 6px 14px rgba(0,0,0,0.12);
  }
  .pd-btn-beli:hover { background: #008C4A; }

  .pd-btn-lp {
    width: 100%; height: 52px; padding: 0 16px;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    background: #0071E3; color: #FFFFFF;
    border: none; border-radius: 14px;
    font-size: 14px; font-weight: 700;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    text-decoration: none; transition: all 0.2s;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  .pd-btn-lp:hover { background: #0058B0; }
  .pd-btn-lp svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; }

  /* DIVIDER */
  .pd-divider { height: 1px; background: var(--cream-mid); margin-bottom: 1.25rem; }

  /* DESKRIPSI SINGKAT (teaser) */
  .pd-teaser-label { font-size: 10px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--green-mid); margin-bottom: 0.6rem; }
  .pd-teaser-text { font-size: 13px; font-weight: 300; color: var(--text-mid); line-height: 1.8; margin-bottom: 1rem; }
  .pd-teaser-full { padding: 0 1.25rem 1.25rem; }

  /* TOAST */
  .pd-toast {
    position: fixed; bottom: 70px; left: 50%; transform: translateX(-50%);
    background: var(--green-deep); color: #fff;
    padding: 10px 24px; border-radius: 999px;
    font-size: 13px; font-weight: 500;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    z-index: 200; opacity: 0; transition: opacity 0.3s;
    white-space: nowrap;
  }
  .pd-toast.show { opacity: 1; }

  /* FOOTER */
  .pd-footer { background: var(--brown-dark); border-top: 1px solid rgba(245,236,215,0.08); padding: 1.5rem 1.25rem; text-align: center; }
  .pd-footer p { font-size: 11px; color: rgba(245,236,215,0.4); }
  .pd-footer a { color: var(--green-light); text-decoration: none; }
  .pd-footer-desktop { display: none; }

  .pd-bottom-nav { display: none; }

  /* ===== DESKTOP MEDIA QUERY (single block, placed last for priority) ===== */
  @media (min-width: 700px) {
    .pd-wrapper { max-width: 660px; padding-bottom: 84px; }
    .pd-main { display: flex; gap: 2rem; padding: 1.5rem; align-items: flex-start; }
    .pd-foto-col { width: 50%; flex-shrink: 0; }
    .pd-img-wrap { width: 100%; padding-bottom: 0; height: 320px; border-radius: 16px; }
    .pd-thumb-row { padding: 10px 0; }
    .pd-info { width: 50%; flex: none; }
    .pd-info { flex: 1; padding: 0; }
    .pd-teaser-full { padding: 0 1.5rem 1.5rem; }

    .pd-cta-sticky { position: static; max-width: none; width: auto; left: auto; transform: none; box-shadow: none; border-top: none; padding: 0; background: none; }
    .pd-cta-sticky .pd-btn-lp { margin-bottom: 1.5rem; }

    .pd-footer-mobile { display: none; }
    .pd-footer-desktop { display: block; text-align: left; padding: 2rem 1.25rem 1.5rem; }
    .pd-footer-logo-img { display: none; }
    .pd-footer-logo-text { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; margin-bottom: 4px; }
    .pd-footer-tagline-desktop { font-size: 11px; font-weight: 300; color: rgba(245,236,215,0.4); margin-bottom: 1.25rem; }
    .pd-footer-sosmed-desktop { display: flex; gap: 10px; margin-bottom: 1.5rem; }
    .pd-sosmed-btn { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; }
    .pd-sosmed-btn svg { width: 15px; height: 15px; }
    .pd-sosmed-fb { background: #1877F2; }
    .pd-sosmed-ig { background: #E1306C; }
    .pd-sosmed-yt { background: #FF0000; }
    .pd-sosmed-tt { background: #010101; }
    .pd-footer-links-desktop { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-bottom: 1.5rem; }
    .pd-footer-links-desktop a { font-size: 11px; color: rgba(245,236,215,0.4); text-decoration: none; }
    .pd-footer-copy-desktop { font-size: 10px; color: rgba(245,236,215,0.25); text-align: center; padding-top: 1rem; border-top: 1px solid rgba(245,236,215,0.08); }

    .pd-bottom-nav {
      display: flex; position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 100%; max-width: 660px; z-index: 100;
      background: var(--cream-light); border-top: 1px solid var(--cream-mid);
      padding: 8px 0 10px; box-shadow: 0 -4px 16px rgba(30,18,8,0.08);
      justify-content: space-around; align-items: center;
    }
    .pd-bottom-nav-item { display: flex; flex-direction: column; align-items: center; gap: 3px; text-decoration: none; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; flex: 1; padding: 4px 0; }
    .pd-bottom-nav-item svg { width: 20px; height: 20px; fill: none; stroke: var(--text-muted); stroke-width: 1.8; }
    .pd-bottom-nav-item span { font-size: 10px; color: var(--text-muted); }
    .pd-bottom-nav-wa svg { fill: #25D366 !important; stroke: none !important; }
    .pd-bottom-nav-wa span { color: #25D366 !important; }
  }
`;

export default function ProdukClient({ slug }: { slug: string }) {
  const produk = produkData[slug];
  const [jumlah, setJumlah] = useState(1);
  const [aktifFoto, setAktifFoto] = useState(0);
  const [keranjangAdded, setKeranjangAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const tambahKeranjang = () => {
    setKeranjangAdded(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  if (!produk) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: PRODUK_CSS }} />
        <div className="pd-outer">
          <div className="pd-wrapper">
            <header className="pd-header">
              <Link className="pd-logo" href="/">
                <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="RamuDjitu" style={{height:"44px", width:"44px", borderRadius:"50%", objectFit:"cover"}} />
              </Link>
              <Link href="/" className="pd-back">← Kembali</Link>
            </header>
            <div style={{textAlign:"center", padding:"6rem 2rem"}}>
              <div style={{fontSize:60, marginBottom:16}}>🌿</div>
              <h1 style={{fontFamily:"Playfair Display, serif", fontSize:24, marginBottom:12}}>Produk tidak ditemukan</h1>
              <Link href="/" style={{color:"#4A7A25"}}>← Kembali ke Toko</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRODUK_CSS }} />
      <div className="pd-outer">
        <div className="pd-wrapper">

          {/* HEADER */}
          <header className="pd-header">
            <Link className="pd-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="RamuDjitu" style={{height:"44px", width:"44px", borderRadius:"50%", objectFit:"cover"}} />
              <span className="pd-logo-name">
                <span style={{color:"#2e3a1f"}}>Ramu</span>
                <span style={{color:"#4a3218"}}>Djitu</span>
              </span>
            </Link>
            <Link className="pd-back" href="/">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
              Kembali
            </Link>
          </header>

          <div className="pd-main">
            {/* FOTO + THUMBNAIL - kolom kiri */}
            <div className="pd-foto-col">
              <div className="pd-img-wrap">
                <img src={produk.imgs ? produk.imgs[aktifFoto] : produk.img} alt={produk.nama} />
              </div>
              {produk.imgs && produk.imgs.length > 1 && (
                <div className="pd-thumb-row">
                  {produk.imgs.map((foto, i) => (
                    <div key={i} onClick={() => setAktifFoto(i)} className={`pd-thumb${aktifFoto === i ? " active" : ""}`}>
                      <img src={foto} alt={`foto ${i+1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="pd-info">
              <div className="pd-harga">{produk.harga}</div>
              <div className="pd-nama">{produk.nama}</div>

              {/* JUMLAH */}
              <div className="pd-jumlah-row">
                <div>
                  <div className="pd-jumlah-label">Jumlah</div>
                  <div className="pd-jumlah">
                    <button className="pd-jumlah-btn" onClick={() => setJumlah(Math.max(1, jumlah - 1))}>−</button>
                    <span className="pd-jumlah-num">{jumlah}</span>
                    <button className="pd-jumlah-btn" onClick={() => setJumlah(jumlah + 1)}>+</button>
                  </div>
                </div>
              </div>

              {/* CTA: keranjang icon + beli sekarang - STICKY mobile */}
              <div className="pd-cta-sticky">
                <div className="pd-cta-row">
                  <button className={`pd-btn-keranjang${keranjangAdded ? " added" : ""}`} onClick={tambahKeranjang} aria-label="Tambah ke Keranjang">
                    {keranjangAdded ? (
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
                    )}
                  </button>
                  <button className="pd-btn-beli" onClick={() => window.open(produk.checkout, "_blank")}>
                    Beli Sekarang
                  </button>
                </div>

                <a href={produk.lp} target="_blank" rel="noopener noreferrer" className="pd-btn-lp">
                  Pelajari Manfaat Lengkapnya →
                </a>
              </div>
            </div>
          </div>

          <div className="pd-teaser-full" style={{paddingTop:0, paddingBottom:0}}>
            <div className="pd-divider"></div>
          </div>

          {/* DESKRIPSI SINGKAT (teaser) - full width */}
          <div className="pd-teaser-full">
            <div className="pd-teaser-label">Tentang Produk</div>
            {produk.deskripsi.map((p, i) => <p className="pd-teaser-text" key={i}>{p}</p>)}
          </div>

          {/* BOTTOM NAV - desktop only */}
          <nav className="pd-bottom-nav">
            <Link className="pd-bottom-nav-item" href="/">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Beranda</span>
            </Link>
            <Link className="pd-bottom-nav-item" href="/#produk">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <span>Produk</span>
            </Link>
            <button className="pd-bottom-nav-item" onClick={tambahKeranjang}>
              <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
              <span>Keranjang</span>
            </button>
            <button className="pd-bottom-nav-item pd-bottom-nav-wa" onClick={() => window.open("https://wa.me/6281234567890", "_blank")}>
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>Chat</span>
            </button>
          </nav>

          {/* FOOTER */}
          <footer className="pd-footer">
            <div className="pd-footer-desktop">
              <div className="pd-footer-logo-text"><span style={{color:"#C5DC8E"}}>Ramu</span><span style={{color:"#F5ECD7"}}>Djitu</span></div>
              <div className="pd-footer-tagline-desktop">Herbal pilihan, kesehatan terjaga</div>
              <div className="pd-footer-sosmed-desktop">
                <a href="https://facebook.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="pd-sosmed-btn pd-sosmed-fb">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="https://instagram.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="pd-sosmed-btn pd-sosmed-ig">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
                </a>
                <a href="https://youtube.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="pd-sosmed-btn pd-sosmed-yt">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.97 2.97 0 00-2.088-2.088C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.41.598A2.97 2.97 0 00.502 6.186C0 7.904 0 12 0 12s0 4.096.502 5.814a2.97 2.97 0 002.088 2.088C4.308 20.5 12 20.5 12 20.5s7.692 0 9.41-.598a2.97 2.97 0 002.088-2.088C24 16.096 24 12 24 12s0-4.096-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
                </a>
                <a href="https://tiktok.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="pd-sosmed-btn pd-sosmed-tt">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
              <div className="pd-footer-links-desktop">
                <a href="#">Syarat & Ketentuan</a>
                <a href="#">Kebijakan Privasi</a>
                <a href="#">Kebijakan Pengembalian</a>
                <a href="#">Hubungi Kami</a>
                <a href="#">FAQ</a>
              </div>
              <div className="pd-footer-copy-desktop">© 2026 RamuDjitu · Semua hak dilindungi</div>
            </div>
            <p className="pd-footer-mobile">© 2026 <a href="/">RamuDjitu</a> · Herbal pilihan, kesehatan terjaga</p>
          </footer>

        </div>
      </div>

      {/* TOAST */}
      <div className={`pd-toast${showToast ? " show" : ""}`}>
        ✅ {jumlah} produk ditambahkan ke keranjang!
      </div>
    </>
  );
}
