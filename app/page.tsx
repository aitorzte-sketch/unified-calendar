'use client'

import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Mi Calendario Unificado</h1>
      <button 
        onClick={() => signIn('google')}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Entrar con Google
      </button>
    </main>
  )
}
