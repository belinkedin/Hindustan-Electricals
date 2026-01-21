import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔴 REQUIRED FOR GITHUB PAGES
  base: "/Hindustan-Electricals/",
});
