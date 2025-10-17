import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        accent: '#E63946',
        light: '#F8F8F8',
        dark: '#222222'
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      boxShadow: {
        soft: '0 20px 45px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
