'use client';

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main style={{ padding: '50px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: 'black' }}>Mi Calendario Unificado</h1>
      
      {/* Usamos una función de flecha clara para asegurar que se ejecute el clic */}
      <button 
        onClick={() => signIn('google')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Entrar con Google
      </button>
    </main>
  );
}
