module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#140d10',
        secondary: '#e3b958',
        tertiary: '#1c1216',
        accent: '#b54358',
        muted: '#9b9bb4',
        'black-100': '#141414',
        'white-100': '#f1f0f7',
        'surface': '#181828',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px -20px rgba(0, 0, 0, 0.6)',
        glow: '0 0 40px -10px rgba(227, 185, 88, 0.5)',
      },
      screens: {
        xs: '450px',
        custom: '985px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        'float-slow': 'float 9s ease-in-out 3s infinite',
        'blob': 'blob 14s ease-in-out infinite',
        'blob-delayed': 'blob 18s ease-in-out 4s infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -50px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
