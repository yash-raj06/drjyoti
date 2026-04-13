import { PageShell } from '@/components/page-shell';

const testimonials = [
  'Add real testimonial with patient permission and first name or initials.',
  'Add recovery-focused quote with condition treated and outcome timeline.',
  'Add a short review that mentions trust, comfort, or visible progress.'
];

export default function TestimonialsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Testimonials</p><h1>Patient trust and social proof</h1><p>Use this page only for real, permission-based testimonials. Avoid exaggeration and keep all claims truthful.</p></div></section>
        <section className="section alt"><div className="container cards-grid">{testimonials.map((item) => (<article key={item} className="card testimonial-card"><h3>Patient feedback</h3><p>{item}</p></article>))}</div></section>
      </main>
    </PageShell>
  );
}