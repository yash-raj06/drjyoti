'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Award,
  GraduationCap,
  BriefcaseMedical,
  BookOpenCheck,
  X,
  ArrowUpRight
} from 'lucide-react';
import { PageShell } from '@/components/page-shell';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Academic Qualification',
    text: 'Bachelor of Physiotherapy with a strong academic foundation and formal university degree in physiotherapy practice.',
  },
  {
    icon: BriefcaseMedical,
    title: 'Clinical Exposure',
    text: 'Hospital-based training, rehabilitation exposure, and hands-on clinical learning across multiple departments and care settings.',
  },
  {
    icon: BookOpenCheck,
    title: 'Workshops & Continued Learning',
    text: 'Regular participation in workshops, CME activities, conferences, and practical learning programs to stay updated with evolving physiotherapy methods.',
  },
  {
    icon: Award,
    title: 'Recognition & Experience',
    text: 'Professional milestones supported by academic recognition, clinical records, experience certificates, and documented training achievements.',
  },
];

const certificateImages = [
  { src: '/credentials/bpt.jpeg', title: 'Bachelor of Physiotherapy Degree', tag: 'Education' },
  { src: '/credentials/resdesign.jpeg', title: 'National Conference on Research Design', tag: 'Conference' },
  { src: '/credentials/osteopathic.jpeg', title: 'Osteopathic Mobilization of Spine Workshop', tag: 'Workshop' },
  { src: '/credentials/aiims.jpeg', title: 'AIIMS Physiotherapy Conference', tag: 'Conference' },
  { src: '/credentials/kinesiology.jpeg', title: 'Kinesiology Taping & Dry Needling', tag: 'Workshop' },
  { src: '/credentials/pnf.jpeg', title: 'PNF Techniques Training', tag: 'Workshop' },
  { src: '/credentials/gayatri.jpeg', title: 'Gayatri Hospital Experience Certificate', tag: 'Experience' },
  { src: '/credentials/bmhrc.jpeg', title: 'BMHRC Training Certificate', tag: 'Clinical Training' },
  { src: '/credentials/armyinterncert.jpeg', title: 'Army Hospital Internship Certificate', tag: 'Internship' },
  { src: '/credentials/biomechanical.jpeg', title: 'Advanced Biomechanical Corrections Workshop', tag: 'Advanced Training' },
  { src: '/credentials/braille.jpeg', title: 'Introduction to Braille and Accessibility', tag: 'Inclusive Care' },
  { src: '/credentials/olympics.jpeg', title: 'Special Olympics Bharat Certificate', tag: 'Service' },
  { src: '/credentials/armyvolintern.jpeg', title: 'Army Hospital Voluntary Internship', tag: 'Internship' },
];

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<null | { src: string; title: string }>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">About</p>
            <h1>Professional physiotherapy care built on training, clinical exposure, and continuous learning.</h1>
            <p>
              Dr. Jyoti Yadav’s practice is supported by formal physiotherapy education, hospital-based
              clinical training, professional workshops, and academic recognition across multiple areas
              of rehabilitation and patient care.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="gold-medal-highlight">
              <div className="gold-medal-icon">
                <Award size={28} />
              </div>
              <div>
                <h2>Bachelor of Physiotherapy (BPT) Gold Medalist</h2>
                <p>Top rank in physiotherapy from Barkatullah Vishwavidyalaya, Bhopal.</p>
              </div>
            </div>
            <div className="credentials-feature">
              <div className="card credentials-image-card">
                <div className="credentials-image-frame">
                  <Image
                    src="/credentials/CM Pic.jpeg"
                    alt="Dr Jyoti Yadav receiving academic recognition"
                    width={1200}
                    height={800}
                    priority
                  />
                </div>
              </div>

              <div className="card card-pad soft credentials-copy">
                <p className="section-tag">Recognition</p>
                <h2>A practice shaped by discipline, care, and professional growth</h2>
                <p>
                  Alongside her physiotherapy qualifications and hospital training, Dr. Jyoti has built
                  her professional journey through continued learning, practical exposure, and
                  patient-focused clinical development.
                </p>

                <ul className="bullet-list credentials-points">
                  <li>Formal Bachelor of Physiotherapy qualification.</li>
                  <li>Clinical exposure in hospital and rehabilitation settings.</li>
                  <li>Participation in workshops, conferences, and skill-building programs.</li>
                  <li>Documented training, experience, and professional recognition.</li>
                </ul>

              </div>
            </div>
          </div>
        </section>



        <section className="section alt">
          <div className="container">
            <p className="section-tag">Professional Highlights</p>
            <h2>Credentials that reinforce patient trust</h2>
            <p className="section-intro">
              A strong clinical foundation matters in physiotherapy. These highlights reflect formal
              education, hospital exposure, practical learning, and continued professional development.
            </p>

            <div className="cards-grid credentials-grid">
              {credentials.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="card credential-card">
                    <div className="card-pad">
                      <div className="credential-icon">
                        <Icon size={22} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-tag">Certificates</p>
            <h2>Training, internships, workshops, and participation records</h2>
            <p className="section-intro">
              The documents below represent academic qualifications, hospital-based clinical exposure,
              advanced workshops, conference participation, and continued skill development over time.
            </p>

            <div className="certificate-gallery">
              {certificateImages.map((item) => (
                <button
                  key={item.src}
                  type="button"
                  className="certificate-card"
                  onClick={() => setSelectedImage({ src: item.src, title: item.title })}
                >
                  <div className="certificate-thumb">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={900}
                      height={700}
                      loading="lazy"
                    />
                  </div>

                  <div className="certificate-body">
                    <span className="certificate-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <span className="certificate-link">
                      View full image <ArrowUpRight size={16} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              <div className="lightbox-image-wrap">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1500}
                  height={1100}
                  priority
                />
              </div>

              <p className="lightbox-title">{selectedImage.title}</p>
            </div>
          </div>
        )}
      </main>
    </PageShell>
  );
}