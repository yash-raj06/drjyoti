import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { services } from '@/lib/site-data';

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1>Services offered by the clinic</h1>
            <p>Each service can be expanded into its own dedicated local SEO page with detailed treatment information.</p>
          </div>
        </section>
        <section className="section">
          <div className="container cards-grid">
            {services.map((service) => (
              <article key={service.slug} className="card service-card">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="btn btn-secondary" style={{ marginTop: 14 }}>Know more</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
