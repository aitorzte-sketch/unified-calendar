'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main style={{ padding: '50px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh', color: 'black' }}>
        <h1>Bienvenido, {session.user?.name}</h1>
        <p>Has iniciado sesión con: {session.user?.email}</p>
        <button onClick={() => signOut()} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
          Cerrar sesión
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: '50px', textAlign: 'center', backgroundColor: 'white', minHeight: '100vh', color: 'black' }}>
      <h1>Mi Calendario Unificado</h1>
      <button 
        onClick={() => signIn('google')} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Entrar con Google
      </button>
    </main>
  );
}
