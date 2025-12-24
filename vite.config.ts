import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), svgr(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // --- AJUSTE FEITO AQUI ---
  build: {
    // "es2015" garante compatibilidade com iOS antigos e WebViews (WhatsApp/Instagram)
    target: "es2015", 
    outDir: "dist",
    // Opcional: minificar com 'terser' as vezes ajuda em bugs de safari, 
    // mas o padrão 'esbuild' costuma ser suficiente com o target acima.
  }
}));
