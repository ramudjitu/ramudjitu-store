"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu({ prefix }: { prefix: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .${prefix}-hamburger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 6px;
          }
          @media (min-width: 640px) { .${prefix}-hamburger { display: none; } }
          .${prefix}-hamburger span {
            display: block;
            width: 20px; height: 2px;
            background: var(--brown-dark);
            border-radius: 2px;
            transition: all 0.3s;
          }
          .${prefix}-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
          .${prefix}-hamburger.open span:nth-child(2) { opacity: 0; }
          .${prefix}-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

          .${prefix}-mobile-menu {
            display: none;
            position: fixed;
            top: 68px;
            width: 100%; max-width: 690px;
            left: 50%; transform: translateX(-50%);
            background: var(--cream-light);
            z-index: 99;
            flex-direction: column;
            padding: 1.25rem;
            border-top: 1px solid var(--cream-mid);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          .${prefix}-mobile-menu.open { display: flex; }
          .${prefix}-mobile-menu a {
            color: var(--text-dark);
            font-size: 15px;
            text-decoration: none;
            padding: 0.9rem 0;
            border-bottom: 1px solid var(--cream-mid);
            transition: color 0.2s;
          }
          .${prefix}-mobile-menu a:hover { color: var(--green-mid); }

          @media (min-width: 640px) {
            .${prefix}-nav { display: flex !important; }
          }
          @media (max-width: 639px) {
            .${prefix}-nav { display: none !important; }
          }
        `
      }} />

      <button
        className={`${prefix}-hamburger${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>

      <div className={`${prefix}-mobile-menu${open ? " open" : ""}`}>
        <Link href="/#produk" onClick={() => setOpen(false)}>Produk</Link>
        <Link href="/tentang-kami" onClick={() => setOpen(false)}>Tentang Kami</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
      </div>
    </>
  );
}
