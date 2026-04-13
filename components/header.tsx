/* import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { site } from '@/lib/site-data';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="brand">
            <span>{site.shortName}</span>
            <small>{site.area}</small>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <ThemeToggle />
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { site } from '@/lib/site-data';

export function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <Link href="/" className="brand">
          <Image
            src={site.logo}
            alt="Dr Jyoti Yadav Physiotherapy logo"
            width={473}
            height={527}
            className="brand-logo"
            priority
          />
          <span className="brand-text">
            <strong>{site.name}</strong>
            <small>{site.area}</small>
          </span>
        </Link>

        <nav className="nav" role="navigation">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}