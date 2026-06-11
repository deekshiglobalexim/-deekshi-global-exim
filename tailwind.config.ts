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
          50: '#e8f0f7',
          100: '#c8d9e9',
          200: '#a3bfd8',
          300: '#7BA3C5',
          400: '#5386B0',
          500: '#2A5F8F',
          600: '#1B3A5C',
          700: '#1B4D72',
          800: '#153D5E',
          900: '#0F2D4A',
          950: '#091E33',
        },
        gold: {
          100: '#FAF0D4',
          200: '#F2DDA0',
          300: '#E8C66A',
          400: '#D4A032',
          500: '#C68A2E',
          600: '#A67321',
          700: '#8B5E14',
        },
        platinum: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C68A2E 0%, #E8C66A 50%, #A67321 100%)',
        'navy-gradient': 'linear-gradient(135deg, #091E33 0%, #0F2D4A 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(9,30,51,0.97) 0%, rgba(15,45,74,0.90) 50%, rgba(9,30,51,0.97) 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(198,138,46,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(198,138,46,0)' },
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
            boxShadow: '0 0 20px rgba(198,138,46,0.2), 0 0 40px rgba(198,138,46,0.1)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(198,138,46,0.4), 0 0 60px rgba(198,138,46,0.2)',
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
        'premium': '0 8px 24px rgba(0, 0, 0, 0.12), 0 16px 48px rgba(15, 45, 74, 0.15)',
        'premium-lg': '0 12px 36px rgba(0, 0, 0, 0.15), 0 24px 64px rgba(15, 45, 74, 0.2)',
        'gold-glow': '0 0 20px rgba(198, 138, 46, 0.3), 0 0 40px rgba(198, 138, 46, 0.1)',
        'gold-glow-lg': '0 0 30px rgba(198, 138, 46, 0.4), 0 0 60px rgba(198, 138, 46, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
