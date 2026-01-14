import { green } from "@/theme/colors/green";
import { red } from "@/theme/colors/red";
import { mauve } from "@/theme/colors/mauve";
import { amber } from "@/theme/colors/amber";
import { animationStyles } from "@/theme/animation-styles";
import { zIndex } from "@/theme/tokens/z-index";
import { shadows } from "@/theme/tokens/shadows";
import { durations } from "@/theme/tokens/durations";
import { colors } from "@/theme/tokens/colors";
import { textStyles } from "@/theme/text-styles";
import { layerStyles } from "@/theme/layer-styles";
import { keyframes } from "@/theme/keyframes";
import { globalCss } from "@/theme/global-css";
import { conditions } from "@/theme/conditions";
import { slotRecipes, recipes } from "@/theme/recipes";
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

        durations: durations,
        zIndex: zIndex
      },

      breakpoints: {
        xl: "1150px",
        md: "780px",
      },

      animationStyles: animationStyles,
      recipes: recipes,
      slotRecipes: slotRecipes,
      keyframes: keyframes,
      layerStyles: layerStyles,
      textStyles: textStyles,

      semanticTokens: {
        colors: {
          fg: {
            default: {
              value: {
                _light: "{colors.gray.12}",
                _dark: "{colors.gray.12}"
              }
            },

            muted: {
              value: {
                _light: "{colors.gray.11}",
                _dark: "{colors.gray.11}"
              }
            },

            subtle: {
              value: {
                _light: "{colors.gray.10}",
                _dark: "{colors.gray.10}"
              }
            }
          },

          border: {
            value: {
              _light: "{colors.gray.4}",
              _dark: "{colors.gray.4}"
            }
          },

          error: {
            value: {
              _light: "{colors.red.9}",
              _dark: "{colors.red.9}"
            }
          },

          amber: amber,
          gray: mauve,
          red: red,
          green: green
        },

        shadows: shadows,

        radii: {
          l1: {
            value: "{radii.xs}"
          },

          l2: {
            value: "{radii.sm}"
          },

          l3: {
            value: "{radii.md}"
          }
        }
      }
    },
  },

  // Global CSS settings
  globalCss: {
    // This is how you should handle the font import in Panda CSS
    "@font-face": {
      fontFamily: "Noto Sans JP",
      src: "url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap')",
    },
    body: {
      fontFamily: "Noto Sans JP, sans-serif",
    },
    p: {
      color: "primary",
      fontWeight: "400",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  conditions: conditions
});