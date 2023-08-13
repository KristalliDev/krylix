import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      // Update the background color in light & dark mode
      backgroundColor: {
        initial: '#ffffff',
        dark: '#1e1e2e',
        light: '#fffef3'
      },
    },
  }
})
