import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  prefix: "",
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // boxShadow: {
      //   xs: "0 2px 4px -2px #1018280f",
      //   sm: "0 2px 5px 2px #8991e4216",
      //   md: "0 8 13px 5px #00000029",
      //   bs: "inset 0 2px 3px 0 #0000001c",
      // },
      colors: {
        border: "hsl(var(--border))",
        black: {
          "600": "var(--black_600)",
          "900": "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_16": "var(--black_900_16)",
          "900_1c": "var(--black_900_1c)",
        },
        blue_gray: {
          "50": "var(--blue_gray_50)",
          "100": "var(--blue_gray_100)",
          "900": "var(--blue_gray_900)",
          "900_16": "var(--blue_gray_900_16)",
          "900_21": "var(--blue_gray_900_21)",
        },
        gray: {
          "50": "var(--gray_50)",
          "100": "var(--gray_100)",
          "200": "var(--gray_200)",
          "300": "var(--gray_300)",
          "500": "var(--gray_500)",
          "300_3f": "var(--gray_300_3f)",
          "900_0f": "var(--gray_900_0f)",
        },
        indigo: {
          "400_3f": "var(--indigo_400_3f)",
          a700: "var(--indigo_a700)",
        },
        lime: {
          a400: "var(--lime_a400)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_02: "var(--white_a700_02)",
          a700_33: "var(--white_a700_33)",
          a700_a5: "var(--white_a700_a5)",
        },
        gray_shadow: "var(--gray_shadow)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
