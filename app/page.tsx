"use client";

import { useState } from "react";
import Link from "next/link";

interface Produk {
  nama: string;
  desc: string;
  harga: string;
  emoji: string;
  lp: string;
}

type KategoriKey = "nutrisi" | "stamina" | "amino" | "antioksidan";

const produkData: Record<KategoriKey, Produk[]> = {
  nutrisi: [
    { nama: "Green Superfood Blend", desc: "Spirulina & moringa untuk nutrisi harian", harga: "Rp 95.000", emoji: "🥤", lp: "#" },
    { nama: "Jus Kunyit Asam", desc: "Kunyit, asam jawa & madu untuk detoks alami", harga: "Rp 65.000", emoji: "🌿", lp: "#" },
    { nama: "Minuman Jahe Merah", desc: "Jahe merah & kayu manis untuk kehangatan", harga: "Rp 55.000", emoji: "🍵", lp: "#" },
  ],
  stamina: [
    { nama: "Ramu Stamina Plus", desc: "Temulawak & jahe merah untuk vitalitas harian", harga: "Rp 89.000", emoji: "⚡", lp: "#" },
    { nama: "Herbal Energi Pria", desc: "Pasak bumi & ginseng untuk stamina prima", harga: "Rp 120.000", emoji: "💥", lp: "#" },
    { nama: "Ramu Aktif Sport", desc: "Untuk performa fisik sebelum & sesudah olahraga", harga: "Rp 99.000", emoji: "🏃", lp: "#" },
  ],
  amino: [
    { nama: "Amino Complex Herbal", desc: "Asam amino esensial dari bahan nabati pilihan", harga: "Rp 135.000", emoji: "💪", lp: "#" },
    { nama: "Plant Protein Blend", desc: "Protein nabati lengkap dengan 9 asam amino", harga: "Rp 149.000", emoji: "🌱", lp: "#" },
    { nama: "Recovery Amino", desc: "Pemulihan otot pasca aktivitas berat", harga: "Rp 115.000", emoji: "🔄", lp: "#" },
  ],
  antioksidan: [
    { nama: "Ramu Imun Defense", desc: "Sambiloto & meniran untuk daya tahan tubuh", harga: "Rp 79.000", emoji: "🛡️", lp: "#" },
    { nama: "Vitamin C Herbal", desc: "Ekstrak camu-camu & rosehip alami", harga: "Rp 85.000", emoji: "🍊", lp: "#" },
    { nama: "Antox Herbal Blend", desc: "Polifenol tinggi dari teh hijau & grape seed", harga: "Rp 99.000", emoji: "🍇", lp: "#" },
  ],
};

const kategoriList: { key: KategoriKey; emoji: string; nama: string; count: string }[] = [
  { key: "nutrisi", emoji: "🥤", nama: "Minuman Nutrisi & Superfood", count: "6 produk" },
  { key: "stamina", emoji: "⚡", nama: "Stamina & Vitalitas", count: "5 produk" },
  { key: "amino", emoji: "💪", nama: "Asam Amino", count: "4 produk" },
  { key: "antioksidan", emoji: "🛡️", nama: "Antioksidan", count: "4 produk" },
];

const RAW_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --brown-dark: #1E1208;
    --brown-mid: #3A2210;
    --brown-warm: #6B3E1E;
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
  .ramu-body { font-family: 'DM Sans', sans-serif; background: var(--cream-light); color: var(--text-dark); overflow-x: hidden; }

  /* HEADER */
  .ramu-header {
    position: sticky; top: 0; z-index: 100;
    background: var(--brown-dark);
    padding: 0 2.5rem; height: 64px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid rgba(245,236,215,0.08);
  }
  .ramu-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
  .ramu-logo-mark {
    width: 38px; height: 38px; background: var(--green-mid); border-radius: 50%;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .ramu-logo-mark svg { width: 20px; height: 20px; fill: none; stroke: #fff; stroke-width: 1.8; }
  .ramu-logo-name { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--cream); letter-spacing: 0.3px; }
  .ramu-nav { display: flex; align-items: center; gap: 2rem; }
  .ramu-nav a { color: rgba(245,236,215,0.6); font-size: 13px; font-weight: 400; text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .ramu-nav a:hover { color: var(--cream); }
  .ramu-header-right { display: flex; align-items: center; gap: 12px; }
  .ramu-btn-cart {
    display: flex; align-items: center; gap: 7px;
    background: var(--green-mid); color: #fff; font-size: 13px; font-weight: 500;
    padding: 8px 18px; border-radius: 24px; border: none; cursor: pointer; transition: background 0.2s; font-family: 'DM Sans', sans-serif;
  }
  .ramu-btn-cart:hover { background: var(--green-deep); }
  .ramu-btn-cart svg { width: 15px; height: 15px; fill: none; stroke: #fff; stroke-width: 2; }

  /* HAMBURGER */
  .ramu-hamburger {
    display: none; flex-direction: column; justify-content: center; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 6px; z-index: 200;
  }
  .ramu-hamburger span {
    display: block; width: 22px; height: 2px; background: var(--cream);
    border-radius: 2px; transition: all 0.3s;
  }
  .ramu-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .ramu-hamburger.open span:nth-child(2) { opacity: 0; }
  .ramu-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* MOBILE MENU */
  .ramu-mobile-menu {
    display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
    background: var(--brown-dark); z-index: 99; flex-direction: column;
    padding: 2rem 1.5rem; gap: 0; overflow-y: auto;
  }
  .ramu-mobile-menu.open { display: flex; }
  .ramu-mobile-menu a {
    color: rgba(245,236,215,0.8); font-size: 18px; font-weight: 400;
    text-decoration: none; padding: 1rem 0;
    border-bottom: 1px solid rgba(245,236,215,0.08);
    transition: color 0.2s; cursor: pointer;
  }
  .ramu-mobile-menu a:hover { color: var(--cream); }
  .ramu-mobile-menu .ramu-btn-cart {
    margin-top: 1.5rem; justify-content: center; padding: 14px; border-radius: 12px; font-size: 15px;
  }

  /* HERO */
  .ramu-hero {
    background: var(--brown-dark); padding: 5rem 2.5rem 4rem;
    display: grid; grid-template-columns: 1fr auto; gap: 3rem;
    align-items: center; position: relative; overflow: hidden;
  }
  .ramu-hero::before {
    content: ''; position: absolute; top: -80px; right: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(74,122,37,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .ramu-hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(122,158,78,0.15); border: 1px solid rgba(122,158,78,0.3);
    color: var(--green-light); font-size: 11px; font-weight: 500;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 5px 14px; border-radius: 20px; margin-bottom: 1.5rem;
  }
  .ramu-hero-badge span { width: 6px; height: 6px; background: var(--green-bright); border-radius: 50%; display: inline-block; }
  .ramu-hero-title { font-family: 'Playfair Display', serif; font-size: 46px; font-weight: 400; color: var(--cream); line-height: 1.2; margin-bottom: 1.25rem; max-width: 500px; }
  .ramu-hero-title em { font-style: italic; color: var(--green-light); }
  .ramu-hero-sub { font-size: 15px; font-weight: 300; color: rgba(245,236,215,0.65); line-height: 1.8; max-width: 420px; margin-bottom: 2rem; }
  .ramu-hero-cta {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--green-mid); color: #fff; font-size: 14px; font-weight: 500;
    padding: 13px 28px; border-radius: 32px; text-decoration: none; border: none;
    cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
  }
  .ramu-hero-cta:hover { background: var(--green-deep); transform: translateY(-1px); }
  .ramu-hero-cta svg { width: 16px; height: 16px; fill: none; stroke: #fff; stroke-width: 2; }
  .ramu-hero-stats { display: flex; flex-direction: column; gap: 14px; }
  .ramu-stat-pill {
    background: rgba(245,236,215,0.06); border: 1px solid rgba(245,236,215,0.12);
    border-radius: 14px; padding: 18px 24px; text-align: center; min-width: 110px;
  }
  .ramu-stat-num { font-family: 'Playfair Display', serif; font-size: 24px; color: var(--green-light); }
  .ramu-stat-label { font-size: 11px; color: rgba(245,236,215,0.5); margin-top: 4px; }

  /* KEUNGGULAN */
  .ramu-keunggulan { padding: 4rem 2.5rem; background: var(--cream-light); }
  .ramu-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--green-mid); margin-bottom: 0.6rem; }
  .ramu-section-title { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 400; color: var(--text-dark); margin-bottom: 2.5rem; max-width: 480px; line-height: 1.35; }
  .ramu-k-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 18px; }
  .ramu-k-card {
    background: #fff; border: 1px solid var(--cream-mid); border-radius: 16px;
    padding: 1.5rem; transition: border-color 0.2s, transform 0.2s;
  }
  .ramu-k-card:hover { border-color: var(--green-bright); transform: translateY(-2px); }
  .ramu-k-icon {
    width: 44px; height: 44px; background: var(--green-pale); border-radius: 12px;
    display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
  }
  .ramu-k-icon svg { width: 22px; height: 22px; fill: none; stroke: var(--green-mid); stroke-width: 1.8; }
  .ramu-k-card h4 { font-size: 14px; font-weight: 500; color: var(--text-dark); margin-bottom: 6px; }
  .ramu-k-card p { font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.7; }

  /* KATEGORI */
  .ramu-kategori { background: var(--cream-mid); padding: 3.5rem 2.5rem; }
  .ramu-kat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin-top: 1.5rem; }
  .ramu-kat-card {
    background: #fff; border: 1.5px solid var(--cream-mid); border-radius: 16px;
    padding: 1.5rem 1rem; text-align: center; cursor: pointer; transition: all 0.2s;
  }
  .ramu-kat-card:hover { border-color: var(--green-bright); }
  .ramu-kat-card.active { border-color: var(--green-mid); background: var(--green-pale); }
  .ramu-kat-emoji { font-size: 34px; margin-bottom: 10px; display: block; }
  .ramu-kat-name { font-size: 13px; font-weight: 500; color: var(--text-dark); line-height: 1.4; margin-bottom: 4px; }
  .ramu-kat-count { font-size: 11px; color: var(--text-muted); }
  .ramu-kat-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cream-mid); margin: 10px auto 0; transition: background 0.2s; }
  .ramu-kat-card.active .ramu-kat-dot { background: var(--green-mid); }

  /* PRODUK */
  .ramu-produk { padding: 2.5rem 2.5rem 4rem; background: var(--cream-light); }
  .ramu-produk-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
  .ramu-filter-label { font-size: 13px; color: var(--text-muted); }
  .ramu-filter-label strong { color: var(--text-dark); }
  .ramu-produk-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 18px; }
  .ramu-p-card {
    background: #fff; border: 1px solid var(--cream-mid); border-radius: 16px;
    overflow: hidden; cursor: pointer; transition: all 0.2s;
  }
  .ramu-p-card:hover { border-color: var(--green-bright); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(74,122,37,0.1); }
  .ramu-p-img {
    height: 140px; background: var(--green-pale);
    display: flex; align-items: center; justify-content: center;
    font-size: 48px; position: relative;
  }
  .ramu-p-lp-tag {
    position: absolute; top: 10px; left: 10px;
    background: rgba(255,255,255,0.9); border: 1px solid var(--amber);
    color: var(--amber); font-size: 10px; font-weight: 500;
    padding: 3px 8px; border-radius: 10px;
  }
  .ramu-p-info { padding: 14px; }
  .ramu-p-name { font-size: 14px; font-weight: 500; color: var(--text-dark); margin-bottom: 5px; }
  .ramu-p-desc { font-size: 12px; font-weight: 300; color: var(--text-muted); margin-bottom: 12px; line-height: 1.6; }
  .ramu-p-footer { display: flex; align-items: center; justify-content: space-between; }
  .ramu-p-price { font-size: 15px; font-weight: 500; color: var(--green-mid); }
  .ramu-p-btn {
    background: var(--green-mid); color: #fff; border: none; border-radius: 10px;
    padding: 6px 14px; font-size: 12px; font-weight: 500; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: background 0.2s;
  }
  .ramu-p-btn:hover { background: var(--green-deep); }

  /* BLOG PREVIEW */
  .ramu-blog-preview { padding: 4rem 2.5rem; background: var(--cream-mid); }
  .ramu-blog-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
  .ramu-blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
  .ramu-blog-card {
    background: #fff; border: 1px solid var(--cream-mid); border-radius: 16px;
    overflow: hidden; text-decoration: none; transition: all 0.2s; display: block;
  }
  .ramu-blog-card:hover { border-color: var(--green-bright); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(74,122,37,0.1); }
  .ramu-blog-img {
    height: 120px; background: var(--green-pale);
    display: flex; align-items: center; justify-content: center; font-size: 40px;
  }
  .ramu-blog-info { padding: 16px; }
  .ramu-blog-tag {
    display: inline-block; background: var(--green-pale); color: var(--green-mid);
    font-size: 10px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;
    padding: 3px 10px; border-radius: 10px; margin-bottom: 10px;
  }
  .ramu-blog-title { font-family: 'Playfair Display', serif; font-size: 15px; color: var(--text-dark); line-height: 1.4; margin-bottom: 8px; }
  .ramu-blog-excerpt { font-size: 12px; font-weight: 300; color: var(--text-muted); line-height: 1.7; margin-bottom: 12px; }
  .ramu-blog-meta { font-size: 11px; color: var(--text-muted); }
  .ramu-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    border: 1.5px solid var(--green-mid); color: var(--green-mid);
    font-size: 13px; font-weight: 500; padding: 9px 20px; border-radius: 24px;
    text-decoration: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
    background: transparent; cursor: pointer;
  }
  .ramu-btn-outline:hover { background: var(--green-mid); color: #fff; }

  /* TESTIMONI */
  .ramu-testimoni { background: var(--brown-dark); padding: 4rem 2.5rem; }
  .ramu-testimoni .ramu-eyebrow { color: var(--green-light); }
  .ramu-testimoni .ramu-section-title { color: var(--cream); }
  .ramu-testi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin-top: 1.5rem; }
  .ramu-t-card {
    background: rgba(245,236,215,0.05); border: 1px solid rgba(245,236,215,0.1);
    border-radius: 16px; padding: 1.5rem; transition: border-color 0.2s;
  }
  .ramu-t-card:hover { border-color: rgba(122,158,78,0.4); }
  .ramu-t-stars { color: var(--amber-light); font-size: 13px; margin-bottom: 10px; letter-spacing: 2px; }
  .ramu-t-text { font-size: 13px; font-weight: 300; color: rgba(245,236,215,0.75); line-height: 1.8; margin-bottom: 14px; font-style: italic; }
  .ramu-t-author { display: flex; align-items: center; gap: 10px; }
  .ramu-t-avatar {
    width: 34px; height: 34px; border-radius: 50%; background: var(--green-pale);
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 500; color: var(--green-mid); flex-shrink: 0;
  }
  .ramu-t-name { font-size: 13px; font-weight: 500; color: var(--cream); }
  .ramu-t-loc { font-size: 11px; color: rgba(245,236,215,0.4); }

  /* FOOTER */
  .ramu-footer {
    background: var(--brown-dark); border-top: 1px solid rgba(245,236,215,0.08);
    padding: 2.5rem; text-align: center;
  }
  .ramu-footer-logo { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--cream); margin-bottom: 6px; }
  .ramu-footer-tagline { font-size: 12px; font-weight: 300; color: rgba(245,236,215,0.4); margin-bottom: 1.5rem; }
  .ramu-footer-links { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; }
  .ramu-footer-links a { font-size: 12px; color: rgba(245,236,215,0.4); text-decoration: none; transition: color 0.2s; }
  .ramu-footer-links a:hover { color: var(--cream); }

  /* WA FLOAT */
  .ramu-wa-float {
    position: fixed; bottom: 24px; right: 24px; z-index: 999;
    width: 52px; height: 52px; border-radius: 50%;
    background: #25D366; color: #fff; border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(37,211,102,0.4); transition: transform 0.2s;
  }
  .ramu-wa-float:hover { transform: scale(1.1); }
  .ramu-wa-float svg { width: 26px; height: 26px; fill: #fff; }

  /* RESPONSIVE TABLET */
  @media (max-width: 900px) {
    .ramu-hero { grid-template-columns: 1fr; }
    .ramu-hero-stats { flex-direction: row; justify-content: flex-start; }
    .ramu-hero-title { font-size: 36px; }
  }

  /* RESPONSIVE MOBILE */
  @media (max-width: 640px) {
    .ramu-header { padding: 0 1.25rem; }
    .ramu-nav { display: none; }
    .ramu-btn-cart { display: none; }
    .ramu-hamburger { display: flex; }
    .ramu-hero { padding: 3rem 1.25rem 2.5rem; }
    .ramu-hero-title { font-size: 28px; }
    .ramu-hero-sub { font-size: 14px; }
    .ramu-hero-stats { flex-direction: row; gap: 10px; }
    .ramu-stat-pill { padding: 12px 16px; min-width: unset; flex: 1; }
    .ramu-stat-num { font-size: 18px; }
    .ramu-keunggulan, .ramu-kategori, .ramu-produk, .ramu-testimoni, .ramu-blog-preview { padding-left: 1.25rem; padding-right: 1.25rem; }
    .ramu-section-title { font-size: 22px; }
    .ramu-produk-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .ramu-p-img { height: 110px; font-size: 36px; }
    .ramu-kat-grid { grid-template-columns: repeat(2, 1fr); }
    .ramu-blog-grid { grid-template-columns: 1fr; }
    .ramu-testi-grid { grid-template-columns: 1fr; }
    .ramu-footer { padding: 2rem 1.25rem; }
    .ramu-footer-links { gap: 1rem; }
  }
`;

const blogPreviews = [
  { slug: "manfaat-kunyit-untuk-kesehatan", emoji: "🌿", tag: "Herbal", title: "7 Manfaat Kunyit yang Terbukti Secara Ilmiah", excerpt: "Kunyit bukan sekadar bumbu dapur. Kandungan kurkumin di dalamnya memiliki efek anti-inflamasi yang luar biasa untuk tubuh.", date: "20 Mei 2026", readTime: "5 menit" },
  { slug: "jahe-merah-vs-jahe-biasa", emoji: "🍵", tag: "Edukasi", title: "Jahe Merah vs Jahe Biasa: Mana yang Lebih Baik?", excerpt: "Banyak yang belum tahu perbedaan jahe merah dan jahe biasa. Simak perbandingan kandungan dan manfaatnya di sini.", date: "15 Mei 2026", readTime: "4 menit" },
  { slug: "tips-jaga-stamina-alami", emoji: "⚡", tag: "Tips", title: "5 Cara Menjaga Stamina Secara Alami Tanpa Efek Samping", excerpt: "Stamina prima tidak harus mengandalkan suplemen kimia. Ada cara alami yang lebih aman dan berkelanjutan untuk tubuh.", date: "10 Mei 2026", readTime: "6 menit" },
];

export default function Home() {
  const [aktifKategori, setAktifKategori] = useState<KategoriKey>("nutrisi");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RAW_CSS }} />
      <div className="ramu-body">

        {/* ── HEADER ── */}
        <header className="ramu-header">
         <Link className="ramu-logo" href="/">
           <img src="/logo.png" alt="Ramudjitu" style={{height: "38px", width: "auto"}} />
        </Link> 

          <nav className="ramu-nav">
            <a onClick={() => scrollTo("produk")}>Produk</a>
            <a onClick={() => scrollTo("tentang")}>Tentang Kami</a>
            <Link href="/blog">Blog</Link>
            <a onClick={() => scrollTo("testimoni")}>Testimoni</a>
          </nav>

          <div className="ramu-header-right">
            <button className="ramu-btn-cart">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
              Keranjang
            </button>
            <button className={`ramu-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </header>

        {/* ── MOBILE MENU ── */}
        <div className={`ramu-mobile-menu${menuOpen ? " open" : ""}`}>
          <a onClick={() => scrollTo("produk")}>🛍️ Produk</a>
          <a onClick={() => scrollTo("tentang")}>🌿 Tentang Kami</a>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>📝 Blog</Link>
          <a onClick={() => scrollTo("testimoni")}>⭐ Testimoni</a>
          <button className="ramu-btn-cart" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
            Keranjang
          </button>
        </div>

        {/* ── HERO ── */}
        <section className="ramu-hero">
          <div>
            <div className="ramu-hero-badge"><span></span> Herbal Alami Indonesia</div>
            <h1 className="ramu-hero-title">Kesehatan dari <em>Alam,</em><br />Terbukti oleh Tradisi</h1>
            <p className="ramu-hero-sub">Racikan ramu pilihan dari bahan herbal terbaik. Dipercaya turun-temurun, kini hadir dalam formula modern yang praktis dan terstandar.</p>
            <button className="ramu-hero-cta" onClick={() => scrollTo("produk")}>
              Lihat Semua Produk
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
          <div className="ramu-hero-stats">
            <div className="ramu-stat-pill"><div className="ramu-stat-num">100%</div><div className="ramu-stat-label">Bahan Alami</div></div>
            <div className="ramu-stat-pill"><div className="ramu-stat-num">BPOM</div><div className="ramu-stat-label">Terdaftar</div></div>
            <div className="ramu-stat-pill"><div className="ramu-stat-num">5K+</div><div className="ramu-stat-label">Pelanggan</div></div>
          </div>
        </section>

        {/* ── KEUNGGULAN ── */}
        <section className="ramu-keunggulan" id="tentang">
          <div className="ramu-eyebrow">Mengapa Ramudjitu</div>
          <h2 className="ramu-section-title">Jamu bukan sekadar minuman, ini adalah warisan</h2>
          <div className="ramu-k-grid">
            {[
              { title: "Bahan pilihan", desc: "Dipilih langsung dari petani rempah terpercaya di seluruh nusantara.", icon: <path d="M12 2C8 6 4 9 4 14a8 8 0 0016 0c0-5-4-8-8-12z" /> },
              { title: "Formula terstandar", desc: "Racikan terukur dengan dosis yang konsisten di setiap kemasan produk.", icon: <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /> },
              { title: "Tersertifikasi", desc: "Terdaftar di BPOM dan memenuhi standar halal MUI untuk keamanan Anda.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
              { title: "Edukasi lengkap", desc: "Setiap produk dilengkapi halaman edukasi dengan penjelasan dari hulu ke hilir.", icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></> },
            ].map((item, i) => (
              <div className="ramu-k-card" key={i}>
                <div className="ramu-k-icon"><svg viewBox="0 0 24 24">{item.icon}</svg></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── KATEGORI ── */}
        <section className="ramu-kategori" id="produk">
          <div className="ramu-eyebrow">Kategori Produk</div>
          <h2 className="ramu-section-title">Pilih kebutuhanmu</h2>
          <div className="ramu-kat-grid">
            {kategoriList.map((kat) => (
              <div key={kat.key} className={`ramu-kat-card${aktifKategori === kat.key ? " active" : ""}`} onClick={() => setAktifKategori(kat.key)}>
                <span className="ramu-kat-emoji">{kat.emoji}</span>
                <div className="ramu-kat-name">{kat.nama}</div>
                <div className="ramu-kat-count">{kat.count}</div>
                <div className="ramu-kat-dot"></div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUK ── */}
        <section className="ramu-produk">
          <div className="ramu-produk-header">
            <div className="ramu-filter-label">Menampilkan: <strong>{kategoriList.find((k) => k.key === aktifKategori)?.nama}</strong></div>
          </div>
          <div className="ramu-produk-grid">
            {produkData[aktifKategori].map((p, i) => (
              <div key={i} className="ramu-p-card" onClick={() => (window.location.href = p.lp)}>
                <div className="ramu-p-img">
                  <span className="ramu-p-lp-tag">📖 Edukasi lengkap</span>
                  {p.emoji}
                </div>
                <div className="ramu-p-info">
                  <div className="ramu-p-name">{p.nama}</div>
                  <div className="ramu-p-desc">{p.desc}</div>
                  <div className="ramu-p-footer">
                    <span className="ramu-p-price">{p.harga}</span>
                    <button className="ramu-p-btn">Pelajari →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section className="ramu-blog-preview">
          <div className="ramu-blog-header">
            <div>
              <div className="ramu-eyebrow">Artikel & Tips</div>
              <h2 className="ramu-section-title" style={{marginBottom: 0}}>Edukasi herbal untuk hidup lebih sehat</h2>
            </div>
            <Link href="/blog" className="ramu-btn-outline">Lihat Semua Artikel →</Link>
          </div>
          <div className="ramu-blog-grid">
            {blogPreviews.map((b) => (
              <Link href={`/blog/${b.slug}`} className="ramu-blog-card" key={b.slug}>
                <div className="ramu-blog-img">{b.emoji}</div>
                <div className="ramu-blog-info">
                  <span className="ramu-blog-tag">{b.tag}</span>
                  <div className="ramu-blog-title">{b.title}</div>
                  <div className="ramu-blog-excerpt">{b.excerpt}</div>
                  <div className="ramu-blog-meta">{b.date} · {b.readTime} baca</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── TESTIMONI ── */}
        <section className="ramu-testimoni" id="testimoni">
          <div className="ramu-eyebrow">Cerita Pelanggan</div>
          <h2 className="ramu-section-title">Ribuan orang sudah merasakan manfaatnya</h2>
          <div className="ramu-testi-grid">
            {[
              { stars: "★★★★★", text: "Sudah 2 bulan pakai Ramu Stamina, badan jauh lebih segar tiap pagi. Suami juga ikutan pesan sekarang.", initials: "SR", nama: "Sari R.", loc: "Bandung" },
              { stars: "★★★★★", text: "Yang bikin saya yakin beli itu ada halaman penjelasan lengkapnya. Jadi tahu betul manfaat tiap bahannya.", initials: "BW", nama: "Budi W.", loc: "Surabaya" },
              { stars: "★★★★☆", text: "Packaging rapi, produknya terjamin karena ada sertifikat BPOM-nya. Cocok buat dijadikan oleh-oleh keluarga.", initials: "DM", nama: "Dewi M.", loc: "Jakarta" },
            ].map((t, i) => (
              <div className="ramu-t-card" key={i}>
                <div className="ramu-t-stars">{t.stars}</div>
                <p className="ramu-t-text">&ldquo;{t.text}&rdquo;</p>
                <div className="ramu-t-author">
                  <div className="ramu-t-avatar">{t.initials}</div>
                  <div><div className="ramu-t-name">{t.nama}</div><div className="ramu-t-loc">{t.loc}</div></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="ramu-footer">
          <div className="ramu-footer-logo">🌿 Ramudjitu</div>
          <div className="ramu-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
          <div className="ramu-footer-links">
            <a href="#">Syarat &amp; Ketentuan</a>
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Kebijakan Pengembalian</a>
            <a href="#">Hubungi Kami</a>
            <Link href="/blog">Blog</Link>
          </div>
        </footer>

        {/* ── WA FLOAT ── */}
        <button className="ramu-wa-float" onClick={() => window.open("https://wa.me/6281234567890", "_blank")}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

      </div>
    </>
  );
}
