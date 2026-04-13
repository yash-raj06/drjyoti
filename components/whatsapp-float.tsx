import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/site-data';

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} />
      <span>WhatsApp</span>
    </a>
  );
}
