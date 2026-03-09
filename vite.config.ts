import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages: set base to your repo name, e.g. '/ai-misinformation-guide/'
// Leave as '/' for local dev; CI sets VITE_BASE_PATH
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base,
});
