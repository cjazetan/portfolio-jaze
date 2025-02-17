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
        background: "#111010",
        foreground: "var(--foreground)",
        "gradient-main-primary": "#1A94E0",
        "gradient-sub-primary": "#397192",
        "green-primary": "#63E77F",
      },
    },
  },
  plugins: [],
} satisfies Config;
