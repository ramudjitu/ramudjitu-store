import Link from "next/link";
import type { Metadata } from "next";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { getArtikelBySlug } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

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
    max-width: 660px;
    background: var(--cream-light);
    min-height: 100vh;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  .det-header { background: var(--cream-light); padding: 0 1.25rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--cream-mid); box-shadow: 0 2px 8px rgba(30,18,8,0.06); }
  .det-logo { display: flex; align-items: center; text-decoration: none; }
  .det-logo img { height: 40px; width: 40px; border-radius: 50%; object-fit: cover; }
  .det-nav-back { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 13px; text-decoration: none; transition: color 0.2s; }
  .det-nav-back:hover { color: var(--green-mid); }

  .det-hero { background: var(--brown-dark); padding: 2.5rem 1.25rem 2rem; }
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

  .det-footer { background: var(--brown-dark); border-top: 1px solid rgba(245,236,215,0.08); padding: 1.5rem 1.25rem; text-align: center; }
  .det-footer p { font-size: 11px; color: rgba(245,236,215,0.4); }
  .det-footer a { color: var(--green-light); text-decoration: none; }
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
      <img src={urlForImage(value).width(640).url()} alt="" />
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
              <Link className="det-logo" href="/"><img src="/logo.png" alt="Ramudjitu" style={{height:"40px", width:"40px", borderRadius:"50%", objectFit:"cover"}} /></Link>
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
              <img src="/logo.png" alt="Ramudjitu" style={{height:"40px", width:"40px", borderRadius:"50%", objectFit:"cover"}} />
            </Link>
            <Link href="/blog" className="det-nav-back">← Kembali ke Blog</Link>
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

          <footer className="det-footer">
            <p>© 2026 <a href="/">Ramudjitu</a> · <a href="/blog">Blog</a> · Herbal pilihan, kesehatan terjaga</p>
          </footer>

        </div>
      </div>
    </>
  );
}
