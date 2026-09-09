import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anciennes adresses éventuelles → adresses canoniques du site
      { source: "/contact", destination: "/demande-de-devis", permanent: true },
      { source: "/devis", destination: "/demande-de-devis", permanent: true },
      { source: "/zones", destination: "/zones-intervention", permanent: true },
    ];
  },
};

export default nextConfig;
