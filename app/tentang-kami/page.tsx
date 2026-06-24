import BottomNav from "../components/BottomNav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Ramudjitu",
  description: "Kenali lebih dalam tentang RamuDjitu — semangat, nilai, dan komitmen kami.",
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  :root { --brown-dark:#1E1208; --cream:#F5ECD7; --cream-light:#FAF7F2; --cream-mid:#EDE0C8; --green-deep:#2D4A1A; --green-mid:#4A7A25; --green-bright:#7A9E4E; --green-light:#C5DC8E; --green-pale:#EFF5E6; --text-dark:#1E1208; --text-muted:#8A7060; }
  * { box-sizing:border-box; margin:0; padding:0; }
  .t-outer { background:#d6cfc4; min-height:100vh; display:flex; justify-content:center; align-items:flex-start; }
  .t-wrapper { width:100%; max-width:660px; background:var(--cream-light); min-height:100vh; box-shadow:0 0 60px rgba(0,0,0,0.2); font-family:'DM Sans',sans-serif; color:var(--text-dark); }

  /* HEADER sama dengan home */
  .t-header { background:var(--cream-light); padding:0 1.25rem; height:68px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; border-bottom:1px solid var(--cream-mid); box-shadow:0 2px 8px rgba(30,18,8,0.06); }
  .t-logo { display:flex; align-items:center; gap:10px; text-decoration:none; }
  .t-logo img { height:44px; width:44px; border-radius:50%; object-fit:cover; }
  .t-back { display:flex; align-items:center; gap:6px; color:var(--text-muted); font-size:13px; text-decoration:none; transition:color 0.2s; }
  .t-back:hover { color:var(--green-mid); }

  /* HERO sama dengan home ada gradasi green */
  .t-hero { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); padding:2.5rem 1.25rem; text-align:left; position:relative; overflow:hidden; }
  .t-hero::before { content:''; position:absolute; top:-60px; right:-60px; width:280px; height:280px; background:radial-gradient(circle, rgba(74,122,37,0.18) 0%, transparent 70%); pointer-events:none; }
  .t-hero::after { content:''; position:absolute; bottom:-40px; left:-40px; width:200px; height:200px; background:radial-gradient(circle, rgba(74,122,37,0.12) 0%, transparent 70%); pointer-events:none; }
  .t-eyebrow { display:inline-flex; align-items:center; background:rgba(122,158,78,0.15); border:1px solid rgba(122,158,78,0.3); color:var(--green-light); font-size:10px; font-weight:500; letter-spacing:1.5px; text-transform:uppercase; padding:4px 12px; border-radius:20px; margin-bottom:1rem; position:relative; z-index:1; }
  .t-hero-title { font-family:'Playfair Display',serif; font-size:26px; color:var(--cream); line-height:1.3; margin-bottom:0.75rem; position:relative; z-index:1; }
  .t-hero-title em { font-style:italic; color:var(--green-light); }
  .t-hero-sub { font-size:13px; font-weight:300; color:rgba(245,236,215,0.6); line-height:1.8; position:relative; z-index:1; }

  /* MAIN */
  .t-main { padding:2rem 1.25rem 5rem; }
  .t-label { font-size:10px; font-weight:500; letter-spacing:2px; text-transform:uppercase; color:var(--green-mid); margin-bottom:0.75rem; }
  .t-intro { font-size:13px; font-weight:300; color:var(--text-dark); line-height:1.9; text-align:left; margin-bottom:2.5rem; padding-bottom:2rem; border-bottom:1px solid var(--cream-mid); }
  .t-k-title { font-family:'Playfair Display',serif; font-size:20px; color:var(--text-dark); margin-bottom:1.25rem; }
  .t-k-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:2.5rem; }
  .t-k-card { background:#fff; border:1px solid var(--cream-mid); border-radius:14px; padding:1.25rem 1rem; transition:all 0.2s; }
  .t-k-card:hover { border-color:var(--green-bright); box-shadow:0 4px 12px rgba(74,122,37,0.08); transform:translateY(-2px); }
  .t-k-card h4 { font-family:'Playfair Display',serif; font-size:13px; font-weight:600; color:var(--text-dark); margin-bottom:0.4rem; }
  .t-k-card p { font-size:11px; font-weight:300; color:var(--text-muted); line-height:1.7; }
  .t-visi { background:var(--green-pale); border-radius:14px; padding:1.5rem 1.25rem; margin-bottom:1rem; }
  .t-visi-label { font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--green-mid); margin-bottom:0.6rem; }
  .t-visi-text { font-family:'Playfair Display',serif; font-size:15px; color:var(--text-dark); line-height:1.6; font-style:italic; }

  /* CTA gradasi green */
  .t-cta { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-radius:14px; padding:1.5rem 1.25rem; text-align:center; margin-top:2rem; position:relative; overflow:hidden; }
  .t-cta p { font-size:13px; font-weight:300; color:rgba(245,236,215,0.9); line-height:1.7; margin-bottom:1rem; position:relative; z-index:1; }
  .t-cta-btn {display:inline-flex; align-items:center; gap:8px; background:var(--green-mid); color:#fff; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; padding:11px 24px; border-radius:32px; text-decoration:none; transition:all 0.2s; position:relative; z-index:1; }
  .t-cta-btn:hover { background: var(--green-deep); }

  /* FOOTER sama dengan home */
  .t-footer { background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%); border-top: 1px solid rgba(245,236,215,0.08); padding: 2rem 1.25rem 5rem; }
  .t-footer-logo { font-family:'Playfair Display',serif; font-size:18px; color:var(--cream); margin-bottom:4px; }
  .t-footer-tagline { font-size:11px; font-weight:300; color:rgba(245,236,215,0.4); margin-bottom:1.25rem; }
  .t-footer-sosmed { display:flex; gap:10px; margin-bottom:1.5rem; }
  .t-sosmed-btn { width:34px; height:34px; border-radius:50%; background:rgba(245,236,215,0.08); border:1px solid rgba(245,236,215,0.15); display:flex; align-items:center; justify-content:center; text-decoration:none; transition:all 0.2s; }
  .t-sosmed-btn:hover { background:var(--green-mid); border-color:var(--green-mid); }
  .t-sosmed-btn svg { width:15px; height:15px; fill:rgba(245,236,215,0.7); }
  .t-sosmed-fb { background: #1877F2 !important; border-color: #1877F2 !important; }
  .t-sosmed-ig { background: #E1306C !important; border-color: #E1306C !important; }
  .t-sosmed-yt { background: #FF0000 !important; border-color: #FF0000 !important; }
  .t-sosmed-tt { background: #010101 !important; border-color: #333 !important; }
  .t-footer-links { display:flex; flex-wrap:wrap; gap:8px 20px; margin-bottom:1.5rem; }
  .t-footer-links a { font-size:11px; color:rgba(245,236,215,0.4); text-decoration:none; transition:color 0.2s; }
  .t-footer-links a:hover { color:var(--green-light); }
  .t-footer-copy { font-size:10px; color:rgba(245,236,215,0.25); text-align:center; padding-top:1rem; border-top:1px solid rgba(245,236,215,0.08); }
`;

export default function TentangKamiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="t-outer">
        <div className="t-wrapper">

          {/* HEADER */}
          <header className="t-header">
            <Link className="t-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}><span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span></span>
            </Link>
                 
            <Link href="/" className="t-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="t-hero">
            <div className="t-eyebrow">Tentang Kami</div>
            <h1 className="t-hero-title">Mengapa <em>RamuDjitu</em></h1>
            <p className="t-hero-sub">Semangat, nilai, dan komitmen kami dalam menghadirkan produk health & wellness terpercaya.</p>
          </section>

          <main className="t-main">

            <div className="t-label">Latar Belakang</div>
            <p className="t-intro">
              Di tengah banyaknya pilihan produk kesehatan dan wellness, memilih yang tepat tidak selalu mudah.
              RamuDjitu menghadirkan produk health & wellness pilihan dari berbagai brand terpercaya yang memiliki
              standar legalitas dan kualitas yang jelas. Bagi kami, kesehatan bukan sekadar tentang banyaknya pilihan,
              tetapi tentang menemukan yang tepat dan memberikan manfaat yang nyata. Itulah semangat yang menjadi
              dasar hadirnya RamuDjitu.
            </p>

            <div className="t-k-title">Keunggulan Kami</div>
            <div className="t-k-grid">
              {[
                { title: "Produk Pilihan", desc: "Kami menghadirkan produk yang dipilih dengan mempertimbangkan kualitas dan kepercayaan." },
                { title: "Brand Terpercaya", desc: "Berbagai pilihan dari brand yang memiliki komitmen terhadap kualitas dan kepuasan pelanggan." },
                { title: "Legal & Terdaftar", desc: "Kami mengutamakan produk yang memiliki legalitas dan standar yang jelas." },
                { title: "Manfaat yang Nyata", desc: "Kami percaya setiap pilihan kesehatan seharusnya memberikan nilai dan manfaat yang dapat dirasakan sehari-hari." },
              ].map((item, i) => (
                <div className="t-k-card" key={i}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="t-visi">
              <div className="t-visi-label">Visi Kami</div>
              <p className="t-visi-text">"Menjadi mitra terpercaya dalam perjalanan kesehatan setiap keluarga Indonesia melalui produk pilihan yang nyata manfaatnya."</p>
            </div>

            <div className="t-cta">
              <p>Siap memulai perjalanan hidup sehat bersama RamuDjitu?</p>
              <Link href="/" className="t-cta-btn">Lihat Produk Kami →</Link>
            </div>

          </main>

          {/* FOOTER */}
          <footer className="t-footer">
            <div className="t-footer-logo"><span style={{fontFamily:"'Playfair Display', serif", fontWeight:"700"}}><span style={{color:"#C5DC8E"}}>Ramu</span><span style={{color:"#F5ECD7"}}>Djitu</span></span></div>
            <div className="t-footer-tagline">Herbal pilihan, kesehatan terjaga</div>
            <div className="t-footer-sosmed">
              <a href="https://facebook.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="t-sosmed-btn t-sosmed-fb">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/ramudjitu" target="_blank" rel="noopener noreferrer" className="t-sosmed-btn t-sosmed-ig">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="t-sosmed-btn t-sosmed-yt">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style={{fill:"var(--brown-dark)"}}/></svg>
              </a>
              <a href="https://tiktok.com/@ramudjitu" target="_blank" rel="noopener noreferrer" className="t-sosmed-btn t-sosmed-tt">
                <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
            </div>
            <div className="t-footer-links">
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Kebijakan Pengembalian</a>
              <a href="#">Hubungi Kami</a>
              <a href="#">FAQ</a>
            </div>
            <div className="t-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
      <BottomNav activeTab="beranda" />
    </>
  );
}
