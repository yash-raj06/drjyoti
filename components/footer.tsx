import Link from 'next/link';
import { site } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{site.name}</h3>
          <p>{site.address}</p>
        </div>
        <div className="icon-list">
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Book appointment</Link>
        </div>
      </div>
    </footer>
  );
}
