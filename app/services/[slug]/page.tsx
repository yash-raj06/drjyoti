import { notFound } from 'next/navigation';
import { PageShell } from '@/components/page-shell';
import { services } from '@/lib/site-data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return notFound();

  return (
    <PageShell>
      <main>
        <section className="page-hero"><div className="container"><p className="eyebrow">Service detail</p><h1>{service.title}</h1><p>{service.summary}</p></div></section>
        <section className="section"><div className="container grid-two"><div className="card card-pad"><h2>Overview</h2><p>{service.details}</p></div><div className="card card-pad soft"><h2>What to add here</h2><ul className="bullet-list"><li>Symptoms and conditions covered.</li><li>Who should book this treatment.</li><li>Expected outcomes and care process.</li><li>Frequently asked questions for this service.</li></ul></div></div></section>
      </main>
    </PageShell>
  );
}
