import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The repository name is 'Archana_portfolio'
export default defineConfig({
  plugins: [react()],
  // ⭐️ CRITICAL FIX: Set the base path to your repository name
  base: "/Archana_portfolio/", 
});