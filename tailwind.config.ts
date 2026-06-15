import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#fafafa',
          100: '#f0f0f0',
          200: '#dedede',
          300: '#bdbdbd',
          400: '#8a8a8a',
          500: '#5c5c5c',
          600: '#3d3d3d',
          700: '#292929',
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#0a0a0a',
        },
        gold: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fbcccc',
          300: '#ff7a7d',
          400: '#f74c50',
          500: '#ed2024',
          600: '#cc1519',
          700: '#a31013',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ed2024 0%, #ff7a7d 50%, #a31013 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(10,10,10,0.96) 0%, rgba(26,26,26,0.88) 50%, rgba(10,10,10,0.96) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-smooth': 'bounceSmooth 1.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(237,32,36,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(237,32,36,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(237,32,36,0.2), 0 0 40px rgba(237,32,36,0.1)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(237,32,36,0.4), 0 0 60px rgba(237,32,36,0.2)',
            transform: 'scale(1.02)',
          },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 8px 24px rgba(0, 0, 0, 0.12), 0 16px 48px rgba(10, 10, 10, 0.15)',
        'premium-lg': '0 12px 36px rgba(0, 0, 0, 0.15), 0 24px 64px rgba(10, 10, 10, 0.2)',
        'gold-glow': '0 0 20px rgba(237, 32, 36, 0.3), 0 0 40px rgba(237, 32, 36, 0.1)',
        'gold-glow-lg': '0 0 30px rgba(237, 32, 36, 0.4), 0 0 60px rgba(237, 32, 36, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
