import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      // Update the background color in light & dark mode
      backgroundColor: {
        initial: '#f8fafc',
        dark: '#000000',
        light: '#fffef3'
      }
    }
  }
})
