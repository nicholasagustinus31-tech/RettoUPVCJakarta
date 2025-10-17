import Image from 'next/image';
import type { Metadata } from 'next';
import { milestones, teamGallery, whyChooseUs } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Retto UPVC Jakarta',
  description:
    'Pelajari visi, misi, dan perjalanan Retto UPVC Jakarta sebagai distributor material uPVC pintu dan jendela terpercaya di Indonesia.'
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="container-section grid gap-12 py-16 md:grid-cols-[1fr,0.8fr] md:items-center">
        <div data-aos="fade-right">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            About Retto
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-dark">Membangun Bukaan Yang Tahan Lama & Elegan</h1>
          <p className="mt-6 text-lg text-dark/70">
            Retto UPVC Jakarta berdiri dengan misi menghadirkan solusi pintu dan jendela uPVC yang inovatif untuk proyek
            residensial maupun komersial. Kami percaya bahwa bukaan bukan sekadar akses, tetapi elemen penting yang memberikan
            kenyamanan, keamanan, dan estetika pada sebuah bangunan.
          </p>
        </div>
        <div className="relative" data-aos="fade-left">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
            <Image src="/images/about-hero.svg" alt="Retto UPVC team" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container-section py-20">
          <div className="section-title">Visi & Misi</div>
          <div className="section-subtitle">
            Menjadi mitra terpercaya dalam mewujudkan bukaan yang efisien energi, estetis, dan berkualitas tinggi untuk seluruh
            proyek di Indonesia.
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-dark">Visi</h3>
              <p className="mt-4 text-sm text-dark/70">
                Menjadi pemimpin pasar dalam distribusi material uPVC dengan layanan berstandar internasional dan komitmen pada
                keberlanjutan lingkungan.
              </p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-dark">Misi</h3>
              <ul className="mt-4 space-y-3 text-sm text-dark/70">
                <li>• Menyediakan produk uPVC berkualitas tinggi dengan harga kompetitif.</li>
                <li>• Memberikan layanan konsultasi teknis dan instalasi profesional.</li>
                <li>• Mengedepankan inovasi dan riset untuk solusi bukaan masa depan.</li>
                <li>• Menjunjung tinggi kepuasan pelanggan melalui layanan purna jual.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-section">
        <div className="section-title">Perjalanan Kami</div>
        <p className="section-subtitle">
          Tonggak pencapaian yang membentuk Retto UPVC Jakarta sebagai distributor yang tangguh dan adaptif.
        </p>
        <div className="mt-12 timeline relative flex flex-col gap-12 md:gap-16">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 120}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{milestone.year}</span>
              <h3 className="text-xl font-semibold text-dark">{milestone.title}</h3>
              <p className="text-sm text-dark/70">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="container-section py-20">
          <div className="section-title">Mengapa Memilih Kami</div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-dark/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-section">
        <div className="section-title">Tim & Fasilitas</div>
        <p className="section-subtitle">
          Kami bangga memiliki tim ahli dan fasilitas modern untuk memastikan setiap proyek dikerjakan dengan standar tertinggi.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamGallery.map((item, index) => (
            <div key={item.src} className="overflow-hidden rounded-3xl bg-light" data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
