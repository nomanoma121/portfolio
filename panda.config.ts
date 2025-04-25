import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#27374d" },
          background: { value: "#DDE6EDF0" },
          accentLight: { value: "#9DB2BF" },
          accent: { value: "#526D82" },
        },
      },
    },
  },
  globalCss: {
    p: {
      color: "primary",
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
