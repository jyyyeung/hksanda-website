/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-mountain': "url('@/assets/images/blue-mountain.webp')",
        'brush': "url('@/assets/images/brush.png')",
      },
      colors: {
        'text-color': '#3a0d0c',
        'secondary': '#68635E',
        'primary': '#3a0d0c',
        'background': '#ffffde'
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('flowbite'),
    require('flowbite/plugin')
  ],
}
