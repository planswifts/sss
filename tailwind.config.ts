import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
          600: '#52525b',
        },
      },
    },
  },
  plugins: [],
}
export default config
