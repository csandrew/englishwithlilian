// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        marcellus: ['var(--font-marcellus)', 'serif'],
      },
      colors: {
        primary: '#012169',
        secondary: '#C8102E',
        accent: '#F4B41A',
        white: '#FFFFFF',
        charcoal: '#1F1F1F',
        lightGrey: '#F2F2F2',
      },
    },
  },
  plugins: [],
}

export default config