/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "card-bg": "var(--color-card-bg)",
        "accent-light": "var(--color-accent-light)",
        "accent-medium": "var(--color-accent-medium)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-text": "var(--color-accent-text)",
        "accent-special": "var(--color-accent-special)",
      },
    },
  },
  plugins: [],
};
