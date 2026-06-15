import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import vitePluginTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxImportSource: 'react',
    }),
    TanStackRouterVite({
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    vitePluginTsConfigPaths(),
  ],
  resolve: {
    conditions: ['browser', 'import', 'module'],
  },
  optimizeDeps: {
    include: ['framer-motion'],
  },
  ssr: {
    noExternal: ['framer-motion'],
  },
  server: {
    port: 5173,
    host: 'localhost',
    open: true,
    middlewareMode: false,
  },
  build: {
    target: 'ES2020',
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      external: ['node:async_hooks', 'node:stream'],
    },
  },
})
