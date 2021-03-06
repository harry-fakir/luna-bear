module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray': '#6c757d',
      }
    },
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
    extend: {
      opacity: ['active'],
      display: ["group-hover"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
