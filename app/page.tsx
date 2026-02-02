'use client'; 

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Mi Calendario Unificado</h1>
      <button onClick={() => signIn('google')}>
        Entrar con Google
      </button>
    </main>
  );
}
