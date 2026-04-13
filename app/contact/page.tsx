"use client";

import { Clock3, MapPin, Phone } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { site } from '@/lib/site-data';

export default function ContactPage() {
  // This function intercepts the form submission and redirects to WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from reloading
    
    // Gather the data from the form
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Format the message nicely
    const whatsappText = `Hello Dr. Jyoti, I have an enquiry from the website:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Concern:* ${message}`;
    
    // Encode it so it works safely in a URL
    const encodedText = encodeURIComponent(whatsappText);
    
    // Create the final WhatsApp link using the number from site-data.ts
    const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodedText}`;

    // Open WhatsApp in a new tab/app
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Book an appointment</h1>
            <p>Reach out to schedule your consultation, ask a question, or find directions to our Awadhpuri clinic.</p>
          </div>
        {/* </section>
        
        <section className="section"> */}
          <div className="container grid-two contact-grid">
            <div className="card card-pad">
              <ul className="contact-list">
                <li><MapPin size={18} /> {site.address}</li>
                <li><Phone size={18} /> {site.phone}</li>
                <li><Clock3 size={18} /> Monday-Saturday   10:00 AM - 1:00 PM, 5:00 PM - 8:00 PM<br/>Sunday 10:00 AM - 1:00 PM</li>
              </ul>
              <div className="hero-actions" style={{ marginTop: 18 }}>
                <a className="btn btn-primary" href={`tel:${site.phone}`}>Call clinic</a>
                <a className="btn btn-secondary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
            
            {/* The new WhatsApp Form */}
            <form className="card card-pad" onSubmit={handleWhatsAppSubmit}>
              <label>Name<input type="text" name="name" placeholder="Enter your name" required /></label>
              <label>Phone<input type="tel" name="phone" placeholder="Enter phone number" required /></label>
              <label>Concern<textarea rows={5} name="message" placeholder="Describe pain, injury, or appointment request" required /></label>
              <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
            </form>
          </div>
        </section>
        
        <section className="section alt">
          <div className="container">
            <p className="section-tag">Location</p>
            <h2 style={{marginBottom:'32px'}}>Find the clinic easily</h2>
            <iframe className="map-frame" src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic map" />
          </div>
        </section>
      </main>
    </PageShell>
  );
}