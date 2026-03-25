/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050508',
          secondary: '#0C0C14',
          tertiary: '#12121C',
        },
        surface: '#1A1A2E',
        accent: {
          primary: '#7C3AED',
          'primary-hover': '#6D28D9',
          secondary: '#06B6D4',
          tertiary: '#EC4899',
        },
        txt: {
          primary: '#F1F0F5',
          secondary: '#9896A8',
          tertiary: '#5C5A6E',
        },
        success: '#22C55E',
        error: '#EF4444',
        border: '#1E1E32',
        'border-light': '#2A2A44',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '16px',
        btn: '10px',
        input: '8px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
