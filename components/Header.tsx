'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={classNames(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/90 shadow-lg backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container-section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <motion.span
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            R
          </motion.span>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-dark">Retto UPVC</span>
            <span className="text-xs uppercase tracking-[0.3em] text-dark/60">Jakarta</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames(
                'relative py-2 text-dark/70 transition-colors duration-200 hover:text-primary',
                pathname === link.href && 'text-primary'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/80 shadow-soft">
            <span
              className={classNames(
                'h-0.5 w-6 rounded-full bg-dark transition-transform duration-300',
                open && 'translate-y-1.5 rotate-45'
              )}
            />
            <span
              className={classNames(
                'h-0.5 w-6 rounded-full bg-dark transition-opacity duration-300',
                open && 'opacity-0'
              )}
            />
            <span
              className={classNames(
                'h-0.5 w-6 rounded-full bg-dark transition-transform duration-300',
                open && '-translate-y-1.5 -rotate-45'
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-section flex flex-col gap-2 pb-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames(
                'rounded-2xl px-4 py-3 text-sm font-semibold text-dark/80 transition-colors duration-200 hover:bg-primary/10',
                pathname === link.href && 'bg-primary/10 text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
