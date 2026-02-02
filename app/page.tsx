'use client';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [view, setView] = useState('mes');
  const [events, setEvents] = useState([]);

  // Cargar eventos reales de Google
  useEffect(() => {
    if (session) {
      fetch('/api/events')
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setEvents(data);
        })
        .catch((err) => console.error("Error cargando eventos:", err));
    }
  }, [session]);

  if (!session) {
    return (
      <main style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <button onClick={() => signIn('google')} style={{ backgroundColor: '#fff', color: '#000', padding: '15px 30px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
          Entrar con Google
        </button>
      </main>
    );
  }

  return (
    <div style={{ display: 'flex', backgroundColor: '#000', color: '#FFF', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '260px', backgroundColor: '#1c1c1e', padding: '20px', borderRight: '1px solid #38383a' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Calendarios</h2>
        <p style={{ fontSize: '14px', color: '#8e8e93' }}>{session.user?.email}</p>
        <button onClick={() => signOut()} style={{ color: '#ff453a', background: 'none', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Cerrar sesión</button>
      </aside>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '20px', borderBottom: '1px solid #38383a', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Febrero 2026</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['dia', 'semana', 'mes'].map((v) => (
              <button key={v} onClick={() => setView(v)} style={{ backgroundColor: view === v ? '#636366' : '#323234', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '6px', cursor: 'pointer' }}>
                {v}
              </button>
            ))}
          </div>
        </header>

        <section style={{ flex: 1, padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', backgroundColor: '#38383a' }}>
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: '#000', minHeight: '100px', padding: '10px' }}>
              <span style={{ fontSize: '14px' }}>{i + 1}</span>
              {/* Aquí aparecerán tus eventos de Google */}
              {events.filter((e: any) => new Date(e.start.dateTime || e.start.date).getDate() === i + 1).map((e: any) => (
                <div key={e.id} style={{ backgroundColor: '#0a84ff', fontSize: '10px', padding: '2px', borderRadius: '4px', marginTop: '4px' }}>
                  {e.summary}
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
