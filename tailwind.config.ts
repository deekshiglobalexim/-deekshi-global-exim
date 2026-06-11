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
          50: '#eef6ff',
          100: '#dfeefa',
          200: '#c7dcf2',
          300: '#9abce6',
          400: '#6e96cf',
          500: '#4e7ab5',
          600: '#34608f',
          700: '#244f76',
          800: '#1b4563',
          900: '#133955',
          950: '#0B375D',
        },
        gold: {
          300: '#f3d775',
          400: '#d69648',
          500: '#BB7429',
          600: '#a35f1f',
          700: '#8b5019',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BB7429 0%, #f3d775 50%, #a35f1f 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0B375D 0%, #1b4563 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(11,55,93,0.96) 0%, rgba(19,57,87,0.88) 50%, rgba(11,55,93,0.96) 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212,175,55,0)' },
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
            boxShadow: '0 0 20px rgba(212,175,55,0.2), 0 0 40px rgba(212,175,55,0.1)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.2)',
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
        'premium': '0 8px 24px rgba(0, 0, 0, 0.12), 0 16px 48px rgba(11, 55, 93, 0.15)',
        'premium-lg': '0 12px 36px rgba(0, 0, 0, 0.15), 0 24px 64px rgba(11, 55, 93, 0.2)',
        'gold-glow': '0 0 20px rgba(187, 116, 41, 0.3), 0 0 40px rgba(187, 116, 41, 0.1)',
        'gold-glow-lg': '0 0 30px rgba(187, 116, 41, 0.4), 0 0 60px rgba(187, 116, 41, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
