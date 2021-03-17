module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        primaryLt: "#FBAF85",
        gray: "#F1F1F1",
        grayLt: "#FAFAFA",
        dark: "#101010",
      },
    },
    backgroundImage: () => ({
      hero: "url('/assets/home/desktop/image-hero.jpg')",
      "hero-sm": "url('/assets/home/mobile/image-header.jpg')",
      "hero-md": "url('/assets/home/tablet/image-header.jpg')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
