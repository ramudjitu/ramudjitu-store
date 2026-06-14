"use client";

import { useState } from "react";
import Link from "next/link";

const produkData: Record<string, {
  nama: string;
  harga: string;
  hargaNum: number;
  img: string;
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
    img: "/GetAmor.png",
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
    overflow-x: hidden;
    padding-bottom: 84px;
  }

  @media (min-width: 700px) {
    .pd-wrapper { max-width: 900px; padding-bottom: 40px; }
    .pd-main { display: flex; gap: 2rem; padding: 1.5rem; align-items: flex-start; }
    .pd-img-wrap { width: 360px; flex-shrink: 0; padding-bottom: 0; height: 360px; border-radius: 16px; }
    .pd-info { flex: 1; padding: 0; }
  }

  /* HEADER */
  .pd-header {
    background: var(--cream-light);
    padding: 0 1.25rem; height: 60px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
    border-bottom: 1px solid var(--cream-mid);
    box-shadow: 0 2px 8px rgba(30,18,8,0.06);
  }
  .pd-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .pd-logo img { height: 40px; width: 40px; border-radius: 50%; object-fit: cover; }
  .pd-logo-name { font-family: 'Playfair Display', serif; font-size: 15px; }
  .pd-back { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 13px; text-decoration: none; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; }
  .pd-back:hover { color: var(--green-mid); }
  .pd-back svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; }

  /* FOTO PRODUK */
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

  /* INFO */
  .pd-info { padding: 1.25rem; }
  .pd-harga { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 500; color: var(--green-mid); margin-bottom: 0.5rem; }
  .pd-nama { font-size: 15px; font-weight: 500; color: var(--text-dark); line-height: 1.5; margin-bottom: 1.25rem; }

  /* JUMLAH */
  .pd-jumlah-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 10px; }
  .pd-jumlah-label { font-size: 11px; font-weight: 500; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
  .pd-jumlah { display: flex; align-items: center; gap: 0; border: 1.5px solid var(--cream-mid); border-radius: 999px; width: fit-content; overflow: hidden; }
  .pd-jumlah-btn { width: 38px; height: 38px; background: none; border: none; font-size: 18px; cursor: pointer; color: var(--text-dark); transition: background 0.2s; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; }
  .pd-jumlah-btn:hover { background: var(--cream-mid); }
  .pd-jumlah-num { min-width: 38px; text-align: center; font-size: 14px; font-weight: 500; color: var(--text-dark); }
  .pd-total { font-size: 12px; color: var(--text-muted); }
  .pd-total strong { color: var(--green-mid); font-size: 15px; display: block; margin-top: 2px; }

  /* CTA ROW */
  .pd-cta-row { display: flex; gap: 10px; margin-bottom: 10px; }
  .pd-btn-keranjang {
    flex-shrink: 0;
    width: 48px; height: 48px;
    background: transparent; color: var(--green-mid);
    border: 2px solid var(--green-mid); border-radius: 14px;
    cursor: pointer; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center;
  }
  .pd-btn-keranjang:hover { background: var(--green-pale); }
  .pd-btn-keranjang svg { width: 20px; height: 20px; fill: none; stroke: var(--green-mid); stroke-width: 2; }
  .pd-btn-keranjang.added { background: var(--green-pale); border-color: var(--green-bright); }
  .pd-btn-beli {
    flex: 1; padding: 13px;
    background: var(--green-mid); color: #fff;
    border: none; border-radius: 14px;
    font-size: 15px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .pd-btn-beli:hover { background: var(--green-deep); }
  .pd-btn-beli svg { width: 18px; height: 18px; fill: none; stroke: #fff; stroke-width: 2; }

  .pd-btn-lp {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; padding: 13px;
    background: var(--brown-dark); color: var(--cream);
    border: none; border-radius: 14px;
    font-size: 14px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    text-decoration: none; transition: all 0.2s;
    margin-bottom: 1.5rem;
  }
  .pd-btn-lp:hover { opacity: 0.85; }
  .pd-btn-lp svg { width: 16px; height: 16px; fill: none; stroke: var(--cream); stroke-width: 2; }

  /* DIVIDER */
  .pd-divider { height: 1px; background: var(--cream-mid); margin-bottom: 1.25rem; }

  /* DESKRIPSI SINGKAT (teaser) */
  .pd-teaser-label { font-size: 10px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--green-mid); margin-bottom: 0.6rem; }
  .pd-teaser-text { font-size: 13px; font-weight: 300; color: var(--text-mid); line-height: 1.8; }

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
`;

export default function ProdukClient({ slug }: { slug: string }) {
  const produk = produkData[slug];
  const [jumlah, setJumlah] = useState(1);
  const [keranjangAdded, setKeranjangAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const tambahKeranjang = () => {
    setKeranjangAdded(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const formatHarga = (num: number) =>
    "Rp " + (num * jumlah).toLocaleString("id-ID");

  if (!produk) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: PRODUK_CSS }} />
        <div className="pd-outer">
          <div className="pd-wrapper">
            <header className="pd-header">
              <Link className="pd-logo" href="/">
                <img src="/logo.png" alt="RamuDjitu" />
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
              <img src="/logo.png" alt="RamuDjitu" style={{height:"40px", width:"40px", borderRadius:"50%", objectFit:"cover"}} />
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
          {/* FOTO */}
          <div className="pd-img-wrap">
            <img src={produk.img} alt={produk.nama} />
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
              <div className="pd-total">
                Total
                <strong>{formatHarga(produk.hargaNum)}</strong>
              </div>
            </div>

            {/* CTA: keranjang icon + beli sekarang */}
            <div className="pd-cta-row">
              <button className={`pd-btn-keranjang${keranjangAdded ? " added" : ""}`} onClick={tambahKeranjang} aria-label="Tambah ke Keranjang">
                {keranjangAdded ? (
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
                )}
              </button>
              <button className="pd-btn-beli" onClick={() => window.open(produk.checkout, "_blank")}>
                <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
                Beli Sekarang
              </button>
            </div>

            {/* CTA: Pelajari Selengkapnya -> LP Scalev */}
            <a href={produk.lp} target="_blank" rel="noopener noreferrer" className="pd-btn-lp">
              Pelajari Selengkapnya
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>

            <div className="pd-divider"></div>

            {/* DESKRIPSI SINGKAT (teaser) */}
            <div className="pd-teaser-label">Tentang Produk</div>
            <p className="pd-teaser-text">{produk.deskripsiSingkat}</p>
          </div>
          </div>

          {/* FOOTER */}
          <footer className="pd-footer">
            <p>© 2026 <a href="/">RamuDjitu</a> · Herbal pilihan, kesehatan terjaga</p>
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
