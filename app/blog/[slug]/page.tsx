import Link from "next/link";
import type { Metadata } from "next";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getArtikelBySlug } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

function optimasiCloudinary(url: string, width: number = 600) {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artikel = await getArtikelBySlug(slug);
  if (!artikel) return { title: "Artikel tidak ditemukan | Ramudjitu" };
  return {
    title: `${artikel.title} | Ramudjitu`,
    description: artikel.description,
  };
}

export const revalidate = 60;

const DETAIL_CSS = `
  

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

  .det-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .det-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .det-header { background: var(--cream-light); padding: 0 1.25rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--cream-mid); box-shadow: 0 2px 8px rgba(30,18,8,0.06); }
  .det-logo { display: flex; align-items: center; gap:10px; text-decoration: none; }
  .det-logo img { height: 44px; width: 44px; border-radius: 50%; object-fit: cover; }
  .det-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .det-nav a {
    color: var(--text-mid);
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s;
  }

  .det-nav a:hover { color: var(--green-mid); }
  .det-nav a.active { color: var(--green-mid); font-weight: 500; }

  .det-hero { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem 1.25rem 1.5rem; }
  .det-tag { display: inline-block; background: rgba(122,158,78,0.15); border: 1px solid rgba(122,158,78,0.3); color: var(--green-light); font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 1rem; }
  .det-title { font-family: 'Playfair Display', serif; font-size: 26px; color: var(--cream); line-height: 1.3; margin-bottom: 1rem; }
  .det-meta { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
  .det-meta span { font-size: 12px; color: rgba(245,236,215,0.5); }
  .det-meta span strong { color: rgba(245,236,215,0.8); }

  .det-emoji-banner { background: var(--green-pale); height: 220px; display: flex; align-items: center; justify-content: center; font-size: 70px; overflow: hidden; }
  .det-emoji-banner img { width: 100%; height: 100%; object-fit: cover; }

  .det-content { padding: 2rem 1.25rem 1.5rem; }
  .det-content p { font-size: 14px; font-weight: 300; color: var(--text-mid); line-height: 1.9; margin-bottom: 1.25rem; }
  .det-content h2 { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--text-dark); margin-bottom: 0.6rem; margin-top: 1.75rem; }
  .det-content img { width: 100%; border-radius: 12px; margin: 1.25rem 0; }
  .det-content strong { font-weight: 600; color: var(--text-dark); }

  .det-cta { background: var(--green-pale); border: 1px solid var(--green-bright); border-radius: 14px; padding: 1.25rem; margin: 1.5rem 0; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  .det-cta-text { font-size: 13px; font-weight: 500; color: var(--green-deep); }
  .det-cta-sub { font-size: 11px; font-weight: 300; color: var(--text-muted); margin-top: 3px; }
  .det-cta-btn { background: var(--green-mid); color: #fff; font-size: 12px; font-weight: 500; padding: 9px 18px; border-radius: 20px; text-decoration: none; white-space: nowrap; transition: background 0.2s; font-family: 'DM Sans', sans-serif; }
  .det-cta-btn:hover { background: var(--green-deep); }

  .det-related { padding: 0 1.25rem 3rem; }
  .det-related-title { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--text-dark); margin-bottom: 1rem; }
  .det-related-grid { display: flex; flex-direction: column; gap: 12px; }
  .det-related-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 12px; overflow: hidden; text-decoration: none; display: flex; align-items: center; gap: 12px; padding: 12px; transition: all 0.2s; }
  .det-related-card:hover { border-color: var(--green-bright); }
  .det-related-emoji { font-size: 28px; flex-shrink: 0; width: 44px; height: 44px; border-radius: 8px; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--green-pale); }
  .det-related-emoji img { width: 100%; height: 100%; object-fit: cover; }
  .det-related-tag { font-size: 9px; font-weight: 500; color: var(--green-mid); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px; }
  .det-related-ttl { font-size: 13px; font-weight: 500; color: var(--text-dark); line-height: 1.4; }

  .det-footer { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem 1.25rem 1.5rem; }
  .det-footer-logo { font-family:'Playfair Display',serif; font-size:18px; color:var(--cream); margin-bottom:4px; }
  .det-footer-tagline { font-size:11px; font-weight:300; color:rgba(245,236,215,0.4); margin-bottom:1.25rem; }
  .det-footer-sosmed { display:flex; gap:10px; margin-bottom:1.5rem; }
  .det-sosmed-btn { width:34px; height:34px; border-radius:50%; background:rgba(245,236,215,0.08); border:1px solid rgba(245,236,215,0.15); display:flex; align-items:center; justify-content:center; text-decoration:none; transition:all 0.2s; }
  .det-sosmed-btn:hover { background:var(--green-mid); border-color:var(--green-mid); }
  .det-sosmed-btn svg { width:15px; height:15px; fill:rgba(245,236,215,0.7); }
  .det-sosmed-fb { background: #1877F2 !important; border-color: #1877F2 !important; }
  .det-sosmed-ig { background: #E1306C !important; border-color: #E1306C !important; }
  .det-sosmed-yt { background: #FF0000 !important; border-color: #FF0000 !important; }
  .det-sosmed-tt { background: #010101 !important; border-color: #333 !important; }
  .det-footer-links { display:flex; flex-wrap:wrap; gap:8px 20px; margin-bottom:1.5rem; }
  .det-footer-links a { font-size:11px; color:rgba(245,236,215,0.4); text-decoration:none; transition:color 0.2s; }
  .det-footer-links a:hover { color:var(--green-light); }
  .det-footer-copy { font-size:10px; color:rgba(245,236,215,0.25); text-align:center; padding-top:1rem; border-top:1px solid rgba(245,236,215,0.08); }
`;

function formatTanggal(dateString: string) {
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const d = new Date(dateString);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

// Komponen custom untuk render rich text dari Sanity (heading, paragraf, gambar)
const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    normal: ({ children }) => <p>{children}</p>,
  },
  types: {
    image: ({ value }) => (
      <img src={value?.asset?.url || ''} alt={value?.alt || ''} />
    ),
   },
 };
 
export default async function ArtikelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artikel = await getArtikelBySlug(slug);

  if (!artikel) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: DETAIL_CSS }} />
        <div className="det-outer">
          <div className="det-wrapper">
            <header className="det-header">
              <Link className="det-logo" href="/" style={{gap:"10px"}}><img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} /></Link>
              <Link href="/blog" className="det-nav-back">← Blog</Link>
            </header>
            <div style={{textAlign:"center", padding:"6rem 2rem"}}>
              <div style={{fontSize:60, marginBottom:16}}>🌿</div>
              <h1 style={{fontFamily:"Playfair Display, serif", fontSize:24, marginBottom:12}}>Artikel tidak ditemukan</h1>
              <Link href="/blog" style={{color:"#4A7A25"}}>← Lihat semua artikel</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const relatedArtikel = artikel.related || [];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DETAIL_CSS }} />
      <div className="det-outer">
        <div className="det-wrapper">

          <header className="det-header">
            <Link className="det-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}><span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span></span>
            </Link>

            <nav className="det-nav">
              <Link href="/#produk">Produk</Link>
              <Link href="/tentang-kami">Tentang Kami</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </header>

          <section className="det-hero">
            <span className="det-tag">{artikel.tag}</span>
            <h1 className="det-title">{artikel.title}</h1>
            <div className="det-meta">
              <span><strong>{formatTanggal(artikel.publishedAt)}</strong></span>
              <span>⏱ {artikel.readTime} baca</span>
            </div>
          </section>

          <div className="det-emoji-banner">
            {artikel.mainImage ? (
              <img src={urlForImage(artikel.mainImage).width(700).url()} alt={artikel.title} />
            ) : (
              "🌿"
            )}
          </div>

          <article className="det-content">
            {artikel.content && <PortableText value={artikel.content} components={ptComponents} />}

            <div className="det-cta">
              <div>
                <div className="det-cta-text">🌿 Coba produk herbal Ramudjitu</div>
                <div className="det-cta-sub">Diformulasikan dari bahan alami pilihan, terdaftar BPOM</div>
              </div>
              <Link href="/#produk" className="det-cta-btn">Lihat Produk →</Link>
            </div>
          </article>

          {relatedArtikel.length > 0 && (
            <section className="det-related">
              <h2 className="det-related-title">Artikel Terkait</h2>
              <div className="det-related-grid">
                {relatedArtikel.map((rel: any) => (
                  <Link href={`/blog/${rel.slug}`} className="det-related-card" key={rel.slug}>
                    <span className="det-related-emoji">
                      {rel.mainImage ? (
                        <img src={urlForImage(rel.mainImage).width(88).height(88).url()} alt={rel.title} />
                      ) : (
                        "🌿"
                      )}
                    </span>
                    <div>
                      <div className="det-related-tag">{rel.tag}</div>
                      <div className="det-related-ttl">{rel.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

           {/* FOOTER sama dengan home */}
          <footer className="det-footer">
            <div className="t-footer-logo"><span style={{fontFamily:"'Playfair Display', serif", fontWeight:"700"}}><span style={{color:"#C5DC8E"}}>Ramu</span><span style={{color:"#F5ECD7"}}>Djitu</span></span></div>
            <div className="det-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
            <div className="det-footer-sosmed">
              <a href="https://facebook.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="det-sosmed-btn det-sosmed-fb">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="det-sosmed-btn det-sosmed-ig">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="det-sosmed-btn det-sosmed-yt">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style={{fill:"#1E1208"}}/></svg>
              </a>
              <a href="https://tiktok.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="det-sosmed-btn det-sosmed-tt">
                <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
            </div>
            <div className="det-footer-links">
              <Link href="/" style={{fontSize:"11px",color:"rgba(245,236,215,0.4)",textDecoration:"none"}}>Beranda</Link>
              <Link href="/blog" style={{fontSize:"11px",color:"rgba(245,236,215,0.4)",textDecoration:"none"}}>Blog</Link>
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
              <a href="#">FAQ</a>
              <a href="#">Hubungi Kami</a>
            </div>
            <div className="det-footer-copy">© 2026 RamuDjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}

