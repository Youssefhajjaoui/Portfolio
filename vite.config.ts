import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: CI sets VITE_BASE=./ so asset URLs are relative (./assets/...) and work under /RepoName/.
// Local dev: defaults to "/" (VITE_BASE unset).
// Root user site (username.github.io repo): build with VITE_BASE=/
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
});
