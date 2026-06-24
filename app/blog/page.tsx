import Link from "next/link";
import type { Metadata } from "next";
import { getAllArtikel } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Blog Herbal & Tips Kesehatan | Ramudjitu",
  description: "Artikel edukasi seputar herbal, jamu tradisional, dan tips hidup sehat alami dari Ramudjitu.",
};

export const revalidate = 60; // refresh data tiap 60 detik

const BLOG_CSS = `
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
    max-width: 660px;
    background: var(--cream-light);
    min-height: 100vh;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
    overflow-x: hidden;
  }

  .blog-header {
    background: var(--cream-light);
    padding: 0 1.25rem; height: 60px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
    border-bottom: 1px solid var(--cream-mid);
    box-shadow: 0 2px 8px rgba(30,18,8,0.06);
  }
  .blog-logo { display: flex; align-items: center; text-decoration: none; }
  .blog-logo img { height: 40px; width: 40px; border-radius: 50%; object-fit: cover; }
  .blog-nav-back { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 13px; text-decoration: none; transition: color 0.2s; }
  .blog-nav-back:hover { color: var(--green-mid); }

  .blog-hero { background: var(--brown-dark); padding: 2.5rem 1.25rem; text-align: center; }
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

  .blog-footer { background: var(--brown-dark); border-top: 1px solid rgba(245,236,215,0.08); padding: 1.5rem 1.25rem; text-align: center; }
  .blog-footer-text { font-size: 11px; color: rgba(245,236,215,0.4); }
  .blog-footer-text a { color: var(--green-light); text-decoration: none; }
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
              <img src="/logo.png" alt="Ramudjitu" style={{height:"40px", width:"40px", borderRadius:"50%", objectFit:"cover"}} />
            </Link>
            <Link href="/" className="blog-nav-back">← Kembali ke Toko</Link>
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
                        <img src={urlForImage(artikel.mainImage).width(200).height(200).url()} alt={artikel.title} />
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

          <footer className="blog-footer">
            <p className="blog-footer-text">© 2026 <a href="/">Ramudjitu</a> · Herbal pilihan, kesehatan terjaga</p>
          </footer>

        </div>
      </div>
    </>
  );
}
