// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Final-project/', // Replace 'your-repo-name' with the actual name of your GitHub repo
});
