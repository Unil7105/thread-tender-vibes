
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        forum: {
          electric: "#E6E6FA",     // Primary - Lavender
          orange: "#87CEEB",       // Secondary - Sky Blue
          neon: "#D3D3D3",         // Accent - Light Gray
          black: "#FFFFFF",        // Background - White
          yellow: "#9370DB",       // CTA Highlight - Medium Purple
          
          lavender: "#E6E6FA",     // Lavender
          indigo: "#87CEEB",       // Sky Blue
          skyblue: "#87CEEB",      // Sky Blue
          navy: "#F8F8FF",         // Ghost White (slightly off-white)
          coral: "#9370DB",        // Medium Purple
          mint: "#E0FFFF",         // Light Cyan
          amber: "#FFE4E1",        // Misty Rose
          light: "#FFFFFF",        // White
          dark: "#696969",         // Dim Gray
          magenta: "#DDA0DD",      // Plum
          cyan: "#AFEEEE",         // Pale Turquoise
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(155, 135, 245, 0.3)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(217, 70, 239, 0.5)" },
        },
        "neon-border": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(155, 135, 245, 0.5), 0 0 10px rgba(155, 135, 245, 0.3)", 
            borderColor: "rgba(155, 135, 245, 0.8)" 
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(217, 70, 239, 0.6), 0 0 20px rgba(217, 70, 239, 0.4)", 
            borderColor: "rgba(217, 70, 239, 0.9)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-soft": "pulse-soft 3s infinite",
        "glow-pulse": "glow-pulse 3s infinite",
        "neon-border": "neon-border 4s infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(147, 112, 219, 0.2)',
        'hover': '0 6px 20px rgba(147, 112, 219, 0.25)',
        'card': '0 10px 30px -5px rgba(147, 112, 219, 0.15)',
        'focus': '0 0 0 3px rgba(147, 112, 219, 0.3)',
        'electric-glow': '0 0 15px rgba(147, 112, 219, 0.6)',
        'neon-glow': '0 0 10px rgba(230, 230, 250, 0.6), 0 0 20px rgba(230, 230, 250, 0.3)',
        'orange-glow': '0 0 15px rgba(135, 206, 235, 0.4)',
        'yellow-glow': '0 0 15px rgba(147, 112, 219, 0.4)',
        'glass-highlight': '0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 0 30px rgba(147, 112, 219, 0.15)',
        'text-shadow': '0 1px 3px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
