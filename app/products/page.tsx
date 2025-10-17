import type { Metadata } from 'next';
import ProductShowcase from '@/components/ProductShowcase';

export const metadata: Metadata = {
  title: 'Produk Pintu & Jendela uPVC',
  description:
    'Temukan katalog lengkap profil uPVC: swing door, sliding door, jungkit, lipat, dan pivot dari Retto UPVC Jakarta dengan spesifikasi teknis lengkap.'
};

export default function ProductsPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container-section py-16 text-center">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Product Range
        </span>
        <h1 className="mt-4 text-4xl font-semibold text-dark">Solusi uPVC Untuk Setiap Bukaan</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-dark/70">
          Pilih tipe bukaan yang sesuai dengan kebutuhan proyek Anda. Setiap produk dirancang untuk ketahanan cuaca tropis,
          keamanan maksimal, dan efisiensi energi.
        </p>
      </section>

      <ProductShowcase />
    </div>
  );
}
