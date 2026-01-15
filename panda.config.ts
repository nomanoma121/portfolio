import { green } from "@/theme/colors/green";
import { red } from "@/theme/colors/red";
import { mauve } from "@/theme/colors/mauve";
import { amber } from "@/theme/colors/amber";
import { animationStyles } from "@/theme/animation-styles";
import { zIndex } from "@/theme/tokens/z-index";
import { shadows } from "@/theme/tokens/shadows";
import { durations } from "@/theme/tokens/durations";
// import { colors } from "@/theme/tokens/colors";
import { textStyles } from "@/theme/text-styles";
import { layerStyles } from "@/theme/layer-styles";
import { keyframes } from "@/theme/keyframes";
// import { globalCss } from "@/theme/global-css";
import { conditions } from "@/theme/conditions";
import { slotRecipes, recipes } from "@/theme/recipes";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // JSX framework for styled components
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // OKLCh色空間でのカラートークン（ライトモードがベース）
          background: { value: "oklch(0.95 0.005 240)" },
          foreground: { value: "oklch(0.25 0.015 240)" },
          primary: { value: "oklch(0.38 0.04 235)" },
          "primary-foreground": { value: "oklch(0.98 0.005 240)" },
          secondary: { value: "oklch(0.5 0.03 240)" },
          muted: { value: "oklch(0.87 0.008 240)" },
          "muted-foreground": { value: "oklch(0.48 0.015 240)" },
          border: { value: "oklch(0.83 0.01 240)" },
          accent: { value: "oklch(0.45 0.035 240)" },
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
          // 新デザイン用のセマンティックトークン（ダークモード対応）
          background: {
            value: {
              _light: "{colors.background}",
              _dark: "oklch(0.17 0.015 240)"
            }
          },

          foreground: {
            value: {
              _light: "{colors.foreground}",
              _dark: "oklch(0.94 0.008 240)"
            }
          },

          primary: {
            value: {
              _light: "{colors.primary}",
              _dark: "oklch(0.45 0.045 235)"
            }
          },

          "primary-foreground": {
            value: {
              _light: "{colors.primary-foreground}",
              _dark: "{colors.primary-foreground}"
            }
          },

          secondary: {
            value: {
              _light: "{colors.secondary}",
              _dark: "{colors.secondary}"
            }
          },

          muted: {
            value: {
              _light: "{colors.muted}",
              _dark: "oklch(0.25 0.02 240)"
            }
          },

          "muted-foreground": {
            value: {
              _light: "{colors.muted-foreground}",
              _dark: "oklch(0.6 0.015 240)"
            }
          },

          border: {
            value: {
              _light: "{colors.border}",
              _dark: "oklch(0.28 0.025 240)"
            }
          },

          accent: {
            value: {
              _light: "{colors.accent}",
              _dark: "{colors.accent}"
            }
          },

          // 既存のトークンも維持
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
  outdir: "./src/styled-system",

  conditions: conditions
});
