import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    plugins: [react(), UnoCSS({ mode: 'shadow-dom' })],
    build: {
        lib: {
            entry: 'src/index.tsx',
            formats: ['es', 'cjs'],
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
