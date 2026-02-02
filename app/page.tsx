'use client'; // Esta línea es VITAL para que el botón funcione

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main style={{ padding: '50px', backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <h1>Mi Calendario Unificado</h1>
      
      <button 
        onClick={() => signIn('google')} 
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Entrar con Google
      </button>
    </main>
  );
}
