const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');
const { transform } = require("typescript");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-ease': (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme('transitionTimingFunction') }
      )
    }),
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2px",
        sm: "4px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        "2xl": "16px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        cover: "var(--thumbBG)",
        "text-active": "var(--text-active-color)",
        "text-unactive": "var(--text-unactive-color)",
        primary: {
          50: "var(--color-primary-50)", //"#F6F8FF",
          100: "var(--color-primary-100)", //"#EDF0FF",
          200: "var(--color-primary-200)", //"#D1DAFE",
          300: "var(--color-primary-300)", //"#B4C2FD",
          400: "var(--color-primary-400)", //"#8092FF",
          500: "var(--color-primary-500)", //"#4669fa",
          600: "var(--color-primary-600)", //"#3F5EDF",
          700: "var(--color-primary-700)", //"#2A3F96",
          800: "var(--color-primary-800)", //"#203071",
          900: "var(--color-primary-900)", //"#151F49",
        },
        secondary: {
          50: "var(--color-secondary-50)", //"#F9FAFB",
          100: "var(--color-secondary-100)", //"#F4F5F7",
          200: "var(--color-secondary-200)", //"#E5E7EB",
          300: "var(--color-secondary-300)", //"#D2D6DC",
          400: "var(--color-secondary-400)", //"#9FA6B2",
          500: "var(--color-secondary-500)", //"#A0AEC0",
          600: "var(--color-secondary-600)", //"#475569",
          700: "var(--color-secondary-700)", //"#334155",
          800: "var(--color-secondary-800)", //"#1E293B",
          900: "var(--color-secondary-900)", //"#0F172A",
        },
        danger: {
          50: "var(--color-danger-50)", //"#FFF7F7",
          100: "var(--color-danger-100)", //"#FEEFEF",
          200: "var(--color-danger-200)", //"#FCD6D7",
          300: "var(--color-danger-300)", //"#FABBBD",
          400: "var(--color-danger-400)", //"#F68B8D",
          500: "var(--color-danger-500)", //"#F1595C",
          600: "var(--color-danger-600)", //"#D75052",
          700: "var(--color-danger-700)", //"#913638",
          800: "var(--color-danger-800)", //"#6D292A",
          900: "var(--color-danger-900)", //"#461A1B",
        },
        black: {
          50: "var(--color-black-50)", //"#F9FAFB",
          100: "var(--color-black-100)", //"#F4F5F7",
          200: "var(--color-black-200)", //"#E5E7EB",
          300: "var(--color-black-300)", //"#D2D6DC",
          400: "var(--color-black-400)", //"#9FA6B2",
          500: "var(--color-black-500)", //"#111112",
          600: "var(--color-black-600)", //"#475569",
          700: "var(--color-black-700)", //"#334155",
          800: "var(--color-black-800)", //"#1E293B",
          900: "var(--color-black-900)", //"#0F172A",
        },
        warning: {
          50: "var(--color-warning-50)", //"#FFFAF8",
          100: "var(--color-warning-100)", //"#FFF4F1",
          200: "var(--color-warning-200)", //"#FEE4DA",
          300: "var(--color-warning-300)", //"#FDD2C3",
          400: "var(--color-warning-400)", //"#FCB298",
          500: "var(--color-warning-500)", //"#FA916B",
          600: "var(--color-warning-600)", //"#DF8260",
          700: "var(--color-warning-700)", //"#965741",
          800: "var(--color-warning-800)", //"#714231",
          900: "var(--color-warning-900)", //"#492B20",
        },
        info: {
          50: "var(--color-info-50)", //"#F3FEFF",
          100: "var(--color-info-100)", //"#E7FEFF",
          200: "var(--color-info-200)", //"#C5FDFF",
          300: "var(--color-info-300)", //"#A3FCFF",
          400: "var(--color-info-400)", //"#5FF9FF",
          500: "var(--color-info-500)", //"#0CE7FA",
          600: "var(--color-info-600)", //"#00B8D4",
          700: "var(--color-info-700)", //"#007A8D",
          800: "var(--color-info-800)", //"#005E67",
          900: "var(--color-info-900)", //"#003F42",
        },
        success: {
          50: "var(--color-success-50)", //"#F3FEF8",
          100: "var(--color-success-100)", //"#E7FDF1",
          200: "var(--color-success-200)", //"#C5FBE3",
          300: "var(--color-success-300)", //"#A3F9D5",
          400: "var(--color-success-400)", //"#5FF5B1",
          500: "var(--color-success-500)", //"#50C793",
          600: "var(--color-success-600)", //"#3F9A7A",
          700: "var(--color-success-700)", //"#2E6D61",
          800: "var(--color-success-800)", //"#1F4B47",
          900: "var(--color-success-900)", //"#0F2A2E",
        },
        gray: {
          50: "var(--color-gray-50)", //"#F9FAFB",
          100: "var(--color-gray-100)", //"#F4F5F7",
          200: "var(--color-gray-200)", //"#E5E7EB",
          300: "var(--color-gray-300)", //"#D2D6DC",
          400: "var(--color-gray-400)", //"#9FA6B2",
          500: "var(--color-gray-500)", //"#68768A",
          600: "var(--color-gray-600)", //"#475569",
          700: "var(--color-gray-700)", //"#334155",
          800: "var(--color-gray-800)", //"#1E293B",
          900: "var(--color-gray-900)", //"#0F172A",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        eczar: ["Eczar", "serif"]
      },
      boxShadow: {
        base: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        base2:
          "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
        base3: "16px 10px 40px rgba(15, 23, 42, 0.22)",
        deep: "-2px 0px 8px rgba(0, 0, 0, 0.16)",
        dropdown: "0px 4px 8px rgba(0, 0, 0, 0.08)",

        testi: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        todo: "rgba(235 233 241, 0.6) 0px 3px 10px 0px",
        "light-white": "0px 2px 4px 1px #c6dbe2",
        dark: "0px 2px 4px 1px #302708",
        "text-light": "0px 2px 4px #f8f8f7",
        "text-dark": "0px 2px 4px #454503",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)",
          },
          "40%, 60%, 80%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        fadeltr: {
          "0%": { width: "100%" },
          "40%": { width: "0%" },
          "60%": { width: "0%" },
          "100%": { width: "100%" }
        },
        fadertl: {
          "0%": { width: "0%" },
          "40%": { width: "100%" },
          "60%": { width: "100%" },
          "100%": { width: "0%" }
        },
        fade_in_ltr_70: {
          "0%": { opacity: 0, transform: "translateX(-70%)" },
          "95%": { opacity: 1, transform: "translateX(20%)" },
          "100%": { opacity: 1 }
        },
        fade_in_ltr_150: {
          "0%": { opacity: 0, transform: "translateX(-150%)" },
          "95%": { opacity: 1, transform: "translateX(20%)" },
          "100%": { opacity: 1 }
        },
        fade_in_ltr_250: {
          "0%": { opacity: 0, transform: "translateX(-250%)" },
          "95%": { opacity: 1, transform: "translateX(20%)" },
          "100%": { opacity: 1 }
        },
        fade_in_ltr_350: {
          "0%": { opacity: 0, transform: "translateX(-350%)" },
          "95%": { opacity: 1, transform: "translateX(20%)" },
          "100%": { opacity: 1 }
        },
        fade_in_ltr: {
          "0%": { opacity: 0, transform: "translateX(-70%)" },
          "100%": { opacity: 1 }
        },
        fade_in_rtl: {
          "0%": { opacity: 0, transform: "translateX(70%)" },
          "100%": { opacity: 1 }
        },
        fade_in: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slide_in: {
          "0%": { transform: "translateY(10%)" },
          "100%": {}
        },
        slide_down: {
          "0%": { transform: "translateY(-450%)" },
          "100%": {}
        },
        slide_up: {
          "0%": { transform: "translateY(100vh)" },
          "100%": {}
        },
        slide_down_vh: {
          "0%": { transform: "translateY(-100vh)" },
          "100%": {}
        },
        slide_ltr: {
          "0%": { transform: "translateX(-100vw)" },
          "100%": {}
        },
        expand: {
          "0%": { height: 0 },
          "100%": { height: "auto" }
        },
        bird: {
          "0%": { transform: "translate(-250px, 0)", opacity: 0 },
          "100%": {}
        },
        shoot_x: {
          "0%": { transform: "translate(0,0)", opacity: 0.5 },
          "99%": { transform: "translate(-5000px, 0)", opacity: 1 }
        },
        shoot_y: {
          "0%": { transform: "translate(0, 0)", opacity: 0.5 },
          "99%": { transform: "translate(0, -5000px)", opacity: 1 }
        },
        mouse_click: {
          "0%": {
            background: "rgba(255,100,0, 0.6)",
            borderRadius: "100%",
          },
        },
        text_appear: {
          "0%": {
            opacity: 0.1
          },
        },
        sub_text_appear: {
          "0%": {
            opacity: 0.1
          },
        },
        spin_custom: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "40%": {
            transform: "rotate(3599deg)"
          },
          "60%": {
            transform: "rotate(3599deg)"
          },
          "100%": {
            transform: "rotate(0deg)"
          },
        },
        rotate: {
          "0%": {
            transform: "rotateX(0deg)"
          },
          "50%": {
            transform: "rotateX(-90deg)"
          },
          "100%": {
          },
        },
        disappear_slide: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100%)"
          },
        },
        space_appear: {
          "0%": {
            transform: "scale3d(0.1, 0.1, 0.1)",
            borderRadius: "100%",
          },
          "99%": {
            transform: "scale3d(1, 1, 1)",
            borderRadius: "100%",
          },
        }
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        zoom: "zoom 1s ease-in-out infinite",
        tada: "tada 1.5s ease-in-out infinite",
        fadeltr: "fadeltr 3s ease-in alternate infinite",
        fadertl: "fadertl 3s ease-in alternate infinite",
        fade_in_rtl: "fade_in_rtl .25s ease-in",
        fade_in_ltr: "fade_in_ltr .25s ease-in",
        fade_in_ltr_70: "fade_in_ltr_70 .25s ease-in",
        fade_in_ltr_150: "fade_in_ltr_150 .25s ease-in",
        fade_in_ltr_250: "fade_in_ltr_250 .25s ease-in",
        fade_in_ltr_350: "fade_in_ltr_350 .25s ease-in",
        fade_in: "fade_in .3s ease-in",
        spin_2: "spin_custom 36s linear infinite",
        spin_3: "spin_custom 42s linear infinite",
        spin_4: "spin_custom 60s linear infinite",
        expand: "expand .25s ease-in-out",
        slide_in: "slide_in .25s ease-in",
        bird: "bird 2.25s ease-in-out",
        shoot_x: "shoot_x 12s ease-in-out",
        shoot_y: "shoot_y 12s ease-in-out",
        mouse_click: "mouse_click 1.2s ease-in-out",
        text_appear: "text_appear 1.2s ease-in-out",
        sub_text_appear: "sub_text_appear 1.2s ease-in-out",
        slide_down: "slide_down 2s ease-in-out",
        slide_up: "slide_up 1s ease-in-out",
        slide_ltr: "slide_ltr 2s ease-in-out",
        slide_down_vh: "slide_down_vh .5s ease-in-out",
        rotate: "rotate .5s ease-in-out",
        space_appear: "space_appear 1s ease-in-out",
        disappear_slide: "disappear_slide .7s forwards ease-out",
      },
      backgroundImage: {
        "bg-gradient": "var(--gradient)"
      }
    },
  },
};