import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | Ramudjitu",
  description: "Informasi kontak, jam operasional, dan cara menghubungi tim RamuDjitu.",
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
    --text-dark: #1E1208;
    --text-mid: #5A4030;
    --text-muted: #8A7060;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .hk-outer {
    background: #d6cfc4;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .hk-wrapper {
    width: 100%;
    max-width: 690px;
    background: var(--cream-light);
    min-height: auto;
    box-shadow: 0 0 60px rgba(0,0,0,0.2);
    font-family: 'DM Sans', sans-serif;
    color: var(--text-dark);
  }

  .hk-header {
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

  .hk-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .hk-logo img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .hk-back {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
  }
  .hk-back:hover { color: var(--green-mid); }

  .hk-hero {
    background: linear-gradient(135deg, #2C1F0E 0%, #3D2E10 60%, #2D4A1A 100%);
    padding: 2rem 1.25rem 1.5rem;
  }

  .hk-eyebrow {
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

  .hk-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--cream);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  .hk-hero-sub {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,236,215,0.6);
    line-height: 1.8;
  }

  .hk-main {
    padding: 2rem 1.25rem;
  }

  /* WhatsApp CTA card */
  .hk-wa-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: var(--green-pale);
    border: 1px solid var(--green-bright);
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
    text-decoration: none;
  }

  .hk-wa-left {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .hk-wa-icon {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--green-mid);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hk-wa-icon svg { width: 22px; height: 22px; }

  .hk-wa-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--green-deep);
  }

  .hk-wa-sub {
    font-size: 12px;
    font-weight: 300;
    color: var(--text-mid);
    margin-top: 2px;
  }

  .hk-wa-arrow {
    color: var(--green-mid);
    font-size: 18px;
  }

  /* Contact info cards */
  .hk-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .hk-info-card {
    background: var(--cream-light);
    border: 1px solid var(--cream-mid);
    border-radius: 12px;
    padding: 1rem;
  }

  .hk-info-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }

  .hk-info-value {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dark);
    word-break: break-word;
  }

  .hk-info-value a {
    color: var(--text-dark);
    text-decoration: none;
  }

  .hk-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--cream-mid);
  }

  .hk-section:last-child {
    border-bottom: none;
  }

  .hk-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 0.9rem;
  }

  .hk-table {
    width: 100%;
    border-collapse: collapse;
  }

  .hk-table tr {
    border-bottom: 1px solid var(--cream-mid);
  }
  .hk-table tr:last-child {
    border-bottom: none;
  }

  .hk-table td {
    padding: 0.6rem 0;
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
  }

  .hk-table td:first-child {
    font-weight: 500;
    color: var(--text-dark);
    width: 45%;
  }

  .hk-note-line {
    font-size: 12px;
    font-weight: 300;
    color: var(--text-muted);
    line-height: 1.8;
    margin-top: 1rem;
    font-style: italic;
  }

  .hk-response-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.7rem 0;
    border-bottom: 1px solid var(--cream-mid);
    font-size: 13px;
  }
  .hk-response-item:last-of-type {
    border-bottom: none;
  }

  .hk-response-channel {
    font-weight: 500;
    color: var(--text-dark);
  }

  .hk-response-time {
    font-weight: 300;
    color: var(--green-mid);
    text-align: right;
  }

  .hk-section p {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    margin-bottom: 0.75rem;
  }
  .hk-section p:last-child { margin-bottom: 0; }

  .hk-section ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
  }

  .hk-section ul li {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-mid);
    line-height: 1.9;
    padding-left: 1.25rem;
    position: relative;
    margin-bottom: 0.4rem;
  }

  .hk-section ul li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--green-mid);
    font-size: 11px;
  }

  .hk-section ul li strong {
    color: var(--text-dark);
    font-weight: 500;
  }

  .hk-note {
    font-size: 11px;
    font-weight: 300;
    font-style: italic;
    color: var(--text-muted);
    line-height: 1.8;
    margin-top: 1.5rem;
  }

  .hk-footer {
    border-top: 1px solid var(--cream-mid);
    padding: 1.25rem;
    text-align: center;
  }

  .hk-footer-copy {
    font-size: 10px;
    color: var(--text-muted);
  }
`;

export default function HubungiKamiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="hk-outer">
        <div className="hk-wrapper">

          {/* HEADER */}
          <header className="hk-header">
            <Link className="hk-logo" href="/">
              <img src="https://res.cloudinary.com/dzg25zm9i/image/upload/v1781697094/RAMUDJITU_sf1t8w.png" alt="Ramudjitu" style={{height:"56px", width:"56px", borderRadius:"50%", objectFit:"cover"}} />
              <span style={{fontFamily:"'Playfair Display', serif", fontSize:"16px", fontWeight:"700", letterSpacing:"0.3px"}}>
                <span style={{color:"#2e3a1f"}}>Ramu</span><span style={{color:"#4a3218"}}>Djitu</span>
              </span>
            </Link>
            <Link href="/#produk" className="hk-back">← Kembali ke Toko</Link>
          </header>

          {/* HERO */}
          <section className="hk-hero">
            <div className="hk-eyebrow">Bantuan</div>
            <h1 className="hk-hero-title">Hubungi Kami</h1>
            <p className="hk-hero-sub">RamuDjitu.id siap membantu Anda. Jangan ragu untuk menghubungi kami jika ada pertanyaan, kendala, atau masukan terkait produk dan layanan kami.</p>
          </section>

          {/* MAIN */}
          <main className="hk-main">

            {/* WA CTA */}
            <a href="https://wa.me/6285126079197" target="_blank" rel="noopener noreferrer" className="hk-wa-card">
              <div className="hk-wa-left">
                <div className="hk-wa-icon">
                  <svg viewBox="0 0 24 24" fill="white"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.11.11-1.79-.11a16.5 16.5 0 0 1-1.66-.62c-2.92-1.26-4.83-4.2-4.98-4.4-.15-.2-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.44c.26-.29.57-.36.76-.36h.55c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.15.11.32.02.51-.09.19-.13.31-.26.48-.13.16-.28.36-.4.48-.13.13-.27.28-.12.55.15.27.68 1.12 1.46 1.82 1 .89 1.85 1.17 2.12 1.3.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.2.5.31.06.11.06.65-.18 1.33Z"/></svg>
                </div>
                <div>
                  <div className="hk-wa-title">Chat via WhatsApp</div>
                  <div className="hk-wa-sub">0851-2607-9197 · Respon paling cepat</div>
                </div>
              </div>
              <span className="hk-wa-arrow">→</span>
            </a>

            {/* INFO GRID */}
            <div className="hk-info-grid">
              <div className="hk-info-card">
                <div className="hk-info-label">Email</div>
                <div className="hk-info-value">
                  <a href="mailto:ramudjitu.id@gmail.com">ramudjitu.id@gmail.com</a>
                </div>
              </div>
              <div className="hk-info-card">
                <div className="hk-info-label">Telepon / WhatsApp</div>
                <div className="hk-info-value">
                  <a href="https://wa.me/6285126079197">0851-2607-9197</a>
                </div>
              </div>
            </div>

            {/* JAM OPERASIONAL */}
            <div className="hk-section">
              <h2 className="hk-section-title">Jam Operasional</h2>
              <table className="hk-table">
                <tbody>
                  <tr>
                    <td>Senin – Jumat</td>
                    <td>09:00 – 17:00 WIB</td>
                  </tr>
                  <tr>
                    <td>Sabtu</td>
                    <td>09:00 – 12:00 WIB (terbatas)</td>
                  </tr>
                  <tr>
                    <td>Minggu & Hari Libur Nasional</td>
                    <td>Tutup</td>
                  </tr>
                </tbody>
              </table>
              <p className="hk-note-line">Pesan yang diterima di luar jam operasional akan direspon pada hari kerja berikutnya.</p>
            </div>

            {/* WAKTU RESPON */}
            <div className="hk-section">
              <h2 className="hk-section-title">Waktu Respon</h2>
              <div className="hk-response-item">
                <span className="hk-response-channel">WhatsApp</span>
                <span className="hk-response-time">Beberapa jam pada jam operasional</span>
              </div>
              <div className="hk-response-item">
                <span className="hk-response-channel">Email</span>
                <span className="hk-response-time">Maksimal 1x24 jam pada hari kerja</span>
              </div>
              <p className="hk-note-line">Untuk pertanyaan mendesak terkait pesanan, kami sarankan menghubungi melalui WhatsApp.</p>
            </div>

            {/* TIPS */}
            <div className="hk-section">
              <h2 className="hk-section-title">Tips Menghubungi Kami</h2>
              <p>Agar kami dapat membantu Anda dengan lebih cepat dan tepat:</p>
              <ul>
                <li><strong>Sertakan nomor pesanan</strong> jika pertanyaan Anda terkait transaksi</li>
                <li><strong>Lampirkan foto atau bukti</strong> jika ada keluhan mengenai kondisi produk</li>
                <li>Jelaskan kronologi secara singkat agar tim kami bisa memahami dan menindaklanjuti dengan cepat</li>
              </ul>
            </div>

            {/* PERAN PLATFORM */}
            <div className="hk-section">
              <h2 className="hk-section-title">Peran Platform</h2>
              <p>RamuDjitu.id menggunakan Scalev sebagai penyedia teknologi untuk pembuatan dan pengelolaan toko online. Seluruh komunikasi, layanan pelanggan, dan penyelesaian masalah ditangani langsung oleh ramudjitu.id.</p>
              <p className="hk-note-line">Terakhir diperbarui: Maret 2026</p>
              <p className="hk-note">
                Halaman ini dibuat menggunakan platform Scalev sebagai penyedia teknologi. Seluruh aktivitas jual beli dan operasional toko merupakan tanggung jawab ramudjitu.id.
              </p>
            </div>

          </main>

          {/* FOOTER */}
          <footer className="hk-footer">
            <div className="hk-footer-copy">© 2026 Ramudjitu · Semua hak dilindungi</div>
          </footer>

        </div>
      </div>
    </>
  );
}
