/**
 * Static export config tailored for GitHub Pages.
 *
 * `NEXT_PUBLIC_BASE_PATH` is injected by the deploy workflow with the repo
 * name (e.g. `/Sitefishing`) so all asset URLs resolve correctly under
 * `https://<user>.github.io/<repo>/`. Locally it stays empty.
 *
 * @type {import('next').NextConfig}
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
