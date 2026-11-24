// src/screens/HomeScreen.tsx

import Chapter01 from '@/components/story/chapters/Chapter01';
import Chapter02 from '@/components/story/chapters/Chapter02';
import Chapter03 from '@/components/story/chapters/Chapter03';
import Chapter04 from '@/components/story/chapters/Chapter04';
import Chapter05 from '@/components/story/chapters/Chapter05';
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
      <Chapter02 />
      <Chapter03 />
      <Chapter04 />
      <Chapter05 />
    </div>
  );
}
