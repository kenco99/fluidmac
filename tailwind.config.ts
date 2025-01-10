import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#B8860B',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#1d4ed8', // blue-700
          hover: '#1e40af', // blue-800
        },
        secondary: {
          DEFAULT: '#4b5563', // gray-600
          hover: '#374151', // gray-700
        },
      }
    },
  },
  plugins: [],
}

export default config;