// src/screens/HomeScreen.tsx

import Chapter01 from '@/components/story/chapters/Chapter01';
import ProgressThread from '@/components/story/ProgressThread';
import ScrollEngine from '@/components/story/ScrollEngine';
import '@/components/story/story.css';

export default function HomeScreen() {
  return (
    <div className="story">
      <h1 className="sr-only">Pour Emma</h1>
      <ScrollEngine />
      <ProgressThread />
      <Chapter01 />
    </div>
  );
}
