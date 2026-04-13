import type { MetadataRoute } from 'next';
import { services } from '@/lib/site-data';
export default function sitemap(): MetadataRoute.Sitemap { const staticPages = ['', '/about', '/services', '/contact']; return [...staticPages.map((path) => ({ url: `https://your-domain.com${path}`, changeFrequency: 'weekly' as const, priority: path === '' ? 1 : 0.8 })), ...services.map((service) => ({ url: `https://your-domain.com/services/${service.slug}`, changeFrequency: 'weekly' as const, priority: 0.75 }))]; }

/* '/testimonials', '/faq', '/blog',  */
