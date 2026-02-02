'use client';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div style={{ background: '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={() => signIn('google')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Entrar con Google
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: '#fff', height: '100vh', padding: '20px' }}>
      <h1>Hola, {session.user?.name}</h1>
      <button onClick={() => signOut()}>Cerrar sesión</button>
    </div>
  );
}
