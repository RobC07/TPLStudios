/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF6',
          secondary: '#F0EDE5',
        },
        surface: '#E6E2D9',
        accent: {
          primary: '#2D7A6E',
          'primary-hover': '#1F5F55',
          secondary: '#D18B3A',
        },
        txt: {
          primary: '#2A2723',
          secondary: '#6B6660',
          tertiary: '#9A958E',
        },
        success: '#3A8F5C',
        error: '#C94040',
        border: '#DDD8CF',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm-space': '0.5rem',
        'md-space': '1rem',
        'lg-space': '1.5rem',
        'xl-space': '2rem',
        '2xl-space': '3rem',
        '3xl-space': '4rem',
        '4xl-space': '6rem',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '8px',
        btn: '6px',
        input: '4px',
      },
    },
  },
  plugins: [],
};
