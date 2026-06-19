"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface Produk {
  nama: string;
  desc: string;
  harga: string;
  emoji: string;
  lp: string;
  img?: string;
}

type KategoriKey = "nutrisi" | "stamina" | "amino" | "antioksidan";

const produkData: Record<KategoriKey, Produk[]> = {
  nutrisi: [
    { nama: "GetAmor Superfood Premium Nutrisi Lengkap untuk Semua Keluarga Sehat Setiap Hari", desc: "Menjaga kesehatan keluarga bukan hal yang mudah di.", harga: "Rp 375.000", emoji: "🥤", lp: "/produk/getamor-superfood", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781696979/GetAmor_square_1024_tl2fgz.png" },
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

const kategoriList: { key: KategoriKey; emoji: string; nama: string; count: string; img: string }[] = [
  { key: "nutrisi", emoji: "🥤", nama: "Fondasi", count: "6 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697490/kategori-fondasi.png_ufrw0h.png" },
  { key: "stamina", emoji: "⚡", nama: "Regenerasi", count: "5 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697483/kategori-regenerasi.png_pnfzjl.png" },
  { key: "amino", emoji: "💪", nama: "Perlindungan", count: "4 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697483/kategori-perlindungan.png_c0yxsi.png" },
  { key: "antioksidan", emoji: "🛡️", nama: "Performa", count: "4 produk", img: "https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697488/kategori-performa.png_ylvhfx.png" },
];

const blogPreviews = [
  { slug: "manfaat-kunyit-untuk-kesehatan", emoji: "🌿", tag: "Herbal", title: "7 Manfaat Kunyit yang Terbukti Secara Ilmiah", excerpt: "Kunyit bukan sekadar bumbu dapur. Kandungan kurkumin di dalamnya memiliki efek anti-inflamasi yang luar biasa.", date: "20 Mei 2026", readTime: "5 menit" },
  { slug: "jahe-merah-vs-jahe-biasa", emoji: "🍵", tag: "Edukasi", title: "Jahe Merah vs Jahe Biasa: Mana yang Lebih Baik?", excerpt: "Banyak yang belum tahu perbedaan jahe merah dan jahe biasa. Simak perbandingannya di sini.", date: "15 Mei 2026", readTime: "4 menit" },
  { slug: "tips-jaga-stamina-alami", emoji: "⚡", tag: "Tips", title: "5 Cara Menjaga Stamina Secara Alami", excerpt: "Stamina prima tidak harus mengandalkan suplemen kimia. Ada cara alami yang lebih aman.", date: "10 Mei 2026", readTime: "6 menit" },
];

const RAW_CSS = `
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
    --amber-light: #F5C842;
    --text-dark: #1E1208;
    --text-mid: #5A4030;
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* OUTER - background abu di luar wrapper */
  .ramu-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  /* WRAPPER - konten terpusat seperti tampilan HP */
  .ramu-wrapper {
    width: 100%;
    max-width: 660px;
    background: var(--cream-light);
    min-height: 100vh;
    position: relative;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    padding-bottom: 64px;
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    overflow-x: visible;
  }

  /* HEADER */
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
  @media (min-width: 500px) { .ramu-nav { display: flex; align-items: center; gap: 1.25rem; flex: 1; justify-content: center; } }
  .ramu-nav a { color: var(--text-mid); font-size: 12px; font-weight: 400; text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .ramu-nav a:hover { color: var(--green-mid); }

  /* HAMBURGER */
  .ramu-hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; }
  .ramu-hamburger span { display: block; width: 20px; height: 2px; background: var(--brown-dark); border-radius: 2px; transition: all 0.3s; }
  .ramu-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .ramu-hamburger.open span:nth-child(2) { opacity: 0; }
  .ramu-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* MOBILE MENU */
  .ramu-mobile-menu {
    display: none; position: fixed;
    top: 60px; width: 100%; max-width: 500px;
    bottom: 64px; left: 50%; transform: translateX(-50%);
    background: var(--cream-light); z-index: 99;
    flex-direction: column; padding: 1.25rem;
    overflow-y: auto; border-top: 1px solid var(--cream-mid);
  }
  .ramu-mobile-menu.open { display: flex; }
  .ramu-mobile-menu a { color: var(--text-dark); font-size: 15px; text-decoration: none; padding: 0.9rem 0; border-bottom: 1px solid var(--cream-mid); display: flex; align-items: center; gap: 10px; cursor: pointer; transition: color 0.2s; }
  .ramu-mobile-menu a:hover { color: var(--green-mid); }

  /* HERO */
  .ramu-hero {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    padding: 2.5rem 1.25rem;
    position: relative; overflow: hidden;
  }
  .ramu-hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(74,122,37,0.18) 0%, transparent 70%); pointer-events: none; }
  .ramu-hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(122,158,78,0.15); border: 1px solid rgba(122,158,78,0.3); color: var(--green-light); font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 1.25rem; }
  .ramu-hero-badge span { width: 5px; height: 5px; background: var(--green-bright); border-radius: 50%; display: inline-block; }
  .ramu-hero-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 400; color: var(--cream); line-height: 1.2; margin-bottom: 0.75rem; }
  .ramu-hero-title em { font-style: italic; color: var(--green-light); }
  .ramu-hero-sub { font-size: 14px; font-weight: 300; color: rgba(245,236,215,0.65); line-height: 1.8; margin-bottom: 1.5rem; }
  .ramu-hero-cta { display: inline-flex; align-items: center; gap: 8px; background: var(--green-mid); color: #fff; font-size: 13px; font-weight: 500; padding: 11px 24px; border-radius: 32px; border: none; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; margin-bottom: 1.5rem; }
  .ramu-hero-cta:hover { background: var(--green-deep); }
  .ramu-hero-cta svg { width: 14px; height: 14px; fill: none; stroke: #fff; stroke-width: 2; }
  .ramu-hero-stats { display: flex; gap: 10px; }
  .ramu-stat-pill { background: rgba(245,236,215,0.07); border: 1px solid rgba(245,236,215,0.12); border-radius: 12px; padding: 12px 16px; text-align: center; flex: 1; }
  .ramu-stat-num { font-family: 'Playfair Display', serif; font-size: 13px; color: var(--green-light); }
  .ramu-stat-label { font-size: 11px; color: rgba(245,236,215,0.5); margin-top: 3px; }

  /* SECTION UMUM */
  .ramu-section { padding: 1.75rem 1.25rem; }
  .ramu-section-alt { padding: 1.75rem 1.25rem; background: var(--cream-mid); }
  .ramu-eyebrow { font-size: 10px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--green-mid); margin-bottom: 0.4rem; }
  .ramu-section-title { font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 300; color: var(--text-dark); margin-bottom: 1.25rem; line-height: 1.35; }

  /* KEUNGGULAN */
  .ramu-k-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .ramu-k-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; padding: 1rem; transition: border-color 0.2s; }
  .ramu-k-card:hover { border-color: var(--green-bright); }
  .ramu-k-icon { width: 36px; height: 36px; background: var(--green-pale); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; }
  .ramu-k-icon svg { width: 18px; height: 18px; fill: none; stroke: var(--green-mid); stroke-width: 1.8; }
  .ramu-k-card h4 { font-size: 13px; font-weight: 500; color: var(--text-dark); margin-bottom: 4px; }
  .ramu-k-card p { font-size: 11px; font-weight: 300; color: var(--text-muted); line-height: 1.6; }

  /* KATEGORI */
  .ramu-kat-grid { display: flex; gap: 10px; margin-top: 1rem; padding-bottom: 8px; }
  .ramu-kat-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%; scrollbar-width: none; }
  .ramu-kat-scroll::-webkit-scrollbar { display: none; }
  .ramu-kat-card { min-width: 200px; height: 100px; flex-shrink: 0; scroll-snap-align: start; background: #fff; border: 1.5px solid var(--cream-mid); border-radius: 14px; padding: 1rem 1.25rem; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: row; align-items: center; gap: 12px; }
  @media (min-width: 500px) { .ramu-kat-card { min-width: 220px; height: 110px; } }
  .ramu-kat-card:hover { border-color: var(--green-bright); }
  .ramu-kat-card.active { border-color: var(--green-mid); background: var(--green-pale); }
  .ramu-kat-emoji { font-size: 28px; display: block; flex-shrink: 0; }
  .ramu-kat-name { font-size: 12px; font-weight: 500; color: var(--text-dark); line-height: 1.4; margin-bottom: 3px; }
  .ramu-kat-count { font-size: 10px; color: var(--text-muted); }
  .ramu-kat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--cream-mid); margin: 8px auto 0; transition: background 0.2s; }
  .ramu-kat-card.active .ramu-kat-dot { background: var(--green-mid); }

  /* PRODUK */
  .ramu-filter-label { font-size: 12px; color: var(--text-muted); margin-bottom: 1rem; }
  .ramu-filter-label strong { color: var(--text-dark); }
  .ramu-produk-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
@media (min-width: 480px) { .ramu-produk-grid { grid-template-columns: 1fr 1fr; } }
  .ramu-p-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; overflow: hidden; cursor: pointer; transition: all 0.2s; }
  .ramu-p-card:hover { border-color: var(--green-bright); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(74,122,37,0.1); }
  .ramu-p-img { position: relative; width: 100%; padding-bottom: 100%; overflow: hidden; background: var(--green-pale); }
.ramu-p-img img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: var(--cream-light); }
.ramu-p-img img { width: 100%; height: 100%; object-fit: contain; background: var(--cream-light); }
  .ramu-p-lp-tag { position: absolute; top: 8px; left: 8px; background: rgba(255,255,255,0.92); border: 1px solid var(--amber); color: var(--amber); font-size: 9px; font-weight: 500; padding: 2px 7px; border-radius: 8px; }
  .ramu-p-info { padding: 10px; }
  .ramu-p-price { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 4px; }
  .ramu-p-name { font-size: 13px; font-weight: 500; color: #1F2937; margin-bottom: 4px; line-height: 1.4; }
  .ramu-p-desc { font-size: 11px; font-weight: 300; color: var(--text-muted); margin-bottom: 10px; line-height: 1.5; }
  .ramu-p-btn {
    background: #00AA5B; color: #fff; border: none; border-radius: 12px;
    width: 100%; height: 42px; padding: 0 12px;
    font-size: 13px; font-weight: 700; line-height: 1; letter-spacing: 0.1px;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: all 0.2s; margin-top: 8px;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  .ramu-p-btn:hover { background: #008C4A; }

  /* BLOG */
  .ramu-blog-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem; }
  .ramu-btn-outline { display: inline-flex; align-items: center; border: 1.5px solid var(--green-mid); color: var(--green-mid); font-size: 11px; font-weight: 500; padding: 6px 14px; border-radius: 20px; text-decoration: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif; background: transparent; cursor: pointer; }
  .ramu-btn-outline:hover { background: var(--green-mid); color: #fff; }
  .ramu-blog-grid { display: flex; flex-direction: column; gap: 12px; }
  .ramu-blog-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; overflow: hidden; text-decoration: none; display: flex; transition: all 0.2s; }
  .ramu-blog-card:hover { border-color: var(--green-bright); }
  .ramu-blog-img { width: 90px; min-height: 100px; background: var(--green-pale); display: flex; align-items: center; justify-content: center; font-size: 32px; flex-shrink: 0; }
  .ramu-blog-info { padding: 12px; flex: 1; }
  .ramu-blog-tag { display: inline-block; background: var(--green-pale); color: var(--green-mid); font-size: 9px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; padding: 2px 8px; border-radius: 8px; margin-bottom: 6px; }
  .ramu-blog-title { font-family: 'Playfair Display', serif; font-size: 13px; color: var(--text-dark); line-height: 1.4; margin-bottom: 6px; }
  .ramu-blog-meta { font-size: 10px; color: var(--text-muted); }

  /* TESTIMONI */
  .ramu-testimoni { background: var(--brown-dark); padding: 1.75rem 1.25rem; }
  .ramu-testimoni .ramu-eyebrow { color: var(--green-light); }
  .ramu-testimoni .ramu-section-title { color: var(--cream); }
  .ramu-testi-grid { display: flex; flex-direction: column; gap: 12px; margin-top: 1rem; }
  .ramu-t-card { background: rgba(245,236,215,0.05); border: 1px solid rgba(245,236,215,0.1); border-radius: 14px; padding: 1.25rem; }
  .ramu-t-stars { color: var(--amber-light); font-size: 12px; margin-bottom: 8px; letter-spacing: 2px; }
  .ramu-t-text { font-size: 12px; font-weight: 300; color: rgba(245,236,215,0.75); line-height: 1.8; margin-bottom: 12px; font-style: italic; }
  .ramu-t-author { display: flex; align-items: center; gap: 10px; }
  .ramu-t-avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--green-pale); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; color: var(--green-mid); flex-shrink: 0; }
  .ramu-t-name { font-size: 12px; font-weight: 500; color: var(--cream); }
  .ramu-t-loc { font-size: 10px; color: rgba(245,236,215,0.4); }

  /* FOOTER */
  .ramu-footer { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem 1.25rem 1.5rem; }
  .ramu-footer-logo { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--cream); margin-bottom: 4px; }
  .ramu-footer-tagline { font-size: 11px; font-weight: 300; color: rgba(245,236,215,0.4); margin-bottom: 1.25rem; }
  .ramu-footer-sosmed { display: flex; gap: 10px; margin-bottom: 1.5rem; }
  .ramu-sosmed-btn { width: 34px; height: 34px; border-radius: 50%; background: rgba(245,236,215,0.08); border: 1px solid rgba(245,236,215,0.15); display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.2s; }
  .ramu-sosmed-btn:hover { background: var(--green-mid); border-color: var(--green-mid); }
  .ramu-sosmed-btn svg { width: 15px; height: 15px; fill: rgba(245,236,215,0.7); }
  .ramu-sosmed-fb { background: #1877F2 !important; border-color: #1877F2 !important; }
  .ramu-sosmed-ig { background: #E1306C !important; border-color: #E1306C !important; }
  .ramu-sosmed-yt { background: #FF0000 !important; border-color: #FF0000 !important; }
  .ramu-sosmed-tt { background: #010101 !important; border-color: #333 !important; }
  .ramu-footer-links { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-bottom: 1.5rem; }
  .ramu-footer-links a { font-size: 11px; color: rgba(245,236,215,0.4); text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .ramu-footer-links a:hover { color: var(--green-light); }
  .ramu-footer-copy { font-size: 10px; color: rgba(245,236,215,0.25); text-align: center; padding-top: 1rem; border-top: 1px solid rgba(245,236,215,0.08); }

  /* BOTTOM NAV */
  .ramu-bottom-nav {
    position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 100%; max-width: 660px; z-index: 100;
    background: var(--cream-light); border-top: 1px solid var(--cream-mid);
    padding: 8px 0 10px;
    box-shadow: 0 -4px 16px rgba(30,18,8,0.08);
  }
  .ramu-bottom-nav-inner { display: flex; justify-content: space-around; align-items: center; }
  .ramu-bottom-nav-item { display: flex; flex-direction: column; align-items: center; gap: 3px; text-decoration: none; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; flex: 1; padding: 4px 0; }
  .ramu-bottom-nav-item svg { width: 20px; height: 20px; fill: none; stroke: var(--text-muted); stroke-width: 1.8; transition: stroke 0.2s; }
  .ramu-bottom-nav-item span { font-size: 10px; color: var(--text-muted); transition: color 0.2s; }
  .ramu-bottom-nav-item.active svg { stroke: var(--green-mid); }
  .ramu-bottom-nav-item.active span { color: var(--green-mid); font-weight: 500; }
  .ramu-bottom-nav-wa svg { fill: #25D366 !important; stroke: none !important; }
  .ramu-bottom-nav-wa span { color: #25D366 !important; }

  /* WA FLOAT - hanya di desktop lebar */
  .ramu-wa-float { display: none; }
  @media (min-width: 600px) {
    .ramu-wa-float { position: fixed; bottom: 24px; right: 24px; z-index: 999; width: 50px; height: 50px; border-radius: 50%; background: #25D366; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(37,211,102,0.4); transition: transform 0.2s; }
    .ramu-wa-float:hover { transform: scale(1.1); }
    .ramu-wa-float svg { width: 24px; height: 24px; fill: #fff; }
  }
  @media (max-width: 640px) {
    .ramu-hamburger { display: flex; }
  }  
`;

export default function Home() {
  const [aktifKategori, setAktifKategori] = useState<KategoriKey>("nutrisi");
  const [menuOpen, setMenuOpen] = useState(false);
  const katGridRef = useRef<HTMLDivElement>(null);
  const scrollKat = (dir: number) => { katGridRef.current?.scrollBy({left: dir * 200, behavior: 'smooth'}); };
  const [btnActive, setBtnActive] = useState('');
  const waNumber = "6281234567890";

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
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}><span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span></span>
            </Link>
              
            <nav className="ramu-nav">
              <a onClick={() => scrollTo("produk")}>Produk</a>
              <a onClick={() => scrollTo("tentang")}>Tentang Kami</a>
              <Link href="/blog">Blog</Link>
             
            </nav>
            <button className={`ramu-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span><span></span><span></span>
              </button>
          </header>

          {/* MOBILE MENU */}
          <div className={`ramu-mobile-menu${menuOpen ? " open" : ""}`}>
            <a onClick={() => scrollTo("produk")}>Produk</a>
            <a onClick={() => scrollTo("tentang")}>Tentang Kami</a>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            
          </div>

          {/* HERO */}
          <section className="ramu-hero">
            <div className="ramu-hero-badge"><span></span> HEALTH & WELLNESS PILIHAN</div>
            <h1 className="ramu-hero-title">Tidak Semua Produk Kami Jual. Hanya yang Kami <em>Percaya,</em></h1>
              <p style={{fontSize:"17px", fontWeight:"400", color:"rgba(245,236,215,0.75)", lineHeight:"1.6", marginTop:"-0.5rem", marginBottom:"1.5rem"}}>Temukan pilihan terpercaya untuk hidup yang lebih sehat</p>
          
            <button className="ramu-hero-cta" onClick={() => scrollTo("produk")}>
              Lihat Semua Produk
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <div className="ramu-hero-stats">
              <div className="ramu-stat-pill"><div className="ramu-stat-num">PRODUK PILIHAN</div><div className="ramu-stat-label">Health & Wellness</div></div>
              <div className="ramu-stat-pill"><div className="ramu-stat-num">BPOM</div><div className="ramu-stat-label">Terdaftar</div></div>
              <div className="ramu-stat-pill"><div className="ramu-stat-num">MULTI-BRAND</div><div className="ramu-stat-label">Terpercaya</div></div>
            </div>
          </section>

          {/* KEUNGGULAN */}
          <section className="ramu-section" id="tentang" style={{background:"#EFF5E6"}}>
            <div className="ramu-eyebrow" style={{display:"inline-block", background:"#C5DC8E", color:"#2D4A1A", padding:"2px 10px", borderRadius:"10px"}}>Mengapa Ramudjitu</div>
            <p style={{fontSize:"13px", fontWeight:"300", color:"var(--text-dark)", lineHeight:"1.8", textAlign:"justify", marginBottom:"1.25rem"}}>Di tengah banyaknya pilihan produk kesehatan dan wellness, memilih yang tepat tidak selalu mudah. RamuDjitu menghadirkan produk health & wellness pilihan dari berbagai brand terpercaya yang memiliki standar legalitas dan kualitas yang jelas. Bagi kami, kesehatan bukan sekadar tentang banyaknya pilihan, tetapi tentang menemukan yang tepat dan memberikan manfaat yang nyata. Itulah semangat yang menjadi dasar hadirnya RamuDjitu.</p>
            <div className="ramu-k-grid">
              {[
                { title: "Produk Pilihan", desc: "Kami menghadirkan produk yang dipilih dengan mempertimbangkan kualitas dan kepercayaan." },
                { title: "Brand Terpercaya", desc: "Berbagai pilihan dari brand yang memiliki komitmen terhadap kualitas dan kepuasan pelanggan." },
                { title: "Legal & Terdaftar", desc: "Kami mengutamakan produk yang memiliki legalitas dan standar yang jelas." },
                { title: "Manfaat yang Nyata", desc: "Kami percaya setiap pilihan kesehatan seharusnya memberikan nilai dan manfaat yang dapat dirasakan dalam kehidupan sehari-hari." },
              ].map((item, i) => (
                <div className="ramu-k-card" key={i}>
                
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* KATEGORI */}
          <section className="ramu-section-alt" id="produk">
            <div className="ramu-eyebrow">Kategori</div>
            <h2 className="ramu-section-title">Pilih kebutuhanmu</h2>
            <div style={{position:"relative", padding:"0 18px"}}>
              <button onClick={() => { scrollKat(-1); setBtnActive('left'); setTimeout(()=>setBtnActive(''),300); }} style={{position:"absolute", left:"0", top:"50%", transform:"translateY(-50%)", zIndex:10, background: btnActive==='left' ? '#4A7A25' : '#fff', border:"1.5px solid #EDE0C8", borderRadius:"50%", width:"36px", height:"36px", fontSize:"20px", lineHeight:"1", cursor:"pointer", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", display:"flex", alignItems:"center", justifyContent:"center", transition:"background 0.2s", color: btnActive==='left' ? '#fff' : '#1E1208'}}>‹</button>
              <button onClick={() => { scrollKat(1); setBtnActive('right'); setTimeout(()=>setBtnActive(''),300); }} style={{position:"absolute", right:"0", top:"50%", transform:"translateY(-50%)", zIndex:10, background: btnActive==='right' ? '#4A7A25' : '#fff', border:"1.5px solid #EDE0C8", borderRadius:"50%", width:"36px", height:"36px", fontSize:"20px", lineHeight:"1", cursor:"pointer", boxShadow:"0 2px 8px rgba(0,0,0,0.1)", display:"flex", alignItems:"center", justifyContent:"center", transition:"background 0.2s", color: btnActive==='right' ? '#fff' : '#1E1208'}}>›</button>
              <div ref={katGridRef} style={{display:"flex", gap:"10px", overflowX:"auto", scrollBehavior:"smooth", WebkitOverflowScrolling:"touch", scrollbarWidth:"none", msOverflowStyle:"none"}}>
                {kategoriList.map((kat) => (
                  <div key={kat.key} className={`ramu-kat-card${aktifKategori === kat.key ? " active" : ""}`} onClick={() => setAktifKategori(kat.key)} style={{position:"relative", overflow:"hidden", padding:0}}>
                    <img src={kat.img} alt={kat.nama} style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", borderRadius:"12px"}} />
                    <div style={{position:"absolute", bottom:"10px", left:"12px", zIndex:2}}>
                      <div style={{background:"rgba(0,0,0,0.08)", backdropFilter:"blur(6px)", color:"#fff", fontSize:"12px", fontWeight:500, padding:"4px 14px", borderRadius:"999px", textShadow:"0 1px 3px rgba(0,0,0,0.5)"}}>{kat.nama}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRODUK */}
          <section className="ramu-section">
            <div className="ramu-eyebrow">Produk</div>
<div className="ramu-filter-label">Menampilkan: <strong>{kategoriList.find((k) => k.key === aktifKategori)?.nama}</strong></div>
            <div className="ramu-produk-grid">
              {produkData[aktifKategori].map((p, i) => (
                <Link key={i} className="ramu-p-card" href={p.lp}>
                  <div className="ramu-p-img">
                    {p.img && <img src={p.img} alt={p.nama} />}
                    </div>
                  <div className="ramu-p-info">
                    <div className="ramu-p-price">{p.harga}</div>
                    <div className="ramu-p-name">{p.nama}</div>
                    <div className="ramu-p-desc">{p.desc}</div>
                    <button className="ramu-p-btn">Lihat Detail Produk →</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* BLOG */}
          <section className="ramu-section-alt">
            <div className="ramu-blog-header">
              <div>
                <div className="ramu-eyebrow">Artikel & Tips</div>
                <h2 className="ramu-section-title" style={{marginBottom:0}}>Edukasi herbal untuk hidup sehat</h2>
              </div>
              <Link href="/blog" className="ramu-btn-outline">Semua →</Link>
            </div>
            <div className="ramu-blog-grid">
              {blogPreviews.map((b) => (
                <Link href={`/blog/${b.slug}`} className="ramu-blog-card" key={b.slug}>
                  <div className="ramu-blog-img">{b.emoji}</div>
                  <div className="ramu-blog-info">
                    <span className="ramu-blog-tag">{b.tag}</span>
                    <div className="ramu-blog-title">{b.title}</div>
                    <div className="ramu-blog-meta">{b.date} · {b.readTime} baca</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="ramu-footer">
            <div className="ramu-footer-logo"><span style={{fontFamily:"'Playfair Display', serif", fontWeight:"700"}}><span style={{color:"#C5DC8E"}}>Ramu</span><span style={{color:"#F5ECD7"}}>Djitu</span></span></div>
            <div className="ramu-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
            <div className="ramu-footer-sosmed">
              <a href="https://facebook.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-fb">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-ig">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-yt">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style={{fill:"var(--brown-dark)"}}/></svg>
              </a>
              <a href="https://tiktok.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="ramu-sosmed-btn ramu-sosmed-tt">
                <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
            </div>
            <div className="ramu-footer-links">
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Kebijakan Pengembalian</a>
              <a href="#">Hubungi Kami</a>
              <a href="#">FAQ</a>
            </div>
            <div className="ramu-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

          {/* BOTTOM NAV */}
          <nav className="ramu-bottom-nav">
            <div className="ramu-bottom-nav-inner">
              <button className="ramu-bottom-nav-item active" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>
                <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Beranda</span>
              </button>
              <button className="ramu-bottom-nav-item" onClick={() => scrollTo("produk")}>
                <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                <span>Produk</span>
              </button>

              <button className="ramu-bottom-nav-item" onClick={() => {}}>
                <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
                <span>Keranjang</span>
              </button>

              <button className="ramu-bottom-nav-item ramu-bottom-nav-wa" onClick={() => window.open(`https://wa.me/${waNumber}`, "_blank")}>
                <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>Chat</span>
              </button>
            </div>
          </nav>

        </div>
      </div>

    </>
  );
}
