"use client";

import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";

function optimasiCloudinary(url: string, width: number = 600) {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}

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
    border-bottom: 1px solid var(--cream-mid);
    box-shadow: 0 2px 8px rgba(30,18,8,0.06);
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

  .pd-nav {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex: 1;
    justify-content: center;
  }

  .pd-nav a {
    color: var(--text-muted);
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s;
  }

  .pd-nav a:hover { color: var(--green-mid); }

  @media (max-width: 639px) { .pd-nav { display: none; } }

  .pd-img-wrap {
    width: 100%;
    aspect-ratio: 1/1;
    background: var(--green-pale);
    overflow: hidden;
    position: relative;
  }

  .pd-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: var(--cream-light);
  }

  .pd-info {
    padding: 1.25rem;
  }

  .pd-harga {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 4px;
  }

  .pd-nama {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-dark);
    line-height: 1.4;
    margin-bottom: 8px;
  }

  .pd-desc {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .pd-bpom {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(212,134,15,0.08);
    border: 1px solid rgba(212,134,15,0.2);
    color: var(--amber);
    font-size: 10px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 20px;
    margin-bottom: 1.25rem;
  }

  .pd-cta-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 1.5rem;
  }

  .pd-btn-beli {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: #00AA5B;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    padding: 16px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s;
    box-shadow: 0 4px 14px rgba(0,170,91,0.3);
  }

  .pd-btn-beli:hover { background: #008C4A; }

  .pd-btn-lp {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: transparent;
    color: var(--green-mid);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 14px;
    border-radius: 14px;
    border: 1.5px solid var(--green-mid);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }

  .pd-btn-lp:hover { background: var(--green-pale); }

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

  .pd-footer {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    border-top: 1px solid rgba(245,236,215,0.08);
    padding: 2rem 1.25rem 1.5rem;
  }

  .pd-footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    color: var(--cream);
    margin-bottom: 4px;
  }

  .pd-footer-tagline {
    font-size: 11px;
    font-weight: 300;
    color: rgba(245,236,215,0.4);
    margin-bottom: 1.25rem;
  }

  .pd-footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    margin-bottom: 1.5rem;
  }

  .pd-footer-links a {
    font-size: 11px;
    color: rgba(245,236,215,0.4);
    text-decoration: none;
    transition: color 0.2s;
  }

  .pd-footer-links a:hover { color: var(--green-light); }

  .pd-footer-copy {
    font-size: 10px;
    color: rgba(245,236,215,0.25);
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(245,236,215,0.08);
  }
`;

export default function ProdukClient({ slug, sanityProduk }: { slug: string; sanityProduk: any }) {
  const [qty, setQty] = useState(1);

  if (!sanityProduk) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="pd-outer">
          <div className="pd-wrapper">
            <header className="pd-header">
              <Link className="pd-logo" href="/">
                <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_80/v1781697094/RAMUDJITU_sf1t8w.png" alt="RamuDjitu" />
                <span className="pd-logo-name">
                  <span style={{ color: "#2e3a1f" }}>Ramu</span>
                  <span style={{ color: "#4a3218" }}>Djitu</span>
                </span>
              </Link>
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

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pd-outer">
        <div className="pd-wrapper">

          {/* HEADER */}
          <header className="pd-header">
            <Link className="pd-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_80/v1781697094/RAMUDJITU_sf1t8w.png" alt="RamuDjitu" />
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
            <HamburgerMenu prefix="pd" />
          </header>

          {/* FOTO PRODUK */}
          <div className="pd-img-wrap">
            {sanityProduk.gambar && (
              <img
                src={optimasiCloudinary(sanityProduk.gambar, 600)}
                alt={sanityProduk.nama}
                fetchPriority="high"
              />
            )}
          </div>

          {/* INFO PRODUK */}
          <div className="pd-info">
            <div className="pd-harga">{sanityProduk.harga}</div>
            <div className="pd-nama">{sanityProduk.nama}</div>
            <div className="pd-desc">{sanityProduk.deskripsiSingkat}</div>

            {sanityProduk.bpom && (
              <div className="pd-bpom">🏅 {sanityProduk.bpom}</div>
            )}

            {/* QTY */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "1.25rem" }}>
              <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500, letterSpacing: 1, textTransform: "uppercase" }}>Jumlah</span>
              <div style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--cream-mid)", borderRadius: 10, padding: "4px 8px" }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 28, height: 28, background: "#fff", border: "1px solid var(--cream-mid)", borderRadius: 6, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                <span style={{ fontSize: 15, fontWeight: 600, minWidth: 20, textAlign: "center" }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{ width: 28, height: 28, background: "#fff", border: "1px solid var(--cream-mid)", borderRadius: 6, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
              </div>
            </div>

            {/* CTA */}
            <div className="pd-cta-wrap">
              <a href={checkoutUrl} className="pd-btn-beli" target="_blank" rel="noopener noreferrer">
                Beli Sekarang
              </a>
              {lpUrl !== "#" && (
                <a href={lpUrl} className="pd-btn-lp" target="_blank" rel="noopener noreferrer">
                  Pelajari Manfaat Lengkapnya →
                </a>
              )}
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

          {/* FOOTER */}
          <footer className="pd-footer">
            <div className="pd-footer-logo">
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: "700" }}>
                <span style={{ color: "#C5DC8E" }}>Ramu</span>
                <span style={{ color: "#F5ECD7" }}>Djitu</span>
              </span>
            </div>
            <div className="pd-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
            <div className="pd-footer-links">
              <Link href="/syarat-ketentuan">Syarat & Ketentuan</Link>
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
              <Link href="/kebijakan-pengembalian">Kebijakan Pengembalian</Link>
              <Link href="/hubungi-kami">Hubungi Kami</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div className="pd-footer-copy">© 2026 RamuDjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
