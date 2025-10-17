'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { projects } from '@/data/company';

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' }
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState(filters[0].id);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="container-section">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={classNames(
              'rounded-full px-6 py-2 text-sm font-semibold transition',
              activeFilter === filter.id
                ? 'bg-primary text-white shadow-soft'
                : 'bg-light text-dark/60 hover:bg-primary/10 hover:text-primary'
            )}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl bg-dark text-white"
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.image}
                alt={`${project.title} - ${project.location}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1 p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-white/70">{project.location}</p>
            </div>
            <div className="absolute inset-0 hidden items-center justify-center bg-dark/70 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 transition group-hover:flex">
              View Project
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
