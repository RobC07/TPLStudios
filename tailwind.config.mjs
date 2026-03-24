/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#141414',
        },
        surface: '#1E1E1E',
        accent: {
          primary: '#8B5CF6',
          'primary-hover': '#A78BFA',
          secondary: '#06B6D4',
        },
        txt: {
          primary: '#F5F5F5',
          secondary: '#A3A3A3',
          tertiary: '#6B6B6B',
        },
        success: '#22C55E',
        error: '#EF4444',
        border: '#2A2A2A',
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
