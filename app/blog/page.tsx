import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/page-shell';

const posts = [
  ['When should you start physiotherapy for back pain?', 'Local educational article idea for early pain management and assessment.'],
  ['How posture affects neck pain in desk workers', 'Useful topic for Bhopal professionals and students.'],
  ['What to expect in your first physiotherapy session', 'Reduces fear for first-time patients and improves conversions.']
];

export default function BlogPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Blog</p><h1>Educational content for patients</h1><p>Blog content improves trust and helps the clinic rank for condition-based searches over time.</p></div></section>
        <section className="section alt"><div className="container cards-grid">{posts.map(([title, text]) => (<article key={title} className="card blog-card"><h3>{title}</h3><p>{text}</p><Link href="/contact" className="btn btn-secondary" style={{ marginTop: 14 }}>Ask about this <ArrowRight size={16} /></Link></article>))}</div></section>
      </main>
    </PageShell>
  );
}