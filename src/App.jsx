import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function App() {
  const container = useRef();

  useGSAP(() => {
    // Animation simple sur le titre et le texte
    gsap.from(".anim-titre", { 
      y: -5000, 
      opacity: 0, 
      duration: 2, 
      ease: "power3.out" 
    });
  }, { scope: container }); // L'option 'scope' est une bonne pratique avec @gsap/react

  return (
    <main ref={container} className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
      <h1 className="anim-titre text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Portfolio Prêt !
      </h1>
      <p className="mt-4 text-slate-400">Vite + React + Tailwind + GSAP</p>
    </main>
  );
}