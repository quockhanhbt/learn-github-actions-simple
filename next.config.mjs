/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out
  // No server, no API, no database - easy to deploy (e.g. GitHub Pages).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
