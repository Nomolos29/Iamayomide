// tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Your existing colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Add our new brand color here
        'brand-red': '#BD1842', 
        'brand-gray': '#F9FAFB', 
        'brand-red-secondary': '#990000',
        'brand-red-dark': '#7A0D29',
        'brand-pink': '#F5E8EC', 
        'brand-gray-dark': '#424242',
        'brand-off-white': '#F9F9F9',
        'brand-light-pink': '#FFCFCF',
        'brand-dark-red-gradient': '#7B0D29',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        'heading-impact': ['Impact', 'Haettenschweiler', '"Arial Narrow Bold"', 'sans-serif'],
        'serif-georgia': ['Georgia', 'Times', '"Times New Roman"', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
  ],
  
} satisfies Config;