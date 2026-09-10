import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sem API routes nem lógica de servidor: dá pra exportar como site 100%
  // estático e hospedar de graça em qualquer lugar (Vercel, Netlify, GitHub Pages...).
  output: "export",
};

export default nextConfig;
