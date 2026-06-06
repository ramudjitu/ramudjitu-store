import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Herbal & Tips Kesehatan | Ramudjitu",
  description: "Artikel edukasi seputar herbal, jamu tradisional, dan tips hidup sehat alami dari Ramudjitu.",
};

const artikelList = [
  {
    slug: "manfaat-kunyit-untuk-kesehatan",
    emoji: "🌿",
    tag: "Herbal",
    title: "7 Manfaat Kunyit yang Terbukti Secara Ilmiah",
    excerpt: "Kunyit bukan sekadar bumbu dapur. Kandungan kurkumin di dalamnya memiliki efek anti-inflamasi yang luar biasa untuk tubuh dan telah dibuktikan oleh ratusan penelitian ilmiah.",
    date: "20 Mei 2026",
    readTime: "5 menit",
  },
  {
    slug: "jahe-merah-vs-jahe-biasa",
    emoji: "🍵",
    tag: "Edukasi",
    title: "Jahe Merah vs Jahe Biasa: Mana yang Lebih Baik?",
    excerpt: "Banyak yang belum tahu perbedaan jahe merah dan jahe biasa. Simak perbandingan kandungan dan manfaatnya secara lengkap di sini.",
    date: "15 Mei 2026",
    readTime: "4 menit",
  },
  {
    slug: "tips-jaga-stamina-alami",
    emoji: "⚡",
    tag: "Tips",
    title: "5 Cara Menjaga Stamina Secara Alami Tanpa Efek Samping",
    excerpt: "Stamina prima tidak harus mengandalkan suplemen kimia. Ada cara alami yang lebih aman dan berkelanjutan untuk menjaga energi tubuh sepanjang hari.",
    date: "10 Mei 2026",
    readTime: "6 menit",
  },
  {
    slug: "mengenal-temulawak-si-raja-herbal",
    emoji: "🌱",
    tag: "Herbal",
    title: "Mengenal Temulawak: Si Raja Herbal dari Nusantara",
    excerpt: "Temulawak sudah digunakan sebagai obat tradisional selama ratusan tahun. Kenali kandungan, manfaat, dan cara terbaik mengonsumsinya.",
    date: "5 Mei 2026",
    readTime: "5 menit",
  },
  {
    slug: "antioksidan-penting-untuk-tubuh",
    emoji: "🍇",
    tag: "Edukasi",
    title: "Mengapa Antioksidan Sangat Penting untuk Tubuh Kita?",
    excerpt: "Radikal bebas ada di mana-mana — polusi, makanan, stres. Antioksidan adalah tameng alami tubuh. Pelajari cara mendapatkannya dari bahan herbal.",
    date: "1 Mei 2026",
    readTime: "4 menit",
  },
  {
    slug: "rutinitas-pagi-dengan-herbal",
    emoji: "☀️",
    tag: "Tips",
    title: "Rutinitas Pagi dengan Herbal untuk Hari yang Lebih Produktif",
    excerpt: "Mulai hari dengan segelas minuman herbal bisa mengubah kualitas hidupmu. Ini rutinitas pagi sehat yang bisa langsung kamu terapkan.",
    date: "25 April 2026",
    readTime: "3 menit",
  },
];

const tags = ["Semua", "Herbal", "Edukasi", "Tips"];

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
  body { font-family: 'DM Sans', sans-serif; background: var(--cream-light); color: var(--text-dark); }

  .blog-header {
    background: var(--brown-dark); padding: 0 2.5rem; height: 64px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
  }
  .blog-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
  .blog-logo-mark {
    width: 36px; height: 36px; background: var(--green-mid); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .blog-logo-mark svg { width: 18px; height: 18px; fill: none; stroke: #fff; stroke-width: 1.8; }
  .blog-logo-name { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--cream); }
  .blog-nav-back {
    display: flex; align-items: center; gap: 6px;
    color: rgba(245,236,215,0.6); font-size: 13px; text-decoration: none; transition: color 0.2s;
  }
  .blog-nav-back:hover { color: var(--cream); }

  .blog-hero {
    background: var(--brown-dark); padding: 4rem 2.5rem 3rem; text-align: center;
  }
  .blog-eyebrow {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(122,158,78,0.15); border: 1px solid rgba(122,158,78,0.3);
    color: var(--green-light); font-size: 11px; font-weight: 500;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 5px 14px; border-radius: 20px; margin-bottom: 1.25rem;
  }
  .blog-hero-title {
    font-family: 'Playfair Display', serif; font-size: 36px; color: var(--cream);
    line-height: 1.25; margin-bottom: 1rem; max-width: 520px; margin-left: auto; margin-right: auto;
  }
  .blog-hero-title em { font-style: italic; color: var(--green-light); }
  .blog-hero-sub { font-size: 14px; font-weight: 300; color: rgba(245,236,215,0.6); max-width: 440px; margin: 0 auto; line-height: 1.8; }

  .blog-main { max-width: 1100px; margin: 0 auto; padding: 3rem 2.5rem 5rem; }

  .blog-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 2.5rem; }
  .blog-tag-btn {
    background: #fff; border: 1.5px solid var(--cream-mid); color: var(--text-muted);
    font-size: 13px; font-weight: 400; padding: 7px 18px; border-radius: 24px;
    cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
  }
  .blog-tag-btn.active, .blog-tag-btn:hover { background: var(--green-mid); border-color: var(--green-mid); color: #fff; }

  .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }

  .blog-card {
    background: #fff; border: 1px solid var(--cream-mid); border-radius: 16px;
    overflow: hidden; text-decoration: none; display: block; transition: all 0.2s;
  }
  .blog-card:hover { border-color: var(--green-bright); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(74,122,37,0.1); }
  .blog-card-img {
    height: 140px; background: var(--green-pale);
    display: flex; align-items: center; justify-content: center; font-size: 52px;
  }
  .blog-card-body { padding: 18px; }
  .blog-card-tag {
    display: inline-block; background: var(--green-pale); color: var(--green-mid);
    font-size: 10px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;
    padding: 3px 10px; border-radius: 10px; margin-bottom: 10px;
  }
  .blog-card-title {
    font-family: 'Playfair Display', serif; font-size: 16px; color: var(--text-dark);
    line-height: 1.45; margin-bottom: 10px;
  }
  .blog-card-excerpt { font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.7; margin-bottom: 14px; }
  .blog-card-meta { display: flex; align-items: center; justify-content: space-between; }
  .blog-card-date { font-size: 11px; color: var(--text-muted); }
  .blog-card-read { font-size: 11px; color: var(--green-mid); font-weight: 500; }

  .blog-footer {
    background: var(--brown-dark); border-top: 1px solid rgba(245,236,215,0.08);
    padding: 2rem; text-align: center;
  }
  .blog-footer-text { font-size: 12px; color: rgba(245,236,215,0.4); }
  .blog-footer-text a { color: var(--green-light); text-decoration: none; }

  @media (max-width: 640px) {
    .blog-header { padding: 0 1.25rem; }
    .blog-hero { padding: 3rem 1.25rem 2.5rem; }
    .blog-hero-title { font-size: 26px; }
    .blog-main { padding: 2rem 1.25rem 4rem; }
    .blog-grid { grid-template-columns: 1fr; }
  }
`;

export default function BlogPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BLOG_CSS }} />

      {/* HEADER */}
      <header className="blog-header">
        <Link className="ramu-logo" href="/">
          <img src="/logo.png" alt="Ramudjitu" style={{height: "38px", width: "auto"}} />
        </Link>
        <Link href="/" className="blog-nav-back">← Kembali ke Toko</Link>
      </header>

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-eyebrow">📝 Blog & Edukasi</div>
        <h1 className="blog-hero-title">Tips & Wawasan <em>Herbal</em> untuk Hidupmu</h1>
        <p className="blog-hero-sub">Artikel edukasi seputar tanaman herbal, manfaat jamu, dan gaya hidup sehat alami yang bisa kamu terapkan sehari-hari.</p>
      </section>

      {/* MAIN */}
      <main className="blog-main">
        {/* Tags filter - static display */}
        <div className="blog-tags">
          {tags.map((tag) => (
            <button key={tag} className={`blog-tag-btn${tag === "Semua" ? " active" : ""}`}>{tag}</button>
          ))}
        </div>

        {/* Grid artikel */}
        <div className="blog-grid">
          {artikelList.map((artikel) => (
            <Link href={`/blog/${artikel.slug}`} className="blog-card" key={artikel.slug}>
              <div className="blog-card-img">{artikel.emoji}</div>
              <div className="blog-card-body">
                <span className="blog-card-tag">{artikel.tag}</span>
                <div className="blog-card-title">{artikel.title}</div>
                <div className="blog-card-excerpt">{artikel.excerpt}</div>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{artikel.date}</span>
                  <span className="blog-card-read">⏱ {artikel.readTime} baca</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="blog-footer">
        <p className="blog-footer-text">© 2026 <a href="/">Ramudjitu</a> · Herbal pilihan, kesehatan terjaga</p>
      </footer>
    </>
  );
}
