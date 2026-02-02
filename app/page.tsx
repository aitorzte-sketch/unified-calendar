'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Reloj en tiempo real para el estilo iPad
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (status === "loading") return <div className="flex h-screen items-center justify-center bg-black text-white">Cargando...</div>;

  if (!session) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-black text-white p-6 text-center">
        <h1 className="text-5xl font-bold mb-8 tracking-tight">Unified Calendar</h1>
        <p className="text-gray-400 mb-10 max-w-md text-lg">Tu centro de mando personal. Conecta tus calendarios con un solo toque.</p>
        <button 
          onClick={() => signIn('google')}
          className="bg-white text-black px-8 py-4 rounded-full font-semibold text-xl hover:bg-gray-200 transition-all shadow-lg shadow-white/10"
        >
          Empezar con Google
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans p-6 md:p-10">
      {/* Header Estilo iPad */}
      <header className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-orange-500 font-medium text-xl mb-1 uppercase tracking-widest">
            {currentTime.toLocaleDateString('es-ES', { weekday: 'long' })}
          </h2>
          <h1 className="text-6xl font-bold italic">
            {currentTime.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 text-right">
              <p className="font-bold text-white">{session.user?.name}</p>
              <p className="text-sm">{session.user?.email}</p>
            </span>
            <img src={session.user?.image || ''} className="w-12 h-12 rounded-full border-2 border-orange-500" alt="Profile" />
          </div>
          <button onClick={() => signOut()} className="text-xs text-gray-500 hover:text-white underline">Cerrar Sesión</button>
        </div>
      </header>

      {/* Grid de Contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna de Eventos Próximos */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#1C1C1E] rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Próximos Eventos
            </h3>
            <div className="space-y-4">
              {/* Aquí es donde se cargarán tus eventos de Google más adelante */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-colors">
                <div>
                  <p className="font-semibold text-lg">Conexión establecida</p>
                  <p className="text-gray-500">Base de datos Neon + Google Auth activa</p>
                </div>
                <p className="text-orange-500 font-mono">AHORA</p>
              </div>
              <p className="text-gray-600 text-center py-10 italic">Cargando sincronización con Google Calendar...</p>
            </div>
          </section>
        </div>

        {/* Sidebar de Widgets */}
        <div className="space-y-8">
          <section className="bg-orange-500 rounded-3xl p-8 text-black">
            <h3 className="text-sm font-black uppercase tracking-tighter mb-2">Estado del Sistema</h3>
            <p className="text-4xl font-bold leading-none mb-4 italic">TODO EN ORDEN</p>
            <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
              <div className="h-full bg-black w-[100%]"></div>
            </div>
          </section>

          <section className="bg-[#1C1C1E] rounded-3xl p-8 border border-white/5">
            <h3 className="text-gray-400 text-sm font-bold uppercase mb-4">Notas Rápidas</h3>
            <textarea 
              className="bg-transparent w-full h-32 outline-none resize-none text-gray-300 placeholder:text-gray-700" 
              placeholder="Escribe algo aquí..."
            ></textarea>
          </section>
        </div>
      </div>
    </div>
  );
}
