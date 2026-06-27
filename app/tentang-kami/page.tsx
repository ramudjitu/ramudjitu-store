import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Ramudjitu",
  description: "Kenali lebih dalam tentang RamuDjitu — semangat, nilai, dan komitmen kami dalam menghadirkan produk health & wellness terpercaya untuk Indonesia.",
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
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .tentang-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .tentang-wrapper {
    width: 100%;
    max-width: 660px;
    background: var(--cream-light);
    min-height: 100vh;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  .tentang-header {
    background: var(--cream-light);
    padding: 0 1.25rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid var(--cream-mid);
    box-shadow: 0 2px 8px rgba(30,18,8,0.06);
  }

  .tentang-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  .tentang-logo img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .tentang-nav-back {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
  }

  .tentang-nav-back:hover { color: var(--green-mid); }

  .tentang-hero {
    background: var(--brown-dark);
    padding: 2.5rem 1.25rem;
    text-align: center;
  }

  .tentang-eyebrow {
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

  .tentang-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .tentang-hero-title em {
    font-style: italic;
    color: var(--green-light);
  }

  .tentang-hero-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.6);
    line-height: 1.8;
  }

  .tentang-main {
    padding: 2rem 1.25rem 5rem;
  }

  .tentang-section-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--green-mid);
    margin-bottom: 0.75rem;
  }

  .tentang-intro {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-dark);
    line-height: 1.9;
    text-align: justify;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .tentang-keunggulan-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: var(--text-dark);
    margin-bottom: 1.25rem;
  }

  .tentang-k-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 2.5rem;
  }

  .tentang-k-card {
    background: #fff;
    border: 1px solid var(--cream-mid);
    border-radius: 14px;
    padding: 1.25rem 1rem;
    transition: all 0.2s;
  }

  .tentang-k-card:hover {
    border-color: var(--green-bright);
    box-shadow: 0 4px 12px rgba(74,122,37,0.08);
    transform: translateY(-2px);
  }

  .tentang-k-icon {
    font-size: 22px;
    margin-bottom: 0.6rem;
  }

  .tentang-k-card h4 {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 0.4rem;
  }

  .tentang-k-card p {
    font-size: 11px;
    font-weight: 300;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .tentang-divider {
    border: none;
    border-top: 1px solid var(--cream-mid);
    margin: 2rem 0;
  }

  .tentang-visi {
    background: var(--green-pale);
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    margin-bottom: 1rem;
  }

  .tentang-visi-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--green-mid);
    margin-bottom: 0.6rem;
  }

  .tentang-visi-text {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    color: var(--text-dark);
    line-height: 1.6;
    font-style: italic;
  }

  .tentang-cta {
    background: var(--brown-dark);
    border-radius: 14px;
    padding: 1.5rem 1.25rem;
    text-align: center;
    margin-top: 2rem;
  }

  .tentang-cta p {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.7);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .tentang-cta-btn {
    display: inline-block;
    background: var(--green-mid);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 24px;
    border-radius: 999px;
    text-decoration: none;
    transition: background 0.2s;
  }

  .tentang-cta-btn:hover { background: var(--green-deep); }

  .tentang-footer {
    background: var(--brown-dark);
    border-top: 1px solid rgba(245,236,215,0.08);
    padding: 1.5rem 1.25rem;
    text-align: center;
  }

  .tentang-footer-text {
    font-size: 11px;
    color: rgba(245,236,215,0.4);
  }

  .tentang-footer-text a {
    color: var(--green-light);
    text-decoration: none;
  }
`;

export default function TentangKamiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tentang-outer">
        <div className="tentang-wrapper">

          {/* HEADER */}
          <header className="tentang-header">
            <Link className="tentang-logo" href="/">
              <img
                src="https://res.cloudinary.com/dzg25zm9i/image/upload/f_auto,q_auto,w_80/v1781697094/RAMUDJITU_sf1t8w.png"
                alt="Ramudjitu"
              />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: "700" }}>
                <span style={{ color: "#2e3a1f" }}>Ramu</span>
                <span style={{ color: "#4a3218" }}>Djitu</span>
              </span>
            </Link>
            <Link href="/" className="tentang-nav-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="tentang-hero">
            <div className="tentang-eyebrow">🌿 Tentang Kami</div>
            <h1 className="tentang-hero-title">Mengapa <em>RamuDjitu</em></h1>
            <p className="tentang-hero-sub">Semangat, nilai, dan komitmen kami dalam menghadirkan produk health & wellness terpercaya.</p>
          </section>

          {/* MAIN CONTENT */}
          <main className="tentang-main">

            <div className="tentang-section-label">Latar Belakang</div>
            <p className="tentang-intro">
              Di tengah banyaknya pilihan produk kesehatan dan wellness, memilih yang tepat tidak selalu mudah.
              RamuDjitu menghadirkan produk health & wellness pilihan dari berbagai brand terpercaya yang memiliki
              standar legalitas dan kualitas yang jelas. Bagi kami, kesehatan bukan sekadar tentang banyaknya pilihan,
              tetapi tentang menemukan yang tepat dan memberikan manfaat yang nyata. Itulah semangat yang menjadi
              dasar hadirnya RamuDjitu.
            </p>

            <div className="tentang-keunggulan-title">Keunggulan Kami</div>
            <div className="tentang-k-grid">
              {[
                { icon: "🎯", title: "Produk Pilihan", desc: "Kami menghadirkan produk yang dipilih dengan mempertimbangkan kualitas dan kepercayaan." },
                { icon: "🤝", title: "Brand Terpercaya", desc: "Berbagai pilihan dari brand yang memiliki komitmen terhadap kualitas dan kepuasan pelanggan." },
                { icon: "✅", title: "Legal & Terdaftar", desc: "Kami mengutamakan produk yang memiliki legalitas dan standar yang jelas." },
                { icon: "💚", title: "Manfaat yang Nyata", desc: "Kami percaya setiap pilihan kesehatan seharusnya memberikan nilai dan manfaat yang dapat dirasakan sehari-hari." },
              ].map((item, i) => (
                <div className="tentang-k-card" key={i}>
                  <div className="tentang-k-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="tentang-visi">
              <div className="tentang-visi-label">Visi Kami</div>
              <p className="tentang-visi-text">
                "Menjadi mitra terpercaya dalam perjalanan kesehatan setiap keluarga Indonesia melalui produk pilihan yang nyata manfaatnya."
              </p>
            </div>

            <div className="tentang-cta">
              <p>Siap memulai perjalanan hidup sehat bersama RamuDjitu?</p>
              <Link href="/" className="tentang-cta-btn">Lihat Produk Kami →</Link>
            </div>

          </main>

          {/* FOOTER */}
          <footer className="tentang-footer">
            <p className="tentang-footer-text">© 2026 <a href="/">Ramudjitu</a> · Herbal pilihan, kesehatan terjaga</p>
          </footer>

        </div>
      </div>
    </>
  );
}
