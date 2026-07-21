/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b8d9ff',
          300: '#8ac0ff',
          400: '#5a9eff',
          500: '#3380ff',
          600: '#1f63f0',
          700: '#1849c8',
          800: '#163d9e',
          900: '#16357e',
        },
      },
      boxShadow: {
        glow: '0 0 40px 0 rgba(51,128,255,0.35)',
        'glow-soft': '0 0 24px 0 rgba(51,128,255,0.25)',
        card: '0 8px 30px -12px rgba(15,23,42,0.12)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatySlow: {
          '0%,100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translateY(-8px) rotate(var(--tw-rotate, 0deg))' },
        },
        floatyAlt: {
          '0%,100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translateY(-12px) rotate(var(--tw-rotate, 0deg))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(51,128,255,0)' },
          '50%': { boxShadow: '0 0 24px 4px rgba(51,128,255,0.25)' },
        },
        softFloat: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        floatySlow: 'floatySlow 7s ease-in-out infinite',
        floatyAlt: 'floatyAlt 9s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        marquee: 'marquee 28s linear infinite',
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        softFloat: 'softFloat 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
