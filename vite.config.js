import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/50-nam-giai-phong-135-nam-ngay-sinh-bac-ho",
});
