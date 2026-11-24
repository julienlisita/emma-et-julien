// src/app/(site)/page.tsx

import HomeScreen from '@/screens/HomeScreen';

export const metadata = {
  title: 'Pour Emma',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeScreen />;
}
