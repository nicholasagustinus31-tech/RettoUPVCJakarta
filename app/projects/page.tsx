import type { Metadata } from 'next';
import ProjectsGallery from '@/components/ProjectsGallery';

export const metadata: Metadata = {
  title: 'Galeri Proyek uPVC',
  description:
    'Lihat portofolio proyek residensial dan komersial Retto UPVC Jakarta. Jelajahi instalasi pintu dan jendela uPVC di seluruh Indonesia.'
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container-section py-16 text-center">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Project Showcase
        </span>
        <h1 className="mt-4 text-4xl font-semibold text-dark">Instalasi uPVC di Seluruh Indonesia</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-dark/70">
          Jelajahi beragam proyek yang telah kami selesaikan untuk perumahan, apartemen, hotel, dan gedung perkantoran.
        </p>
      </section>

      <ProjectsGallery />
    </div>
  );
}
