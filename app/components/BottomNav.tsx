"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const waNumber = "6285126079197"; // Ganti dengan nomor WA admin

const CSS = `
  :root {
    --brown-dark: #1E1208;
    --cream-light: #FAF7F2;
    --cream-mid: #EDE0C8;
    --green-deep: #2D4A1A;
  }
    
  .ramu-bottom-nav {
    position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 100%; max-width: 690px; z-index: 100;
    background: var(--cream-light); border-top: 1px solid var(--cream-mid);
    padding: 8px 0 10px;
    box-shadow: 0 -4px 16px rgba(30,18,8,0.08);
  }

  .ramu-bottom-nav-inner { display: flex; justify-content: space-around; align-items: center; }
  .ramu-bottom-nav-item { display: flex; flex-direction: column; align-items: center; gap: 3px; text-decoration: none; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; flex: 1; padding: 4px 0; }
  .ramu-bottom-nav-item svg { width: 20px; height: 20px; fill: none; stroke: var(--green-deep); stroke-width: 1.8; transition: stroke 0.2s; }
  .ramu-bottom-nav-item span { font-size: 10px; color: var(--green-deep); transition: color 0.2s; }
  .ramu-bottom-nav-item:hover svg { stroke: var(--brown-dark); }
  .ramu-bottom-nav-item:hover span { color: var(--brown-dark); }
  .ramu-bottom-nav-wa svg { fill: #25D366 !important; stroke: none !important; }
  .ramu-bottom-nav-wa span { color: #25D366 !important; }
  .ramu-cart-badge { position: absolute; top: -10px; right: -18px; background: #A2B06D; color: #FFFFFF !important; font-size: 11px; font-weight: 700; min-width: 22px; height: 22px; border-radius: 999px; display: flex; align-items: center; justify-content: center; padding: 0 5px; border: 2px solid var(--cream-light); z-index: 5; }
`;

interface BottomNavProps {
  jumlahKeranjang?: number;
  activeTab?: "beranda" | "produk" | "keranjang" | "chat";
}

export default function BottomNav({ jumlahKeranjang: jumlahProp = 0, activeTab = "beranda" }: BottomNavProps) {
  const router = useRouter();
  const [jumlahKeranjang, setJumlahKeranjang] = useState(jumlahProp);

  useEffect(() => {
    const updateBadge = () => {
      const saved = localStorage.getItem('ramudjitu-cart-count');
      setJumlahKeranjang(saved ? parseInt(saved) : 0);
    };
    updateBadge();
    window.addEventListener('focus', updateBadge);
    window.addEventListener('storage', updateBadge);
    return () => {
      window.removeEventListener('focus', updateBadge);
      window.removeEventListener('storage', updateBadge);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <nav className="ramu-bottom-nav">
        <div className="ramu-bottom-nav-inner">

          {/* BERANDA */}
          <button
            className={`ramu-bottom-nav-item${activeTab === "beranda" ? " active" : ""}`}
            onClick={() => router.push("/")}
          >
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Beranda</span>
          </button>

          {/* PRODUK */}
          <button
            className={`ramu-bottom-nav-item${activeTab === "produk" ? " active" : ""}`}
            onClick={() => router.push("/#produk")}
          >
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            <span>Produk</span>
          </button>

          {/* KERANJANG */}
          <button
            className={`ramu-bottom-nav-item${activeTab === "keranjang" ? " active" : ""}`}
            onClick={() => {}}
          >
            <span style={{position:"relative", display:"inline-block"}}>
              <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
              {jumlahKeranjang > 0 && <span className="ramu-cart-badge">{jumlahKeranjang}</span>}
            </span>
            <span>Keranjang</span>
          </button>

          {/* WA CHAT */}
          <button
            className="ramu-bottom-nav-item ramu-bottom-nav-wa"
            onClick={() => window.open(`https://wa.me/${waNumber}`, "_blank")}
          >
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>Chat</span>
          </button>

        </div>
      </nav>
    </>
  );
}
