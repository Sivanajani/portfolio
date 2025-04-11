module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',
        secondary: '#3B0A00',
        tertiary: '#858585',
        'black-100': '#141414',
        'white-100': '#fafafa',
        'new': '#C9C9C9',
        'blue': '#0A003B',
      },
      boxShadow: {
        card: '0 35px 120px -15pxrgb(10, 7, 27)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.jpg)`,
      },
    },
  },
  plugins: [],
};
