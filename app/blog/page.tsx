import Link from "next/link";
import type { Metadata } from "next";
import { getAllArtikel } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

function optimasiCloudinary(url: string, width: number = 600) {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}

export const metadata: Metadata = {
  title: "Blog Herbal & Tips Kesehatan | Ramudjitu",
  description: "Artikel edukasi seputar herbal, jamu tradisional, dan tips hidup sehat alami dari Ramudjitu.",
};

export const revalidate = 60; // refresh data tiap 60 detik

const BLOG_CSS = `
  
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

  .blog-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .blog-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .blog-header {
    background: var(--cream-light);
    padding: 0 1.25rem; height: 68px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
    border-bottom: 1px solid var(--cream-mid);
    box-shadow: 0 2px 8px rgba(30,18,8,0.06);
  }
  .blog-logo { display: flex; align-items: center; gap:10px; text-decoration: none; }
  .blog-logo img { height: 44px; width: 44px; border-radius: 50%; object-fit: cover; }
  .blog-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .blog-nav a {
    color: var(--text-mid);
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s;
  }

  .blog-nav a:hover { color: var(--green-mid); }
  .blog-nav a.active { color: var(--green-mid); font-weight: 500; }

  .blog-hero { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem 1.25rem 1.5rem; }
  .blog-eyebrow { display: inline-flex; align-items: center; gap: 6px; background: rgba(122,158,78,0.15); border: 1px solid rgba(122,158,78,0.3); color: var(--green-light); font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 1rem; }
  .blog-hero-title { font-family: 'Playfair Display', serif; font-size: 26px; color: var(--cream); line-height: 1.3; margin-bottom: 0.75rem; }
  .blog-hero-title em { font-style: italic; color: var(--green-light); }
  .blog-hero-sub { font-size: 13px; font-weight: 300; color: rgba(245,236,215,0.6); line-height: 1.8; }

  .blog-main { padding: 1.75rem 1.25rem 4rem; }

  .blog-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1.5rem; }
  .blog-tag-btn { background: #fff; border: 1.5px solid var(--cream-mid); color: var(--text-muted); font-size: 12px; padding: 6px 16px; border-radius: 20px; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
  .blog-tag-btn.active, .blog-tag-btn:hover { background: var(--green-mid); border-color: var(--green-mid); color: #fff; }

  .blog-grid { display: flex; flex-direction: column; gap: 14px; }
  .blog-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; overflow: hidden; text-decoration: none; display: flex; transition: all 0.2s; }
  .blog-card:hover { border-color: var(--green-bright); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(74,122,37,0.1); }
  .blog-card-img { width: 100px; min-height: 100px; background: var(--green-pale); display: flex; align-items: center; justify-content: center; font-size: 36px; flex-shrink: 0; overflow: hidden; }
  .blog-card-img img { width: 100%; height: 100%; object-fit: cover; }
  .blog-card-body { padding: 14px; flex: 1; }
  .blog-card-tag { display: inline-block; background: var(--green-pale); color: var(--green-mid); font-size: 9px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; padding: 2px 8px; border-radius: 8px; margin-bottom: 7px; }
  .blog-card-title { font-family: 'Playfair Display', serif; font-size: 14px; color: var(--text-dark); line-height: 1.4; margin-bottom: 6px; }
  .blog-card-excerpt { font-size: 12px; font-weight: 300; color: var(--text-muted); line-height: 1.6; margin-bottom: 8px; }
  .blog-card-meta { font-size: 11px; color: var(--text-muted); }

  .blog-empty { text-align: center; padding: 3rem 1rem; color: var(--text-muted); font-size: 13px; }

  .blog-footer { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem 1.25rem 1.5rem; }
  .blog-footer-logo { font-family:'Playfair Display',serif; font-size:18px; color:var(--cream); margin-bottom:4px; }
  .blog-footer-tagline { font-size:11px; font-weight:300; color:rgba(245,236,215,0.4); margin-bottom:1.25rem; }
  .blog-footer-sosmed { display:flex; gap:10px; margin-bottom:1.5rem; }
  .blog-sosmed-btn { width:34px; height:34px; border-radius:50%; background:rgba(245,236,215,0.08); border:1px solid rgba(245,236,215,0.15); display:flex; align-items:center; justify-content:center; text-decoration:none; transition:all 0.2s; }
  .blog-sosmed-btn:hover { background:var(--green-mid); border-color:var(--green-mid); }
  .blog-sosmed-btn svg { width:15px; height:15px; fill:rgba(245,236,215,0.7); }
  .blog-sosmed-fb { background: #1877F2 !important; border-color: #1877F2 !important; }
  .blog-sosmed-ig { background: #E1306C !important; border-color: #E1306C !important; }
  .blog-sosmed-yt { background: #FF0000 !important; border-color: #FF0000 !important; }
  .blog-sosmed-tt { background: #010101 !important; border-color: #333 !important; }
  .blog-footer-links { display:flex; flex-wrap:wrap; gap:8px 20px; margin-bottom:1.5rem; }
  .blog-footer-links a { font-size:11px; color:rgba(245,236,215,0.4); text-decoration:none; transition:color 0.2s; }
  .blog-footer-links a:hover { color:var(--green-light); }
  .blog-footer-copy { font-size:10px; color:rgba(245,236,215,0.25); text-align:center; padding-top:1rem; border-top:1px solid rgba(245,236,215,0.08); }
`;

function formatTanggal(dateString: string) {
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const d = new Date(dateString);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export default async function BlogPage() {
  const artikelList = await getAllArtikel();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BLOG_CSS }} />
      <div className="blog-outer">
        <div className="blog-wrapper">

          <header className="blog-header">
            <Link className="blog-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}><span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span></span>
            </Link>

            <nav className="blog-nav">
              <Link href="/#produk">Produk</Link>
              <Link href="/tentang-kami">Tentang Kami</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </header>

          <section className="blog-hero">
            <div className="blog-eyebrow">Blog & Edukasi</div>
            <h1 className="blog-hero-title">Tips & Wawasan <em>Herbal</em> untuk Hidupmu</h1>
            <p className="blog-hero-sub">Artikel edukasi seputar tanaman herbal, manfaat jamu, dan gaya hidup sehat alami.</p>
          </section>

          <main className="blog-main">
            <div className="blog-tags">
              {["Semua", "Herbal", "Edukasi", "Tips"].map((tag) => (
                <button key={tag} className={`blog-tag-btn${tag === "Semua" ? " active" : ""}`}>{tag}</button>
              ))}
            </div>

            {artikelList.length === 0 ? (
              <div className="blog-empty">
                Belum ada artikel. Tulis artikel pertama di Sanity Studio ya! 🌿
              </div>
            ) : (
              <div className="blog-grid">
                {artikelList.map((artikel: any) => (
                  <Link href={`/blog/${artikel.slug}`} className="blog-card" key={artikel.slug}>
                    <div className="blog-card-img">
                      {artikel.mainImage ? (
                        <img src={optimasiCloudinary(artikel.imageUrl)} alt={artikel.title} />
                      ) : (
                        "🌿"
                      )}
                    </div>
                    <div className="blog-card-body">
                      <span className="blog-card-tag">{artikel.tag}</span>
                      <div className="blog-card-title">{artikel.title}</div>
                      <div className="blog-card-excerpt">{artikel.description}</div>
                      <div className="blog-card-meta">{formatTanggal(artikel.publishedAt)} · ⏱ {artikel.readTime} baca</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>

           {/* FOOTER sama dengan home */}
          <footer className="blog-footer">
            <div className="blog-footer-logo"><span style={{fontFamily:"'Playfair Display', serif", fontWeight:"700"}}><span style={{color:"#C5DC8E"}}>Ramu</span><span style={{color:"#F5ECD7"}}>Djitu</span></span></div>
            <div className="blog-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
            <div className="blog-footer-sosmed">
              <a href="https://facebook.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="blog-sosmed-btn blog-sosmed-fb">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="blog-sosmed-btn blog-sosmed-ig">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="blog-sosmed-btn blog-sosmed-yt">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style={{fill:"#1E1208"}}/></svg>
              </a>
              <a href="https://tiktok.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="blog-sosmed-btn blog-sosmed-tt">
                <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
            </div>
            <div className="blog-footer-links">
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Kebijakan Pengembalian</a>
              <a href="#">Hubungi Kami</a>
              <a href="#">FAQ</a>
            </div>
            <div className="blog-footer-copy">© 2026 RamuDjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}

