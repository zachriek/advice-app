/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
