import { PageShell } from '@/components/page-shell';
import { faqs } from '@/lib/site-data';

export default function FaqPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">FAQ</p><h1 style={{ maxWidth: '24ch' }}>Common patient questions</h1><p>This page helps new visitors understand appointments, expectations, and physiotherapy relevance.</p></div></section>
        <section className="section"><div className="container" style={{ display: 'grid', gap: '18px' }}>{faqs.map(([q, a]) => (<article key={q} className="card faq-card"><h3>{q}</h3><p>{a}</p></article>))}</div></section>
      </main>
    </PageShell>
  );
}
