import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const socials = [
  { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://youtube.com', icon: FaYoutube, label: 'YouTube' }
];

const quickLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/products', label: 'Product Range' },
  { href: '/projects', label: 'Project Showcase' },
  { href: '/contact', label: 'Contact & Support' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-dark text-white">
      <div className="container-section grid gap-12 py-16 md:grid-cols-[1.2fr,1fr,1fr]">
        <div className="max-w-xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/80 text-2xl font-bold text-white">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Retto UPVC Jakarta</span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Distributor uPVC</span>
            </div>
          </div>
          <p className="text-white/70">
            Distributor material uPVC pintu & jendela terdepan di Indonesia. Kami menghadirkan solusi berkualitas tinggi,
            efisien, dan ramah lingkungan untuk proyek residensial maupun komersial.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <div>
              <span className="font-semibold text-white">Phone:</span> +62 21 555 1234
            </div>
            <div>
              <span className="font-semibold text-white">Email:</span> sales@rettoupvc.co.id
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Stay Connected</h4>
          <p className="mb-4 text-sm text-white/70">
            Ikuti kami untuk update proyek terbaru, inspirasi desain, dan promo eksklusif.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Retto UPVC Jakarta. All rights reserved.
      </div>
    </footer>
  );
}
