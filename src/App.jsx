import { Suspense, useEffect } from "react";
import "./App.css";
import EarthScene from "./EarthScene";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <main
      className="relative bg-black text-white overflow-hidden"
    >
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10">
        <Canvas>
          <Suspense fallback={null}>
            <EarthScene />
          </Suspense>
        </Canvas>
      </div>

      <section
        id="hero_main"
        className="relative h-screen pb-30 flex flex-col items-center justify-center text-center px-6 z-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          One Planet.
          <br />
          Infinite Possibilities.
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-white/75">
          Intelligence that moves as fast as the world around you.
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition cursor-pointer">
          Explore the Future
        </button>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section id="about" className="relative h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Built for a Living World
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Our technology adapts, learns, and evolves with the planet — helping
            humanity solve complex global challenges through real-time
            intelligence.
          </p>
        </div>
      </section>

      {/* 🚀 SECTION 3 — FEATURES */}
      <section id="features" className="relative min-h-screen px-6 py-32 z-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          What Powers the Future
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Real-Time Insight</h3>
            <p className="text-white/70">
              Analyze global data streams instantly and respond with precision.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Adaptive Systems</h3>
            <p className="text-white/70">
              Intelligence that evolves as environments and demands change.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Global Scale</h3>
            <p className="text-white/70">
              Designed to operate seamlessly across the entire planet.
            </p>
          </div>
        </div>
      </section>

      {/* 🌠 SECTION 4 — VISUAL BREAK */}
      <section id="visual_break" className="relative h-screen flex items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          The Future is Already in Motion
        </h2>
      </section>

      {/* 🔚 SECTION 5 — CTA FOOTER */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Join the Next Evolution
        </h2>
        <p className="text-white/70 mb-10 max-w-xl">
          Be part of the movement shaping tomorrow’s intelligent world.
        </p>
        <button className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition cursor-pointer">
          Get Started
        </button>
      </section>
    </main>
  );
}

export default App;
