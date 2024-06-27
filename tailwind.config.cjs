module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#011825",
        secondary: "#F0EFEB",
        tertiary: "#0D3056",
        quaternary: "#1689C8",
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      keyframes: {
        textRotate1: {
          '0%, 20%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)', opacity: 1 },
          '25%, 50%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)', opacity: 0 },
        },
        textRotate2: {
          '0%, 20%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)', opacity: 0 },
          '25%, 45%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)', opacity: 1 },
          '50%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)', opacity: 0 },
        },
      },
      animation: {
        textRotate1: 'textRotate1 6s infinite alternate',
        textRotate2: 'textRotate2 6s infinite alternate',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};
