module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': ['2.5rem',{
          lineHeight: '2.5rem',
        }]
      },
      colors:{
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
      },
      backgroundImage: {
        'mobile-image-hero': "url('/images/mobile/image-hero.jpg')",
        'desktop-image-hero': "url('/images/desktop/image-hero.jpg')",
      },
      fontFamily:{
        alata: ['Alata', 'sans-serif'],
        josefinSans: ['Josefin Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.4em'
      }
    },
  },
  plugins: [],
}