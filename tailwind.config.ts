import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,ts}", // Angular templates & TS files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A124D',
        // primary: '#0000BB',
      },
    },
  },
  plugins: [],
}

export default config
