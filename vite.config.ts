import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import UnFonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnFonts({
      custom: {
        display: 'auto',
        families: {
          Pokemon: {
            src: './public/Pokemon-Regular.ttf',
          },
        },
      },
    })
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
