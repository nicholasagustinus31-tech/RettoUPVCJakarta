'use client';

import { FormEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (siteKey && !captcha) {
      setErrorMessage('Mohon verifikasi reCAPTCHA sebelum mengirim pesan.');
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captcha })
      });

      if (!response.ok) {
        throw new Error('Terjadi kesalahan, silakan coba lagi.');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setCaptcha(null);
    } catch (error) {
      setStatus('error');
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <form className="card space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dark">
          Nama Lengkap
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="mt-2 w-full rounded-2xl border border-light bg-light/60 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
          placeholder="Nama Anda"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-dark">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="mt-2 w-full rounded-2xl border border-light bg-light/60 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
          placeholder="email@perusahaan.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-dark">
          Nomor Telepon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          className="mt-2 w-full rounded-2xl border border-light bg-light/60 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
          placeholder="08xx-xxxx-xxxx"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="mt-2 w-full rounded-2xl border border-light bg-light/60 px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none"
          placeholder="Ceritakan kebutuhan proyek Anda"
        />
      </div>

      {siteKey && (
        <div className="flex justify-center">
          <ReCAPTCHA sitekey={siteKey} onChange={setCaptcha} />
        </div>
      )}

      {errorMessage && <p className="text-sm text-accent">{errorMessage}</p>}
      {status === 'success' && <p className="text-sm text-emerald-600">Terima kasih! Pesan Anda telah kami terima.</p>}

      <button type="submit" className="btn-primary inline-flex w-full items-center justify-center" disabled={status === 'loading'}>
        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
      <p className="text-xs text-dark/50">
        Dengan mengirim formulir ini, Anda menyetujui kebijakan privasi Retto UPVC Jakarta.
      </p>
    </form>
  );
}
