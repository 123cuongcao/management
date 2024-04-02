/**
 
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // Define your theme customization here if needed
  },
  plugins: [
    require('flowbite/plugin')
  ],
}