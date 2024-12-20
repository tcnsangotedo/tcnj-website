import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)"],
        aktiv: ["var(--font-aktiv)"],
        basis: ["var(--font-basis)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
