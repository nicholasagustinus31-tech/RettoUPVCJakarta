import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontak Retto UPVC Jakarta',
  description:
    'Hubungi Retto UPVC Jakarta untuk konsultasi pintu dan jendela uPVC. Kirim pesan melalui formulir, telepon, atau kunjungi showroom kami.'
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container-section grid gap-12 py-16 md:grid-cols-[0.9fr,1.1fr] md:items-start">
        <div>
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-dark">Mari Diskusikan Proyek uPVC Anda</h1>
          <p className="mt-4 text-lg text-dark/70">
            Tim kami siap memberikan konsultasi teknis, estimasi biaya, dan jadwal instalasi sesuai kebutuhan proyek Anda.
          </p>

          <div className="mt-8 space-y-4 text-sm text-dark/70">
            <p>
              <strong className="text-dark">Alamat Kantor:</strong> Jl. Kebon Jeruk Raya No. 88, Jakarta Barat, 11530
            </p>
            <p>
              <strong className="text-dark">Telepon:</strong> +62 21 555 1234
            </p>
            <p>
              <strong className="text-dark">Email:</strong> sales@rettoupvc.co.id
            </p>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="Lokasi Retto UPVC Jakarta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.929958843955!2d106.77543731526985!3d-6.1767156955282015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f66fe1b3bdfd%3A0x7d7d7b7f7c8c3d1a!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
