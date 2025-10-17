'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="fixed bottom-8 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition hover:bg-accent"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FaArrowUp className="h-4 w-4" />
    </button>
  );
}
