import { type Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glass: "rgba(255, 255, 255, 0.1)",
        glassDark: "rgba(0, 0, 0, 0.1)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
        'float-slow': 'float 4s ease-in-out 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

      },

    },
  },
  plugins: [],
} satisfies Config;
