/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Habilitado para control por toggle
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0F1C', // Fondo azul medianoche
          card: '#131C2F',
          border: '#1E293B',
        },
        light: {
          bg: '#F8FAFC', // Fondo blanco nieve/crema
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        accent: {
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          neon: '#f97316' // Naranja dinámico
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)' },
          '100%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}