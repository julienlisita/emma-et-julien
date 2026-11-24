// src/components/story/ProgressThread.tsx

import './ProgressThread.css';

/** Fil de progression or : seul élément d'interface. --g est écrit par ScrollEngine. */
export default function ProgressThread() {
  return (
    <div className="progress-thread" data-progress aria-hidden="true">
      <i />
    </div>
  );
}
