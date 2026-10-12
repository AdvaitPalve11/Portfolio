/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#0a0d12',
        surface: {
          DEFAULT: '#111620',
          elevated: '#161c28',
          border: '#232b3b',
        },
        emerald: {
          accent: '#34d399',
          glow: 'rgba(52, 211, 153, 0.15)',
        },
        cyan: {
          accent: '#38bdf8',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor-blink': 'blink 1.1s steps(1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
