"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface BlogPreview {
  slug: string;
  title: string;
  tag: string;
  description: string;
  readTime: string;
  publishedAt: string;
  imageUrl?: string;
}

type KategoriKey = string;

function optimasiCloudinary(url: string, width: number = 400) {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}

const kategoriList: { key: KategoriKey; emoji: string; nama: string; count: string; img: string }[] = [
  { key: "Fondasi", emoji: "🥤", nama: "Fondasi", count: "6 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_600/v1781697490/kategori-fondasi.png_ufrw0h.png" },
  { key: "Regenerasi", emoji: "⚡", nama: "Regenerasi", count: "5 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_600/v1781697483/kategori-regenerasi.png_pnfzjl.png" },
  { key: "Perlindungan", emoji: "💪", nama: "Perlindungan", count: "4 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_600/v1781697483/kategori-perlindungan.png_c0yxsi.png" },
  { key: "Performa", emoji: "🛡️", nama: "Performa", count: "4 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_600/v1781697488/kategori-performa.png_ylvhfx.png" },
];

const RAW_CSS = `
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
    --amber-light: #F5C842;
    --text-dark: #1E1208;
    --text-mid: #5A4030;
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .ramu-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .ramu-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    position: relative;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    padding-bottom: 0;
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    overflow-x: visible;
  }

  .ramu-header {
    position: sticky; top: 0; z-index: 100;
    background: var(--cream-light);
    padding: 0 1.25rem; height: 68px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid rgba(245,236,215,0.08);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .ramu-logo { display: flex; align-items: center; text-decoration: none; gap: 10px; }
  .ramu-logo img { height: 44px; width: 44px; border-radius: 50%; object-fit: cover; }
  .ramu-header-right { display: flex; align-items: center; gap: 10px; }
  .ramu-nav { display: none; }
  @media (min-width: 500px) { .ramu-nav { display: flex; align-items: center; gap: 1.5rem; flex: 1; justify-content: flex-end; } }
  .ramu-nav a { color: var(--text-mid); font-size: 13px; font-weight: 400; text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .ramu-nav a:hover { color: var(--green-mid); }

  .ramu-hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; }
  .ramu-hamburger span { display: block; width: 20px; height: 2px; background: var(--brown-dark); border-radius: 2px; transition: all 0.3s; }
  .ramu-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .ramu-hamburger.open span:nth-child(2) { opacity: 0; }
  .ramu-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .ramu-mobile-menu {
    display: none; position: fixed;
    top: 60px; width: 100%; max-width: 500px;
    bottom: 0; left: 50%; transform: translateX(-50%);
    background: var(--cream-light); z-index: 99;
    flex-direction: column; padding: 1.25rem;
    overflow-y: auto; border-top: 1px solid var(--cream-mid);
  }
  .ramu-mobile-menu.open { display: flex; }
  .ramu-mobile-menu a { color: var(--text-dark); font-size: 15px; text-decoration: none; padding: 0.9rem 0; border-bottom: 1px solid var(--cream-mid); display: flex; align-items: center; gap: 10px; cursor: pointer; transition: color 0.2s; }
  .ramu-mobile-menu a:hover { color: var(--green-mid); }

  .ramu-hero {
    background: #1D2712;
    padding: 2.75rem 1.25rem 2.5rem;
    position: relative; overflow: hidden;
    border-top: 2px solid var(--amber);
  }
  .ramu-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(212,134,15,0.5), transparent); }
  .ramu-hero-badge { display: inline-flex; align-items: center; gap: 8px; background: transparent; border: 1px solid rgba(122,158,78,0.4); color: var(--green-light); font-size: 10px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; padding: 5px 14px; border-radius: 999px; margin-bottom: 1.5rem; }
  .ramu-hero-badge span { width: 4px; height: 4px; background: var(--green-bright); border-radius: 50%; display: inline-block; }
  .ramu-hero-title { font-family: 'Playfair Display', serif; font-size: 27px; font-weight: 500; color: var(--cream); line-height: 1.3; letter-spacing: 0.2px; margin-bottom: 1rem; }
  .ramu-hero-title em { font-style: italic; font-weight: 700; color: var(--green-light); }
  .ramu-hero-sub { font-size: 13px; font-weight: 300; color: rgba(245,236,215,0.55); line-height: 1.8; margin-bottom: 1.75rem; }
  .ramu-hero-cta { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--cream); font-size: 12px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; padding: 12px 28px; border-radius: 999px; border: 1px solid var(--green-bright); cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; margin-bottom: 2rem; }
  .ramu-hero-cta:hover { background: var(--green-mid); color: #fff; border-color: var(--green-mid); }
  .ramu-hero-cta svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.5; }
  .ramu-hero-stats { display: flex; }
  .ramu-stat-pill { background: transparent; border: none; border-right: 1px solid rgba(212,134,15,0.25); padding: 0 16px; text-align: center; flex: 1; }
  .ramu-stat-pill:last-child { border-right: none; }
  .ramu-stat-num { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 500; color: var(--green-light); letter-spacing: 0.5px; }
  .ramu-stat-label { font-size: 10px; color: rgba(245,236,215,0.7); margin-top: 4px; letter-spacing: 0.5px; text-transform: uppercase; }

  .ramu-section { padding: 1.75rem 1.25rem; }
  .ramu-section-alt { padding: 1.75rem 1.25rem; background: var(--cream-mid); }
  .ramu-eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--green-mid); margin-bottom: 0.5rem; }
  .ramu-section-title { font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 300; color: #000; margin-bottom: 1.25rem; line-height: 1.35; }

  .ramu-kat-card { min-width: 200px; height: 100px; flex-shrink: 0; scroll-snap-align: start; background: #fff; border: 1.5px solid var(--cream-mid); border-radius: 14px; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: row; align-items: center; gap: 12px; }
  @media (min-width: 500px) { .ramu-kat-card { min-width: 220px; height: 110px; } }
  .ramu-kat-card:hover { border-color: var(--green-bright); }
  .ramu-kat-card:hover .ramu-kat-img { transform: scale(1.06); filter: brightness(1.05); }
  .ramu-kat-card.active { border-color: var(--green-mid); background: var(--green-pale); }
  .ramu-kat-img { transition: transform 0.4s ease, filter 0.3s ease; }
  .ramu-kat-label {
    background: rgba(0,0,0,0.08);
    backdrop-filter: blur(6px);
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 14px;
    border-radius: 999px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    border: 1px solid transparent;
    transition: all 0.3s ease;
    letter-spacing: 0.2px;
  }
  .ramu-kat-card:hover .ramu-kat-label {
    background: rgba(74,122,37,0.35);
    border-color: rgba(197,220,142,0.6);
    letter-spacing: 0.6px;
  }

.ramu-kat-arrow {
  position: absolute; top: 50%; transform: translateY(-50%); z-index: 10;
  background: #fff; border: 1.5px solid var(--cream-mid); border-radius: 50%;
  width: 36px; height: 36px; font-size: 20px; line-height: 1; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-dark); transition: all 0.2s;
}
.ramu-kat-arrow:hover { background: var(--green-mid); border-color: var(--green-mid); color: #fff; }
.ramu-kat-arrow.left { left: 0; }
.ramu-kat-arrow.right { right: 0; }

  .ramu-filter-label { font-size: 12px; color: #000; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 1.5px; padding-bottom: 0.75rem; border-bottom: 1px solid var(--cream-mid); }
  .ramu-filter-label strong { color: #000; font-family: 'DM Sans', sans-serif; font-style: normal; font-weight: 400; text-transform: none; letter-spacing: 0; font-size: 12px; }
  .ramu-produk-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 480px) { .ramu-produk-grid { grid-template-columns: 1fr 1fr; } }
  .ramu-p-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; overflow: hidden; cursor: pointer; transition: all 0.25s; }
  .ramu-p-card:hover { border-color: var(--green-bright); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(74,122,37,0.18); }
  .ramu-p-img { position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; background: var(--green-pale); }
  .ramu-p-img img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: var(--cream-light); transition: transform 0.5s ease; }
  .ramu-p-card:hover .ramu-p-img img { transform: scale(1.06); }
  .ramu-p-info { padding: 10px; }
  .ramu-p-price { font-size: 16px; font-weight: 700; color: #111827 !important; margin-bottom: 4px; display: block; }
  .ramu-p-name { font-size: 12px; font-weight: 500; color: #1F2937 !important; margin-bottom: 4px; line-height: 1.4; }
  .ramu-p-desc { font-size: 11px; font-weight: 300; color: var(--text-muted) !important; margin-bottom: 10px; line-height: 1.5; }
  .ramu-p-btn-detail {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    width: 100%; height: 46px;
    background: #1D2712; color: var(--cream);
    border: 1px solid var(--green-bright); border-radius: 999px;
    font-size: 11px; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    text-decoration: none; transition: all 0.25s;
    margin-top: 8px;
  }
  .ramu-p-btn-detail:hover { background: var(--green-mid); color: #fff; border-color: var(--green-mid); }

  .ramu-blog-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem; }
  .ramu-btn-outline { display: inline-flex; align-items: center; border: 1px solid var(--green-mid); color: #1D2712; font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 7px 16px; border-radius: 999px; text-decoration: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif; background: transparent; cursor: pointer; }
  .ramu-btn-outline:hover { background: var(--green-mid); color: #fff; }
  .ramu-blog-grid { display: flex; flex-direction: column; gap: 12px; }
  .ramu-blog-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; overflow: hidden; text-decoration: none; display: flex; transition: all 0.2s; }
  .ramu-blog-card:hover { border-color: var(--green-bright); }
  .ramu-blog-card:hover .ramu-blog-tag { background: rgba(74,122,37,0.15); border-color: var(--green-mid); letter-spacing: 1.4px; }
  .ramu-blog-img { width: 90px; min-height: 100px; background: var(--green-pale); display: flex; align-items: center; justify-content: center; font-size: 32px; flex-shrink: 0; overflow: hidden; }
  .ramu-blog-img img { width: 100%; height: 100%; object-fit: cover; }
  .ramu-blog-info { padding: 12px; flex: 1; }
  .ramu-blog-tag { display: inline-block; background: rgba(74,122,37,0.1); color: #1D2712; font-size: 9px; font-weight: 600; letter-spacing: 1px; text-transform: none; padding: 4px 12px; border-radius: 999px; border: 1px solid transparent; margin-bottom: 8px; transition: all 0.3s ease; }
  .ramu-blog-title { font-family: 'Playfair Display', serif; font-size: 13px; color: var(--text-dark); line-height: 1.4; margin-bottom: 6px; }
  .ramu-blog-meta { font-size: 10px; color: var(--text-muted); }
  .ramu-blog-empty { text-align: center; padding: 2rem 1rem; color: var(--text-muted); font-size: 12px; }

  .ramu-footer { background: #1D2712; padding: 2.5rem 1.25rem 0; position: relative; }
  .ramu-footer-logo { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--cream); margin-bottom: 4px; }
  .ramu-footer-tagline { font-size: 11px; font-weight: 300; color: rgba(245,236,215,0.5); margin-bottom: 1.5rem; }
  .ramu-footer-sosmed { display: flex; gap: 10px; margin-bottom: 1.5rem; }
  .ramu-sosmed-btn { width: 34px; height: 34px; border-radius: 9px; background: transparent; border: none; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: transform 0.2s; }
  .ramu-sosmed-btn:hover { background: var(--green-mid) !important; transform: translateY(-2px); }
  .ramu-sosmed-btn svg { width: 17px; height: 17px; fill: #fff; }
  .ramu-sosmed-fb { background: #1877F2 !important; }
  .ramu-sosmed-ig { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) !important; }
  .ramu-sosmed-tt { background: #000 !important; }
  .ramu-sosmed-yt { background: #FF0000 !important; }
  .ramu-footer-links { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-bottom: 1.5rem; }
  .ramu-footer-links a { font-size: 11px; color: rgba(245,236,215,0.5); text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .ramu-footer-links a:hover { color: var(--green-light); }
  .ramu-footer-links a:visited { color: rgba(245,236,215,0.5); }
  .ramu-footer-copy { font-size: 10px; color: var(--text-mid); text-align: center; background: var(--cream-light); border-top: 2px solid var(--amber); margin: 1.5rem -1.25rem 0; padding: 1rem 1.25rem; }

  .ramu-wa-float {
    position: fixed;
    bottom: 70px;
    right: calc(50% - 345px + 16px);
    z-index: 999;
    width: 52px; height: 52px;
    border-radius: 50%;
    background: #25D366;
    border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(37,211,102,0.4);
    transition: transform 0.2s;
  }
  .ramu-wa-float:hover { transform: scale(1.1); }
  .ramu-wa-float svg { width: 26px; height: 26px; fill: #fff; }
  @media (max-width: 690px) {
    .ramu-wa-float { right: 16px; }
  }
  @media (max-width: 640px) {
    .ramu-hamburger { display: flex; }
  }
`;

export default function HomeContent({ blogPreviews, produkList }: { blogPreviews: BlogPreview[], produkList: any[] }) {
  const [aktifKategori, setAktifKategori] = useState<KategoriKey>("Fondasi");
  const [menuOpen, setMenuOpen] = useState(false);
  const katGridRef = useRef<HTMLDivElement>(null);
  const scrollKat = (dir: number) => { katGridRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' }); };
  const [btnActive, setBtnActive] = useState('');

 const waNumber = "6285126079197";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RAW_CSS }} />
      <div className="ramu-outer">
        <div className="ramu-wrapper">

          {/* HEADER */}
          <header className="ramu-header">
            <Link className="ramu-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_80/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{ height: "56px", width: "56px", borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: "700", letterSpacing: "0.3px" }}>
                <span style={{ color: "#2e3a1f" }}>Ramu</span><span style={{ color: "#4a3218" }}>Djitu</span>
              </span>
            </Link>
            <nav className="ramu-nav">
              <a onClick={() => scrollTo("produk")}>Produk</a>
              <Link href="/tentang-kami">Tentang Kami</Link>
              <Link href="/blog">Blog</Link>
            </nav>
            <button className={`ramu-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </header>

          {/* MOBILE MENU */}
          <div className={`ramu-mobile-menu${menuOpen ? " open" : ""}`}>
            <a onClick={() => scrollTo("produk")}>Produk</a>
            <Link href="/tentang-kami" onClick={() => setMenuOpen(false)}>Tentang Kami</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </div>

          {/* HERO */}
          <section className="ramu-hero">
            <div className="ramu-hero-badge">HEALTH & WELLNESS PILIHAN</div>
            <h1 className="ramu-hero-title">Tidak Semua Produk Kami Jual. Hanya yang Kami <em>Percaya,</em></h1>
            <p style={{ fontSize: "17px", fontWeight: "400", color: "rgba(245,236,215,0.75)", lineHeight: "1.6", marginTop: "-0.5rem", marginBottom: "1.5rem" }}>Temukan pilihan terpercaya untuk hidup yang lebih sehat</p>
            <button className="ramu-hero-cta" onClick={() => scrollTo("produk")}>
              Lihat Semua Produk
            <svg viewBox="0 0 24 24" fill="#fff"><polygon points="8 5 19 12 8 19 8 5" /></svg>  
            </button>
            <div className="ramu-hero-stats">
              <div className="ramu-stat-pill"><div className="ramu-stat-num">PRODUK PILIHAN</div><div className="ramu-stat-label">Health & Wellness</div></div>
              <div className="ramu-stat-pill"><div className="ramu-stat-num">BPOM</div><div className="ramu-stat-label">Terdaftar</div></div>
              <div className="ramu-stat-pill"><div className="ramu-stat-num">MULTI-BRAND</div><div className="ramu-stat-label">Terpercaya</div></div>
            </div>
          </section>

          {/* KATEGORI */}
          <section className="ramu-section-alt" id="produk">
            <div className="ramu-eyebrow">Kategori</div>
            <h2 className="ramu-section-title">Pilih kebutuhanmu</h2>
            <div style={{ position: "relative", padding: "0 18px" }}>
             <button onClick={() => scrollKat(-1)} className="ramu-kat-arrow left">‹</button>
             <button onClick={() => scrollKat(1)} className="ramu-kat-arrow right">›</button>
              <div ref={katGridRef} style={{ display: "flex", gap: "10px", overflowX: "auto", scrollBehavior: "smooth", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {kategoriList.map((kat) => (
                  <div key={kat.key} className={`ramu-kat-card${aktifKategori === kat.key ? " active" : ""}`} onClick={() => setAktifKategori(kat.key)} style={{ position: "relative", overflow: "hidden", padding: 0 }}>
                    <img src={kat.img} alt={kat.nama} className="ramu-kat-img" fetchPriority={kat.key === "Fondasi" ? "high" : "low"} loading={kat.key === "Fondasi" ? "eager" : "lazy"} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
                    <div style={{ position: "absolute", bottom: "10px", left: "12px", zIndex: 2 }}>
                    <div className="ramu-kat-label">{kat.nama}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRODUK */}
          <section className="ramu-section">
            <div className="ramu-eyebrow">Produk</div>
            <div className="ramu-filter-label"><strong>{kategoriList.find((k) => k.key === aktifKategori)?.nama}</strong></div>
            <div className="ramu-produk-grid">
              {produkList.filter(p => p.kategori === aktifKategori).length === 0 ? (
                <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
                  Belum ada produk di kategori ini 🌿
                </div>
              ) : (
                produkList.filter(p => p.kategori === aktifKategori).map((p, i) => (
                  <Link key={i} className="ramu-p-card" href={`/produk/${p.slug}`} style={{ textDecoration: "none" }}>
                    <div className="ramu-p-img">
                      {p.gambar && <img src={optimasiCloudinary(p.gambar)} alt={p.nama} />}
                    </div>
                    <div className="ramu-p-info">
                      <span className="ramu-p-price">{p.harga}</span>
                      <div className="ramu-p-name">{p.nama}</div>
                      <div className="ramu-p-desc">{p.deskripsiSingkat}</div>
                      <span className="ramu-p-btn-detail">Lihat Detail Produk →</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>

          {/* BLOG */}
          <section className="ramu-section-alt">
            <div className="ramu-blog-header">
              <div>
                <div className="ramu-eyebrow">Artikel & Tips</div>
                <h2 className="ramu-section-title" style={{ marginBottom: 0 }}>Edukasi herbal untuk hidup sehat</h2>
              </div>
              <Link href="/blog" className="ramu-btn-outline">Semua →</Link>
            </div>
            {blogPreviews.length === 0 ? (
              <div className="ramu-blog-empty">Belum ada artikel. Tulis di Sanity Studio ya 🌿</div>
            ) : (
              <div className="ramu-blog-grid">
                {blogPreviews.map((b) => (
                  <Link href={`/blog/${b.slug}`} className="ramu-blog-card" key={b.slug}>
                    <div className="ramu-blog-img">
                      {b.imageUrl ? <img src={b.imageUrl} alt={b.title} /> : "🌿"}
                    </div>
                    <div className="ramu-blog-info">
                      <span className="ramu-blog-tag">{b.tag}</span>
                      <div className="ramu-blog-title">{b.title}</div>
                      <div className="ramu-blog-meta">{b.publishedAt} · {b.readTime} baca</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* FOOTER */}
          <footer className="ramu-footer">
            <div className="ramu-footer-logo">
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: "700" }}>
                <span style={{ color: "#F5C842" }}>Ramu</span><span style={{ color: "#F5ECD7" }}>Djitu</span>
              </span>
            </div>
            <div className="ramu-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
            <div className="ramu-footer-sosmed">
              <a href="https://facebook.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-fb">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://instagram.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-ig">
            <svg viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" />
            <circle cx="12" cy="12" r="4" fill="none" />
            <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
            </svg>
            </a>
              <a href="https://youtube.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-yt">
              <svg viewBox="0 0 24 24" fill="#fff"><polygon points="8 5 19 12 8 19 8 5" /></svg>
              </a>
              <a href="https://tiktok.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-tt">
                <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" /></svg>
              </a>
            </div>
            <div className="ramu-footer-links">
              <Link href="/syarat-ketentuan">Syarat & Ketentuan</Link> 
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
              <Link href="/kebijakan-pengembalian">Kebijakan Pengembalian</Link>
              <Link href="/hubungi-kami">Hubungi Kami</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="ramu-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
