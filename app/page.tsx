import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { FaArrowRight, FaShieldHeart, FaToolbox, FaLeaf, FaMedal } from 'react-icons/fa6';
import HeroSection from '@/components/HeroSection';
import { productCategories, projects, strengths, testimonials } from '@/data/company';

export const metadata: Metadata = {
  title: 'Your Trusted Partner for uPVC Doors & Windows',
  description:
    'Retto UPVC Jakarta menghadirkan pintu dan jendela uPVC terbaik dengan instalasi profesional, timeline proyek transparan, dan dukungan teknis menyeluruh.'
};

const featureIcons = [FaShieldHeart, FaToolbox, FaLeaf, FaMedal];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />

      <section className="container-section">
        <div className="section-title">Mengapa Retto UPVC Jakarta</div>
        <p className="section-subtitle">
          Kami memadukan material terbaik, teknologi modern, dan tim profesional untuk memberikan hasil terbaik pada setiap
          proyek uPVC Anda.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {strengths.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div key={feature.title} className="card" data-aos="fade-up" data-aos-delay={index * 100}>
                {Icon && <Icon className="mb-6 h-10 w-10 text-primary" />}
                <h3 className="mb-3 text-lg font-semibold text-dark">{feature.title}</h3>
                <p className="text-sm text-dark/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="container-section grid gap-12 py-20 md:grid-cols-[0.9fr,1.1fr] md:items-center">
          <div data-aos="fade-right" className="space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Featured Products
            </span>
            <h2 className="text-3xl font-semibold text-dark">Solusi uPVC Lengkap Untuk Setiap Kebutuhan</h2>
            <p className="text-dark/70">
              Dari pintu swing klasik hingga pintu pivot modern, kami menyediakan profil dan aksesoris lengkap dengan garansi dan
              dukungan teknis profesional.
            </p>
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              Lihat Semua Produk <FaArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {productCategories.slice(0, 4).map((product, index) => (
              <div key={product.id} className="card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-light">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-dark">{product.name}</h3>
                <p className="mt-2 text-sm text-dark/60">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-section">
        <div className="section-title">Project Highlights</div>
        <p className="section-subtitle">
          Kolaborasi kami dengan arsitek dan kontraktor menghasilkan karya terbaik, baik untuk residensial maupun komersial.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-dark text-white" data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="relative h-64 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-1 p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-white/70">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light">
        <div className="container-section py-20">
          <div className="section-title">Apa Kata Klien Kami</div>
          <p className="section-subtitle">
            Kepercayaan klien adalah prioritas kami. Berikut pengalaman mereka bekerja bersama tim Retto UPVC Jakarta.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className="card" data-aos="fade-up" data-aos-delay={index * 120}>
                <p className="text-sm leading-relaxed text-dark/80">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-dark">{testimonial.author}</p>
                  <p className="text-xs uppercase tracking-wide text-dark/50">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-section">
        <div className="rounded-[2.5rem] bg-dark px-10 py-16 text-white md:flex md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-semibold">Siap Mewujudkan Bukaan Ideal?</h2>
            <p className="text-sm text-white/70">
              Konsultasikan kebutuhan pintu dan jendela uPVC Anda bersama konsultan kami. Kami siap memberikan penawaran terbaik.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 md:mt-0 md:flex-row">
            <Link href="/contact" className="btn-primary">
              Request Quotation
            </Link>
            <Link href="/projects" className="btn-secondary border-white text-white hover:bg-white hover:text-dark">
              Lihat Proyek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
