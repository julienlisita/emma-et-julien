// src/app/(site)/page.tsx

import HomeScreen from '@/screens/HomeScreen';

export const metadata = {
  title: 'Emma & Julien',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeScreen />;
}
