import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
  MapPin,
  Star,
  ClipboardList,
  Activity,
  ThumbsUp,
  Award,
  GraduationCap,
  BriefcaseMedical
} from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';
import { services, site } from '@/lib/site-data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: site.name,
  url: site.domain,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No 33, Nirmal Palace, Infront Of Tulsi Vihar, Awadhpuri',
    addressLocality: 'Bhopal',
    postalCode: '462022',
    addressCountry: 'IN'
  },
  openingHours: ['Mo-Sa 10:00-13:00', 'Mo-Sa 17:00-20:00', 'Su 10:00-13:00'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: site.rating, reviewCount: site.reviewCount }
};

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="hero">
          <div className="container hero-grid">
            <div>
              {/* <p className="eyebrow">{site.area}</p> */}
              <h2>Advanced Physiotherapy & Wellness Tailored to You.</h2>
              <p className="lead">From chronic pain relief and posture correction to guided weight management. Experience expert, patient-first care designed to treat the root cause, not just the symptoms.</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">Book an appointment</Link>
                <Link href="/services" className="btn btn-secondary">Explore services</Link>
              </div>
              <ul className="quick-points">
                <li><Star size={18} /> {site.rating} rating with {site.reviewCount} public ratings</li>
                <li><MapPin size={18} /> {site.address}</li>
                <li><Clock3 size={18} /> Open throughout the week</li>
              </ul>
            </div>
            <div className="card hero-media">
              <Image src="/clinic-hero.jpeg" alt="Clinic hero" width={900} height={700} priority />
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <p className="section-tag">Services</p>
            <h2>Focused treatment categories</h2>
            <div className="cards-grid" style={{ marginTop: 24 }}>
              {services.map((service) => (
                <article key={service.slug} className="card service-card">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className="btn btn-secondary" style={{ marginTop: 14 }}>Read more <ArrowRight size={16} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section alt">
          <div className="container">
            <div className="home-credentials">
              <div className="card home-credentials-media">
                <div className="cm-image-wrap">
                  <Image
                    src="/credentials/CM Pic.jpeg"
                    alt="Dr Jyoti Yadav receiving recognition"
                    fill
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className="home-credentials-content">
                <p className="section-tag">About Dr. Jyoti</p>
                <h2>Trusted care with proper training and years of experience.</h2>
                <p className="section-intro" style={{ margin: 0, maxWidth: '56ch' }}>
                  Dr. Jyoti Yadav has a physiotherapy degree, hospital training, and certificates
                  that show her experience and dedication.
                </p>

                <div className="home-credentials-list">
                  <article className="card credential-mini-card">
                    <div className="credential-mini-icon">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3>Gold Medalist</h3>
                      <p>BPT - Top rank in physiotherapy degree.</p>
                    </div>
                  </article>

                  <article className="card credential-mini-card">
                    <div className="credential-mini-icon">
                      <BriefcaseMedical size={20} />
                    </div>
                    <div>
                      <h3>Hospital Training</h3>
                      <p>Worked and trained in well-known hospitals.</p>
                    </div>
                  </article>
                </div>


              </div>


            </div>
            <div className="hero-actions" style={{ marginTop: '16px', justifySelf: 'center' }}>
              <Link href="/about" className="btn btn-secondary">
                View more
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-tag">Our Approach</p>
            <h2>Your journey to recovery</h2>
            <div className="cards-grid" style={{ marginTop: 24 }}>

              <div className="card card-pad">
                <ClipboardList size={32} color="var(--primary)" style={{ marginBottom: 16 }} />
                <h3>1. Detailed Assessment</h3>
                <p style={{ marginTop: 8 }}>We start by understanding the exact root cause of your pain, your daily lifestyle, and your personal recovery goals.</p>
              </div>

              <div className="card card-pad">
                <Activity size={32} color="var(--primary)" style={{ marginBottom: 16 }} />
                <h3>2. Targeted Treatment</h3>
                <p style={{ marginTop: 8 }}>Using advanced physiotherapy techniques, manual therapy, and guided exercises tailored specifically to your body&apos;s needs.</p>
              </div>

              <div className="card card-pad">
                <ThumbsUp size={32} color="var(--primary)" style={{ marginBottom: 16 }} />
                <h3>3. Lasting Mobility</h3>
                <p style={{ marginTop: 8 }}>We don&apos;t just stop at pain relief. We focus on strengthening and posture correction so you stay active and pain-free.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <WhatsAppFloat />
      <StickyMobileCTA />
    </PageShell>
  );
}
