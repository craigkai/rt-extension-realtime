import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
   build: {
    emptyOutDir: false,
    outDir: 'static/',
    rollupOptions: {
       input: {
        // Ensure that Vite processes files according to your needs
        main: 'src/main.ts', // or your main entry point
      },
      output: {
        entryFileNames: 'js/bundle.js', // Name for the main JS file
        assetFileNames:() => {
          return 'css/bundle.css'; // Name pattern for other assets
        },
      },
    },
  }
})
