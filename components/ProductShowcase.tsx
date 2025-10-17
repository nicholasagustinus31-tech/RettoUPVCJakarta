'use client';

import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';
import { productCategories } from '@/data/company';

const tabs = productCategories.map((product) => ({ id: product.id, label: product.name }));

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeProduct = productCategories.find((product) => product.id === activeTab) ?? productCategories[0];

  return (
    <section className="container-section">
      <div className="scrollbar-hide flex gap-3 overflow-x-auto rounded-full bg-light p-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={classNames(
              'whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition',
              activeTab === tab.id
                ? 'bg-primary text-white shadow-soft'
                : 'bg-white text-dark/60 hover:bg-primary/10 hover:text-primary'
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl font-semibold text-dark">{activeProduct.name}</h2>
          <p className="text-dark/70">{activeProduct.description}</p>

          <div>
            <h3 className="text-lg font-semibold text-dark">Spesifikasi Teknis</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-dark/70">
              {activeProduct.specs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark">Keunggulan</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-dark/70">
              {activeProduct.advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <a href="https://wa.me/6281234567890" className="btn-primary inline-flex w-full items-center justify-center md:w-auto">
            Request Quotation
          </a>
        </div>
        <div data-aos="fade-left" className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
          <Image src={activeProduct.image} alt={activeProduct.name} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
