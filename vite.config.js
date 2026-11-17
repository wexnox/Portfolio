import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Routes that must also load directly, without the server rewriting to index.html
const ROUTES = ['about', 'contact'];

function copyIndexToRoutes() {
    let outDir;
    return {
        name: 'copy-index-to-routes',
        apply: 'build',
        configResolved(config) {
            outDir = resolve(config.root, config.build.outDir);
        },
        closeBundle() {
            for (const route of ROUTES) {
                mkdirSync(resolve(outDir, route), { recursive: true });
                copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, route, 'index.html'));
            }
        },
    };
}

export default defineConfig({
    plugins: [copyIndexToRoutes()],
    build: {
        minify: true,
    },
});
