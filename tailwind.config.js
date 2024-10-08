/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-top': 'linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)',
                'custom-gradient-angled': 'linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)',

      },
    },
  },
  plugins: [],
};
