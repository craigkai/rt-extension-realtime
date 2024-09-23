import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ preprocess: sveltePreprocess({ typescript: true }) })],
  build: {
    lib: {
        entry: path.resolve('src/main.ts'),
        name: 'Component',
        formats: ["umd", "es"],
        fileName: (format) => `js/bundle.${format}.js`
    },
    emptyOutDir: false,
    outDir: 'static/',
  }
})
