"use client";

import { useState } from "react";
import Link from "next/link";

function optimasiCloudinary(url: string, width: number = 600) {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}

const KATEGORI_LABELS: Record<string, string> = {
  nutrisi: "Fondasi",
  stamina: "Regenerasi",
  amino: "Perlindungan",
  antioksidan: "Performa",
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
    max-width: 690px;
    background: var(--cream-light);
    min-height: 100vh;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    padding-bottom: 0;
  }

  .pd-header {
    background: var(--cream-light);
    padding: 0 1.25rem;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(245,236,215,0.08);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .pd-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .pd-logo img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .pd-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }

  .pd-nav { display: none; }
  @media (min-width: 500px) {
    .pd-nav { display: flex; align-items: center; gap: 1.5rem; flex: 1; justify-content: flex-end; }
  }

  .pd-nav a {
    color: var(--text-mid, #5A4030);
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s;
    cursor: pointer;
  }

  .pd-nav a:hover { color: var(--green-mid); }

  .pd-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
  }
  .pd-hamburger span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--brown-dark);
    border-radius: 2px;
    transition: all 0.3s;
  }
  .pd-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .pd-hamburger.open span:nth-child(2) { opacity: 0; }
  .pd-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  @media (max-width: 640px) { .pd-hamburger { display: flex; } }

  .pd-mobile-menu {
    display: none;
    position: fixed;
    top: 60px;
    width: 100%;
    max-width: 500px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--cream-light);
    z-index: 99;
    flex-direction: column;
    padding: 1.25rem;
    overflow-y: auto;
    border-top: 1px solid var(--cream-mid);
  }
  .pd-mobile-menu.open { display: flex; }
  .pd-mobile-menu a {
    color: var(--text-dark);
    font-size: 15px;
    text-decoration: none;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--cream-mid);
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: color 0.2s;
  }
  .pd-mobile-menu a:hover { color: var(--green-mid); }

  /* BREADCRUMB */
  .pd-breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    padding: 1rem 1.25rem 0;
    font-size: 11px;
    color: var(--text-muted);
  }

  .pd-breadcrumb a {
    color: var(--text-muted);
    text-decoration: none;
  }

  .pd-breadcrumb a:hover { color: var(--green-mid); }

  .pd-breadcrumb-current {
    color: var(--text-dark);
    font-weight: 500;
  }

  /* MAIN: gallery + info */
  .pd-main {
    padding: 1rem 1.25rem 0;
    display: block;
  }

  .pd-gallery {
    width: 100%;
  }

  .pd-img-wrap {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--green-pale);
    overflow: hidden;
    position: relative;
    border-radius: 16px;
  }

  .pd-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: var(--cream-light);
  }

  .pd-info {
    width: 100%;
    padding: 1.25rem 0;
  }

  .pd-brand {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--green-mid);
    margin-bottom: 6px;
  }

  .pd-nama {
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: #1F2937;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .pd-harga {
    font-family: 'DM Sans', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.25rem;
  }

  .pd-qty-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 1.5rem;
  }

  .pd-qty-label {
    font-size: 12px;
    color: var(--text-muted);
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .pd-qty-control {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--cream-mid);
    border-radius: 10px;
    padding: 4px 8px;
  }

  .pd-qty-control button {
    width: 28px;
    height: 28px;
    background: #fff;
    border: 1px solid var(--cream-mid);
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pd-qty-control span {
    font-size: 15px;
    font-weight: 600;
    min-width: 20px;
    text-align: center;
  }

  /* CTA */
  .pd-cta-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .pd-btn-beli {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: var(--green-mid);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    padding: 16px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s;
    box-shadow: 0 4px 14px rgba(45,74,26,0.3);
  }

  .pd-btn-beli:hover { background: var(--green-deep); }

  .pd-btn-lp {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    color: var(--green-mid);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 14px;
    border-radius: 999px;
    border: 1.5px solid var(--green-mid);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }

  .pd-btn-lp:hover { background: var(--green-mid); color: #fff; }

  /* DESKRIPSI */
  .pd-section {
    padding: 1.25rem;
    border-top: 1px solid var(--cream-mid);
  }

  .pd-section-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--green-mid);
    margin-bottom: 0.75rem;
  }

  .pd-deskripsi p {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.8;
    margin-bottom: 0.75rem;
  }

  /* Spacer so sticky CTA doesn't cover content on mobile/tablet */
  .pd-cta-spacer {
    height: 96px;
  }

  /* STICKY CTA — mobile & tablet */
  @media (max-width: 1023px) {
    .pd-cta-wrap {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 200;
      flex-direction: row;
      gap: 8px;
      max-width: 690px;
      margin: 0 auto;
      background: var(--cream-light);
      padding: 10px 1.25rem calc(10px + env(safe-area-inset-bottom));
      box-shadow: 0 -4px 16px rgba(30,18,8,0.1);
    }

    .pd-btn-beli, .pd-btn-lp {
      padding: 13px 8px;
      font-size: 13px;
    }
  }

  @media (min-width: 1024px) {
    .pd-cta-spacer { display: none; }
  }

  /* DESKTOP: 2-column layout */
  @media (min-width: 1024px) {
    .pd-main {
      display: flex;
      gap: 24px;
      align-items: flex-start;
      padding: 2rem 1.25rem 0;
    }

    .pd-gallery {
      flex: 1;
      position: sticky;
      top: 88px;
    }

    .pd-info {
      flex: 1;
      padding: 0.5rem 0 1.25rem;
    }

    .pd-breadcrumb {
      padding: 1.25rem 1.25rem 0;
    }

    .pd-section {
      padding: 1.5rem 1.25rem;
    }
  }
`;

export default function ProdukClient({ slug, sanityProduk }: { slug: string; sanityProduk: any }) {
  const [qty, setQty] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!sanityProduk) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="pd-outer">
          <div className="pd-wrapper">
            <header className="pd-header">
              <Link className="pd-logo" href="/">
                <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_80/v1781697094/RAMUDJITU_sf1t8w.png" alt="RamuDjitu" style={{ height: "56px", width: "56px", borderRadius: "50%", objectFit: "cover" }} />
                <span className="pd-logo-name">
                  <span style={{ color: "#2e3a1f" }}>Ramu</span>
                  <span style={{ color: "#4a3218" }}>Djitu</span>
                </span>
              </Link>
              <nav className="pd-nav">
                <Link href="/#produk">Produk</Link>
                <Link href="/tentang-kami">Tentang Kami</Link>
                <Link href="/blog">Blog</Link>
              </nav>
              <button className={`pd-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span><span></span><span></span>
              </button>
            </header>
            <div style={{ textAlign: "center", padding: "6rem 2rem" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🌿</div>
              <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, marginBottom: 12 }}>Produk tidak ditemukan</h1>
              <Link href="/" style={{ color: "#4A7A25" }}>← Kembali ke Toko</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const checkoutUrl = sanityProduk.urlCheckout || "#";
  const lpUrl = sanityProduk.urlLP || "#";
  const brand = sanityProduk.brand;
  const kategoriLabel = KATEGORI_LABELS[sanityProduk.kategori] || sanityProduk.kategori || "Produk";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pd-outer">
        <div className="pd-wrapper">

          {/* HEADER */}
          <header className="pd-header">
            <Link className="pd-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_80/v1781697094/RAMUDJITU_sf1t8w.png" alt="RamuDjitu" style={{ height: "56px", width: "56px", borderRadius: "50%", objectFit: "cover" }} />
              <span className="pd-logo-name">
                <span style={{ color: "#2e3a1f" }}>Ramu</span>
                <span style={{ color: "#4a3218" }}>Djitu</span>
              </span>
            </Link>
            <nav className="pd-nav">
              <Link href="/#produk">Produk</Link>
              <Link href="/tentang-kami">Tentang Kami</Link>
              <Link href="/blog">Blog</Link>
            </nav>
            <button className={`pd-hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </header>

          {/* MOBILE MENU */}
          <div className={`pd-mobile-menu${menuOpen ? " open" : ""}`}>
            <Link href="/#produk" onClick={() => setMenuOpen(false)}>Produk</Link>
            <Link href="/tentang-kami" onClick={() => setMenuOpen(false)}>Tentang Kami</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </div>

          {/* BREADCRUMB */}
          <nav className="pd-breadcrumb" aria-label="Breadcrumb">
            <Link href="/#produk">Produk</Link>
            <span>/</span>
            <span>{kategoriLabel}</span>
            <span>/</span>
            <span className="pd-breadcrumb-current">{brand}</span>
          </nav>

          {/* GALLERY + INFO */}
          <div className="pd-main">
            <div className="pd-gallery">
              <div className="pd-img-wrap">
                {sanityProduk.gambar && (
                  <img
                    src={optimasiCloudinary(sanityProduk.gambar, 600)}
                    alt={sanityProduk.nama}
                    fetchPriority="high"
                  />
                )}
              </div>
            </div>

            <div className="pd-info">
              <div className="pd-brand">{brand}</div>
              <h1 className="pd-nama">{sanityProduk.nama}</h1>
              <div className="pd-harga">{sanityProduk.harga}</div>

              <div className="pd-qty-row">
                <span className="pd-qty-label">Jumlah</span>
                <div className="pd-qty-control">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}>+</button>
                </div>
              </div>

              <div className="pd-cta-wrap">
                <a href={checkoutUrl} className="pd-btn-beli" target="_blank" rel="noopener noreferrer">
                  Beli Sekarang
                </a>
                <a href={lpUrl} className="pd-btn-lp" target="_blank" rel="noopener noreferrer">
                  Pelajari Manfaat Lengkapnya →
                </a>
              </div>
            </div>
          </div>

          {/* DESKRIPSI */}
          {sanityProduk.deskripsi && sanityProduk.deskripsi.length > 0 && (
            <div className="pd-section">
              <div className="pd-section-label">Tentang Produk</div>
              <div className="pd-deskripsi">
                {sanityProduk.deskripsi.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* Spacer supaya konten gak ketutup CTA sticky di mobile/tablet */}
          <div className="pd-cta-spacer" />
            
        </div>
      </div>
    </>
  );
}
