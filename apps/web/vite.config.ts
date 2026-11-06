import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    // Tudo que começa com /api vai para o servidor Node. Assim o painel e a API
    // parecem estar no mesmo endereço e não precisamos configurar CORS.
    proxy: { '/api': 'http://localhost:3333' },
  },
});
