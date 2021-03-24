module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        primaryLt: "#FBAF85",
        grey: "#F1F1F1",
        greyLt: "#FAFAFA",
        dark: "#101010",
      },
    },
    backgroundImage: () => ({
      hero: "url('/assets/home/desktop/image-hero.jpg')",
      "hero-sm": "url('/assets/home/mobile/image-header.jpg')",
      "hero-md": "url('/assets/home/tablet/image-header.jpg')",
      speaker: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
      "speaker-sm": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      "speaker-md": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
      earphones: "url('/assets/home/desktop/image-earphones-yx1.jpg')",
      "earphones-sm": "url('/assets/home/mobile/image-earphones-yx1.jpg')",
      "earphones-md": "url('/assets/home/tablet/image-earphones-yx1.jpg')",
      "info-img": "url('/assets/shared/desktop/image-best-gear.jpg')",
      "info-img-sm": "url('/assets/shared/mobile/image-best-gear.jpg')",
      "info-img-md": "url('/assets/shared/tablet/image-best-gear.jpg')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
