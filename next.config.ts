import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next 16 génère/complète AGENTS.md à chaque `next dev` : désactivé (le fichier de référence est CLAUDE.md)
  agentRules: false,
};

export default nextConfig;
