/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
        h1: ['1.563rem', '1.75rem'],
        h2: ['1.25rem', '1.438rem'],
        body: ['1rem', '1.5rem'],
        body2: ['0.813rem', '1rem'],
        caption: ['0.688rem', '0.75rem'],
        subtitle: ['0.875rem', '1rem'],
        subtitle2: ['0.75rem', '0.75rem'],
        otp: ['2.063rem', '3rem'],
      },
    },
  },
  plugins: [],
}

