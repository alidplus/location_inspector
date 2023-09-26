import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindTypography from '@tailwindcss/typography'


export default <Partial<Config>> {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000"
      }
    }
  },
  plugins: [tailwindTypography],
}

