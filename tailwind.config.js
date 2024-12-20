/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './docs/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oldstandard: ['"Old Standard TT"', 'serif'],
        lemonada: ['"Lemonada"', 'cursive']
      },
    },
  },
  plugins: [],
}

