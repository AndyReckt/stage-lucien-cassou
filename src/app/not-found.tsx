import "@/styles/not-found.css";

import React from 'react';

export default function NotFound() {
    return (
        <div className="not-found flex justify-center items-center h-screen">
            <h1>404 - Page introuvable</h1>
            {// eslint-disable-next-line react/no-unescaped-entities
            <p>La page que vous cherchez n'a pas pu être trouvée.</p>
            }
        </div>
    );
}