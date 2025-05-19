import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/135-Nam-Ngay-Sinh-Chu-Tich-Ho-Chi-Minh/",
});
