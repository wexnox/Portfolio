import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({

    build: {},
    css: {
        postcss: {
            plugins: [
                autoprefixer({}),
                tailwindcss()],
        },
    },
});