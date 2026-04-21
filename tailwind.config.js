/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#010828',
        cream: '#EFF4FF',
        neon: '#6FFF00',
      },
      fontFamily: {
        seasons: ['"The Seasons"', 'serif'],
        poppins: ['Poppins', '"Noto Sans KR"', 'Pretendard', 'sans-serif'],
        sans: ['"Noto Sans KR"', 'Pretendard', 'sans-serif'],
        mono: [
          'Poppins',
          '"Noto Sans KR"',
          'Pretendard',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
