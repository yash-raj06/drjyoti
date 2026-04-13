"use client";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav" style={{ display: 'block' }}>
      <button type="button" className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={18} /> : <Menu size={18} />}
        <span>Menu</span>
      </button>
      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
        <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </div>
  );
}
