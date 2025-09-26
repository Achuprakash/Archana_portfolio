import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'Archana_portfolio' with your actual repository name
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Achuprakash/Archana_portfolio, // <-- ADD OR EDIT THIS LINE
});