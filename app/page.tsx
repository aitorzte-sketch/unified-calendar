'use client';

import { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [view, setView] = useState<'mes' | 'semana' | 'dia'>('mes');

  // Si no hay sesión, mostramos la pantalla de entrada elegante
  if (!session) {
    return (
      <main style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '-apple-system, sans-serif' }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px' }}>Calendario Hub</h1>
          <button onClick={() => signIn('google')} style={{ backgroundColor: '#1c1c1e', color: 'white', padding: '15px 30px', borderRadius: '12px', border: '1px solid #38383a', cursor: 'pointer', fontSize: '18px' }}>
            Añadir cuenta de Google
          </button>
        </div>
      </main>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      backgroundColor: '#000', 
      color: '#FFF', 
      height: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
    }}>
      {/* SIDEBAR (Estilo iPad) */}
      <aside style={{ width: '260px', backgroundColor: '#1c1c1e', padding: '20px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #38383a' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '30px' }}>Calendarios</h2>
        
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '12px', color: '#8e8e93', textTransform: 'uppercase', marginBottom: '10px' }}>Cuentas</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0a84ff' }}></div>
              <span style={{ fontSize: '15px' }}>{session.user?.email}</span>
            </div>
          </div>
          <button style={{ color: '#0a84ff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px', padding: 0 }}>+ Añadir otra cuenta</button>
        </div>

        <button onClick={() => signOut()} style={{ color: '#ff453a', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>Cerrar sesión</button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* BARRA DE NAVEGACIÓN SUPERIOR */}
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #38383a' }}>
          <div>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Febrero <span style={{ fontWeight: 'normal', color: '#8e8e93' }}>2026</span></span>
          </div>
          
          <div style
