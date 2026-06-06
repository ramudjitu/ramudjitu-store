import Link from "next/link";
import type { Metadata } from "next";

// ── DATA ARTIKEL ─────────────────────────────────────
const artikelData: Record<string, {
  title: string; tag: string; emoji: string; date: string; readTime: string;
  description: string;
  content: { heading?: string; body: string }[];
  related: string[];
}> = {
  "manfaat-kunyit-untuk-kesehatan": {
    title: "7 Manfaat Kunyit yang Terbukti Secara Ilmiah",
    tag: "Herbal", emoji: "🌿", date: "20 Mei 2026", readTime: "5 menit",
    description: "Kunyit bukan sekadar bumbu dapur. Kandungan kurkumin di dalamnya memiliki efek anti-inflamasi yang luar biasa untuk tubuh.",
    content: [
      { body: "Kunyit (Curcuma longa) adalah salah satu tanaman herbal paling banyak diteliti di dunia. Kandungan utamanya, kurkumin, telah terbukti memiliki berbagai manfaat kesehatan yang signifikan." },
      { heading: "1. Anti-inflamasi Alami", body: "Kurkumin bekerja menghambat molekul NF-kB, pemicu utama peradangan kronis. Efeknya setara dengan beberapa obat anti-inflamasi, namun tanpa efek samping berbahaya." },
      { heading: "2. Antioksidan Kuat", body: "Kurkumin menetralisir radikal bebas secara langsung dan merangsang enzim antioksidan tubuh, memberikan perlindungan ganda dari kerusakan sel." },
      { heading: "3. Mendukung Kesehatan Otak", body: "Kurkumin meningkatkan kadar BDNF (Brain-Derived Neurotrophic Factor), protein penting untuk pertumbuhan neuron baru dan fungsi otak yang optimal." },
      { heading: "4. Menjaga Kesehatan Jantung", body: "Penelitian menunjukkan kurkumin memperbaiki fungsi endotelium (lapisan pembuluh darah), mengurangi risiko penyakit jantung secara signifikan." },
      { heading: "5. Potensi Antikanker", body: "Studi laboratorium menunjukkan kurkumin dapat mempengaruhi pertumbuhan, perkembangan, dan penyebaran sel kanker pada tingkat molekuler." },
      { heading: "6. Membantu Radang Sendi", body: "Beberapa uji klinis menunjukkan suplemen kurkumin sama efektifnya dengan ibuprofen dalam mengurangi nyeri pada penderita osteoartritis." },
      { heading: "7. Mendukung Kesehatan Mental", body: "Ada bukti bahwa kurkumin dapat meningkatkan kadar serotonin dan dopamin, hormon kebahagiaan, sehingga berpotensi membantu mengatasi depresi ringan." },
      { heading: "Tips Konsumsi", body: "Untuk meningkatkan penyerapan kurkumin hingga 2000%, konsumsi bersama piperin (dari lada hitam). Produk Jus Kunyit Asam Ramudjitu sudah menggunakan formula yang tepat untuk memaksimalkan manfaat ini." },
    ],
    related: ["jahe-merah-vs-jahe-biasa", "antioksidan-penting-untuk-tubuh"],
  },
  "jahe-merah-vs-jahe-biasa": {
    title: "Jahe Merah vs Jahe Biasa: Mana yang Lebih Baik?",
    tag: "Edukasi", emoji: "🍵", date: "15 Mei 2026", readTime: "4 menit",
    description: "Banyak yang belum tahu perbedaan jahe merah dan jahe biasa. Simak perbandingan kandungan dan manfaatnya secara lengkap.",
    content: [
      { body: "Di pasar herbal Indonesia, ada dua jenis jahe yang sering kita temui: jahe merah (Zingiber officinale var. rubrum) dan jahe biasa (Zingiber officinale). Keduanya memiliki manfaat, tapi dengan kekuatan yang berbeda." },
      { heading: "Perbedaan Fisik", body: "Jahe merah berukuran lebih kecil dengan rimpang berwarna kemerahan. Rasanya jauh lebih pedas dan aromanya lebih tajam dibanding jahe biasa yang berwarna kuning pucat." },
      { heading: "Kandungan Aktif", body: "Jahe merah mengandung gingerol dan shogaol dalam konsentrasi lebih tinggi. Ini yang membuatnya lebih potent sebagai anti-inflamasi dan penghangat tubuh." },
      { heading: "Manfaat Jahe Merah", body: "Lebih efektif untuk: meredakan nyeri sendi, meningkatkan stamina pria, menghangatkan tubuh, mengatasi mual, dan meningkatkan sirkulasi darah." },
      { heading: "Manfaat Jahe Biasa", body: "Lebih cocok untuk: konsumsi harian, mengatasi masuk angin ringan, meredakan mual kehamilan (lebih aman), dan sebagai bumbu masak." },
      { heading: "Mana yang Lebih Baik?", body: "Tidak ada yang mutlak lebih baik. Untuk stamina dan terapi, pilih jahe merah. Untuk konsumsi harian dan perawatan umum, jahe biasa sudah cukup. Produk Minuman Jahe Merah Ramudjitu menggunakan jahe merah pilihan untuk manfaat maksimal." },
    ],
    related: ["manfaat-kunyit-untuk-kesehatan", "tips-jaga-stamina-alami"],
  },
  "tips-jaga-stamina-alami": {
    title: "5 Cara Menjaga Stamina Secara Alami Tanpa Efek Samping",
    tag: "Tips", emoji: "⚡", date: "10 Mei 2026", readTime: "6 menit",
    description: "Stamina prima tidak harus mengandalkan suplemen kimia. Ada cara alami yang lebih aman dan berkelanjutan untuk menjaga energi.",
    content: [
      { body: "Banyak orang mencari cara cepat meningkatkan stamina dengan suplemen kimia atau minuman berenergi. Padahal, ada metode alami yang lebih aman, berkelanjutan, dan tanpa efek samping berbahaya." },
      { heading: "1. Konsumsi Herbal Adaptogen", body: "Adaptogen seperti jahe merah, temulawak, dan pasak bumi membantu tubuh beradaptasi terhadap stres fisik dan mental. Konsumsi rutin meningkatkan daya tahan tubuh dari dalam." },
      { heading: "2. Tidur Berkualitas", body: "Tidur 7-8 jam adalah 'suplemen' terbaik. Selama tidur, tubuh memproduksi hormon pertumbuhan dan memulihkan otot. Hindari layar HP 1 jam sebelum tidur." },
      { heading: "3. Hidrasi yang Cukup", body: "Dehidrasi ringan (2%) sudah bisa menurunkan performa fisik hingga 20%. Minum minimal 8 gelas air per hari, tambah 500ml untuk setiap jam aktivitas fisik." },
      { heading: "4. Pola Makan Seimbang", body: "Prioritaskan karbohidrat kompleks (nasi merah, ubi), protein berkualitas, dan lemak sehat. Hindari gula berlebih yang menyebabkan energy crash setelah beberapa jam." },
      { heading: "5. Olahraga Teratur", body: "Paradoksnya, olahraga teratur justru meningkatkan energi jangka panjang. Mulai dari 30 menit jalan kaki per hari, tingkatkan secara bertahap." },
      { heading: "Kombinasi Terbaik", body: "Gabungkan kelima cara di atas dengan konsumsi Ramu Stamina Plus Ramudjitu yang mengandung temulawak dan jahe merah untuk hasil yang optimal dan berkelanjutan." },
    ],
    related: ["jahe-merah-vs-jahe-biasa", "mengenal-temulawak-si-raja-herbal"],
  },
  "mengenal-temulawak-si-raja-herbal": {
    title: "Mengenal Temulawak: Si Raja Herbal dari Nusantara",
    tag: "Herbal", emoji: "🌱", date: "5 Mei 2026", readTime: "5 menit",
    description: "Temulawak sudah digunakan sebagai obat tradisional selama ratusan tahun. Kenali kandungan, manfaat, dan cara terbaik mengonsumsinya.",
    content: [
      { body: "Temulawak (Curcuma xanthorrhiza) adalah tanaman asli Indonesia yang dijuluki 'Raja Herbal Nusantara'. Berbeda dengan kunyit meski masih satu keluarga, temulawak memiliki kandungan dan manfaat yang unik." },
      { heading: "Kandungan Utama", body: "Temulawak kaya akan kurkuminoid, xanthorrhizol (senyawa khas temulawak), minyak atsiri, pati, dan mineral penting. Xanthorrhizol inilah yang membedakannya dari kunyit biasa." },
      { heading: "Manfaat untuk Hati", body: "Temulawak dikenal sebagai hepatoprotektor — pelindung hati. Xanthorrhizol terbukti membantu regenerasi sel hati dan melindunginya dari kerusakan akibat toksin." },
      { heading: "Meningkatkan Nafsu Makan", body: "Tradisi nenek moyang terbukti benar: temulawak memang efektif meningkatkan nafsu makan, terutama pada anak-anak dan orang dalam pemulihan sakit." },
      { heading: "Anti-bakteri dan Anti-jamur", body: "Xanthorrhizol memiliki aktivitas anti-bakteri yang kuat, bahkan terhadap beberapa bakteri yang resisten terhadap antibiotik tertentu." },
      { heading: "Cara Konsumsi Terbaik", body: "Temulawak bisa dikonsumsi sebagai minuman segar, kapsul, atau dalam racikan jamu. Produk Ramu Stamina Plus Ramudjitu menggunakan temulawak segar yang diproses dengan standar BPOM." },
    ],
    related: ["manfaat-kunyit-untuk-kesehatan", "antioksidan-penting-untuk-tubuh"],
  },
  "antioksidan-penting-untuk-tubuh": {
    title: "Mengapa Antioksidan Sangat Penting untuk Tubuh Kita?",
    tag: "Edukasi", emoji: "🍇", date: "1 Mei 2026", readTime: "4 menit",
    description: "Radikal bebas ada di mana-mana. Antioksidan adalah tameng alami tubuh. Pelajari cara mendapatkannya dari bahan herbal.",
    content: [
      { body: "Setiap hari tubuh kita diserang oleh radikal bebas — dari polusi udara, makanan olahan, stres, bahkan sinar UV matahari. Antioksidan adalah senjata alami tubuh untuk melawannya." },
      { heading: "Apa Itu Radikal Bebas?", body: "Radikal bebas adalah molekul tidak stabil dengan elektron yang tidak berpasangan. Mereka 'mencuri' elektron dari sel tubuh, menyebabkan kerusakan yang disebut stres oksidatif." },
      { heading: "Dampak Kekurangan Antioksidan", body: "Stres oksidatif yang berkelanjutan dikaitkan dengan penuaan dini, penyakit jantung, kanker, diabetes, dan gangguan neurodegeneratif seperti Alzheimer." },
      { heading: "Antioksidan dari Herbal", body: "Beberapa tanaman herbal terkaya antioksidan: teh hijau (katekin), anggur merah (resveratrol), kunyit (kurkumin), jahe (gingerol), dan kayu manis (polifenol)." },
      { heading: "Cara Mendapatkan Antioksidan", body: "Konsumsi beragam buah dan sayur berwarna-warni setiap hari. Semakin beragam warnanya, semakin beragam jenis antioksidannya." },
      { heading: "Solusi Praktis", body: "Jika sulit memenuhi kebutuhan antioksidan dari makanan sehari-hari, Antox Herbal Blend Ramudjitu hadir sebagai solusi — mengandung polifenol tinggi dari teh hijau dan grape seed extract." },
    ],
    related: ["manfaat-kunyit-untuk-kesehatan", "rutinitas-pagi-dengan-herbal"],
  },
  "rutinitas-pagi-dengan-herbal": {
    title: "Rutinitas Pagi dengan Herbal untuk Hari yang Lebih Produktif",
    tag: "Tips", emoji: "☀️", date: "25 April 2026", readTime: "3 menit",
    description: "Mulai hari dengan segelas minuman herbal bisa mengubah kualitas hidupmu. Ini rutinitas pagi sehat yang bisa langsung diterapkan.",
    content: [
      { body: "Cara kita memulai pagi sangat menentukan kualitas hari. Menambahkan herbal dalam rutinitas pagi adalah investasi kesehatan yang berbiaya rendah namun berdampak besar." },
      { heading: "05:30 — Bangun & Minum Air Hangat", body: "Segera setelah bangun, minum segelas air hangat dengan perasan lemon. Ini 'membangunkan' sistem pencernaan dan menghidrasi tubuh setelah 7-8 jam tidur." },
      { heading: "06:00 — Minuman Herbal Pagi", body: "Ini adalah waktu terbaik mengonsumsi herbal. Pilih sesuai kebutuhan: kunyit asam untuk detoks, jahe merah untuk kehangatan dan stamina, atau teh herbal untuk ketenangan." },
      { heading: "06:30 — Gerakan Ringan", body: "10-15 menit peregangan atau yoga ringan meningkatkan sirkulasi darah dan memaksimalkan penyerapan senyawa aktif dari herbal yang baru dikonsumsi." },
      { heading: "07:00 — Sarapan Bergizi", body: "Lengkapi dengan sarapan seimbang: protein, serat, dan lemak sehat. Hindari sarapan tinggi gula yang memicu energy crash sebelum siang." },
      { heading: "Konsistensi adalah Kunci", body: "Manfaat herbal tidak instan. Diperlukan konsumsi rutin minimal 2-4 minggu untuk merasakan perbedaan signifikan. Mulai hari ini, jadikan herbal bagian dari rutinmu." },
    ],
    related: ["tips-jaga-stamina-alami", "antioksidan-penting-untuk-tubuh"],
  },
};

const allArtikel = Object.entries(artikelData).map(([slug, data]) => ({ slug, ...data }));

// ── METADATA DINAMIS ──────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artikel = artikelData[slug];
  if (!artikel) return { title: "Artikel tidak ditemukan | Ramudjitu" };
  return {
    title: `${artikel.title} | Ramudjitu`,
    description: artikel.description,
    openGraph: {
      title: artikel.title,
      description: artikel.description,
      type: "article",
      publishedTime: artikel.date,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(artikelData).map((slug) => ({ slug }));
}

// ── CSS ───────────────────────────────────────────────
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
    --amber: #D4860F;
    --text-dark: #1E1208;
    --text-mid: #5A4030;
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: var(--cream-light); color: var(--text-dark); }

  .det-header {
    background: var(--brown-dark); padding: 0 2.5rem; height: 64px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
  }
  .det-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
  .det-logo-mark { width: 36px; height: 36px; background: var(--green-mid); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .det-logo-mark svg { width: 18px; height: 18px; fill: none; stroke: #fff; stroke-width: 1.8; }
  .det-logo-name { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--cream); }
  .det-nav-back { display: flex; align-items: center; gap: 6px; color: rgba(245,236,215,0.6); font-size: 13px; text-decoration: none; transition: color 0.2s; }
  .det-nav-back:hover { color: var(--cream); }

  .det-hero { background: var(--brown-dark); padding: 3.5rem 2.5rem 2.5rem; }
  .det-hero-inner { max-width: 720px; margin: 0 auto; }
  .det-tag { display: inline-block; background: rgba(122,158,78,0.15); border: 1px solid rgba(122,158,78,0.3); color: var(--green-light); font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 1.25rem; }
  .det-title { font-family: 'Playfair Display', serif; font-size: 32px; color: var(--cream); line-height: 1.3; margin-bottom: 1rem; }
  .det-meta { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
  .det-meta span { font-size: 12px; color: rgba(245,236,215,0.5); }
  .det-meta span strong { color: rgba(245,236,215,0.8); }

  .det-emoji-banner { background: var(--green-pale); height: 160px; display: flex; align-items: center; justify-content: center; font-size: 80px; }

  .det-content { max-width: 720px; margin: 0 auto; padding: 3rem 2.5rem 2rem; }
  .det-content p { font-size: 15px; font-weight: 300; color: var(--text-mid); line-height: 1.9; margin-bottom: 1.5rem; }
  .det-content h2 { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--text-dark); margin-bottom: 0.75rem; margin-top: 2rem; }

  .det-cta { background: var(--green-pale); border: 1px solid var(--green-bright); border-radius: 16px; padding: 1.5rem 2rem; margin: 2rem 0; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  .det-cta-text { font-size: 14px; font-weight: 500; color: var(--green-deep); }
  .det-cta-sub { font-size: 12px; font-weight: 300; color: var(--text-muted); margin-top: 4px; }
  .det-cta-btn { background: var(--green-mid); color: #fff; font-size: 13px; font-weight: 500; padding: 10px 22px; border-radius: 24px; text-decoration: none; white-space: nowrap; transition: background 0.2s; font-family: 'DM Sans', sans-serif; }
  .det-cta-btn:hover { background: var(--green-deep); }

  .det-related { max-width: 720px; margin: 0 auto; padding: 0 2.5rem 4rem; }
  .det-related-title { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--text-dark); margin-bottom: 1.25rem; }
  .det-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  .det-related-card { background: #fff; border: 1px solid var(--cream-mid); border-radius: 14px; overflow: hidden; text-decoration: none; display: flex; align-items: center; gap: 14px; padding: 14px; transition: all 0.2s; }
  .det-related-card:hover { border-color: var(--green-bright); transform: translateY(-2px); }
  .det-related-emoji { font-size: 32px; flex-shrink: 0; }
  .det-related-info {}
  .det-related-tag { font-size: 10px; font-weight: 500; color: var(--green-mid); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .det-related-ttl { font-size: 13px; font-weight: 500; color: var(--text-dark); line-height: 1.4; }

  .det-footer { background: var(--brown-dark); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem; text-align: center; }
  .det-footer p { font-size: 12px; color: rgba(245,236,215,0.4); }
  .det-footer a { color: var(--green-light); text-decoration: none; }

  @media (max-width: 640px) {
    .det-header { padding: 0 1.25rem; }
    .det-hero { padding: 2.5rem 1.25rem 2rem; }
    .det-title { font-size: 24px; }
    .det-content { padding: 2rem 1.25rem 1.5rem; }
    .det-related { padding: 0 1.25rem 3rem; }
    .det-cta { flex-direction: column; }
  }
`;

// ── PAGE ──────────────────────────────────────────────
export default async function ArtikelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artikel = artikelData[slug];

  if (!artikel) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: DETAIL_CSS }} />
        <header className="det-header">
          <Link className="det-logo" href="/"><div className="det-logo-mark"><svg viewBox="0 0 24 24"><path d="M12 2C8 6 4 9 4 14a8 8 0 0016 0c0-5-4-8-8-12z" /></svg></div><span className="det-logo-name">Ramudjitu</span></Link>
          <Link href="/blog" className="det-nav-back">← Kembali ke Blog</Link>
        </header>
        <div style={{ textAlign: "center", padding: "6rem 2rem" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🌿</div>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 28, marginBottom: 12 }}>Artikel tidak ditemukan</h1>
          <Link href="/blog" style={{ color: "#4A7A25" }}>← Lihat semua artikel</Link>
        </div>
      </>
    );
  }

  const relatedArtikel = artikel.related
    .map((s) => allArtikel.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DETAIL_CSS }} />

      {/* HEADER */}
      <header className="det-header">
        <Link className="ramu-logo" href="/">
          <img src="/logo.png" alt="Ramudjitu" style={{height: "38px", width: "auto"}} />
        </Link>
        <Link href="/blog" className="det-nav-back">← Kembali ke Blog</Link>
      </header>

      {/* HERO */}
      <section className="det-hero">
        <div className="det-hero-inner">
          <span className="det-tag">{artikel.tag}</span>
          <h1 className="det-title">{artikel.title}</h1>
          <div className="det-meta">
            <span><strong>{artikel.date}</strong></span>
            <span>⏱ {artikel.readTime} baca</span>
          </div>
        </div>
      </section>

      {/* EMOJI BANNER */}
      <div className="det-emoji-banner">{artikel.emoji}</div>

      {/* KONTEN */}
      <article className="det-content">
        {artikel.content.map((section, i) => (
          <div key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            <p>{section.body}</p>
          </div>
        ))}

        {/* CTA */}
        <div className="det-cta">
          <div>
            <div className="det-cta-text">🌿 Coba produk herbal Ramudjitu</div>
            <div className="det-cta-sub">Diformulasikan dari bahan alami pilihan, terdaftar BPOM</div>
          </div>
          <Link href="/#produk" className="det-cta-btn">Lihat Produk →</Link>
        </div>
      </article>

      {/* ARTIKEL TERKAIT */}
      {relatedArtikel.length > 0 && (
        <section className="det-related">
          <h2 className="det-related-title">Artikel Terkait</h2>
          <div className="det-related-grid">
            {relatedArtikel.map((rel) => rel && (
              <Link href={`/blog/${rel.slug}`} className="det-related-card" key={rel.slug}>
                <span className="det-related-emoji">{rel.emoji}</span>
                <div className="det-related-info">
                  <div className="det-related-tag">{rel.tag}</div>
                  <div className="det-related-ttl">{rel.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="det-footer">
        <p>© 2026 <a href="/">Ramudjitu</a> · <a href="/blog">Blog</a> · Herbal pilihan, kesehatan terjaga</p>
      </footer>
    </>
  );
}
