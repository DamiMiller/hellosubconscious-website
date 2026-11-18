import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/programs", destination: "/program", permanent: true }];
  },
};

export default nextConfig;
