export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <h1 className="text-xl font-medium tracking-tight">Unified Hub</h1>
        <button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all active:scale-95">
          Conectar Google
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <section className="md:col-span-3 bg-[#0A0A0A] border border-zinc-900 rounded-[2.5rem] p-10 min-h-[500px] shadow-2xl">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Vista General</h2>
          </header>
          <div className="flex flex-col items-center justify-center h-[300px] text-zinc-800">
            <p className="text-lg font-medium">No hay eventos para mostrar</p>
            <p className="text-sm">Conecta tu cuenta para empezar</p>
          </div>
        </section>

        <aside className="bg-[#0A0A0A] border border-zinc-900 rounded-[2rem] p-6 h-fit">
          <h3 className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4">Cuentas Activas</h3>
          <div className="space-y-3">
            <div className="h-2 w-full bg-zinc-900 rounded-full animate-pulse"></div>
            <div className="h-2 w-2/3 bg-zinc-900 rounded-full animate-pulse"></div>
          </div>
        </aside>
      </main>
    </div>
  );
}
