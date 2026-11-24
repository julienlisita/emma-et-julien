// src/app/not-found.tsx

import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Page non trouvée</h1>
      <p className="not-found__text">La page que vous cherchez n’existe pas ou a été déplacée.</p>
      <Link href="/" className="not-found__link">
        Retour à l’accueil
      </Link>
    </div>
  );
}
