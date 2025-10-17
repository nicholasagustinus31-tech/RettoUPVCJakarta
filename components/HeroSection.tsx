'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const heroStats = [
  { label: 'Projects Completed', value: '850+' },
  { label: 'City Coverage', value: '12' },
  { label: 'Client Satisfaction', value: '98%' }
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient">
        <div className="container-section grid gap-12 py-24 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-8">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-dark/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Distributor Material uPVC
            </motion.span>
            <motion.h1
              className="text-4xl font-semibold text-dark sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Your Trusted Partner for uPVC Doors & Windows
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg text-dark/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Kami membantu arsitek, kontraktor, dan pemilik properti menghadirkan bukaan yang aman, efisien, dan elegan melalui
              teknologi uPVC terbaru.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/80 p-6 shadow-soft" data-aos="fade-up">
                  <div className="text-3xl font-semibold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-dark/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
              <Image src="/images/hero-visual.svg" alt="uPVC door installation" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
