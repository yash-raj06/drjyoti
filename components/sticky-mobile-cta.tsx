import { site } from '@/lib/site-data';

export function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta">
      <a className="btn btn-primary" href={`tel:${site.phone}`}>Call</a>
      <a className="btn btn-secondary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  );
}
