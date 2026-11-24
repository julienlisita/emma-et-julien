import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next 16 génère/complète AGENTS.md à chaque `next dev` : désactivé (le fichier de référence est CLAUDE.md)
  agentRules: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Les illustrations sont servies en qualité 90 (voir components/story/Illustration.tsx)
    qualities: [90],
  },
};

export default nextConfig;
