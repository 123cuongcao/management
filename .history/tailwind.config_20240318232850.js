/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
   
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // Define your theme customization here if needed
  },
  plugins: [
    require('flowbite/plugin')
  ],
}