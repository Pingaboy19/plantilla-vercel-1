import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Bienvenido a Mi Landing Page
          </h1>
          <p className="text-xl text-white mb-8">
            Esta es una landing page creada con Next.js y Tailwind CSS
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            ¡Comenzar!
          </button>
        </div>
      </div>
    </main>
  );
} 