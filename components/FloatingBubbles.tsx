"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  wobble: number;
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Genera bolle con posizioni casuali ma deterministiche (evita hydration mismatch)
    const generated: Bubble[] = Array.from({ length: 14 }, (_, i) => {
      const seed = i * 137.508; // golden angle distribution
      return {
        id: i,
        size: 8 + (i % 5) * 7,               // 8, 15, 22, 29, 36 px ciclico
        left: ((seed * 3.7) % 90) + 5,        // 5%–95%
        delay: (i * 0.7) % 9,                 // 0–9s stagger
        duration: 7 + (i % 4) * 2.5,          // 7–16.5s
        wobble: (i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 4), // ±5–13px wobble
      };
    });
    setBubbles(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-60px",
            borderRadius: "50%",
            // Effetto bolla di sapone 3D
            background: `radial-gradient(
              circle at 32% 28%,
              rgba(255,255,255,0.72) 0%,
              rgba(255,255,255,0.25) 22%,
              rgba(160,230,180,0.12) 50%,
              rgba(37,162,68,0.10) 78%,
              transparent 100%
            )`,
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: [
              `inset -${Math.round(b.size * 0.18)}px -${Math.round(b.size * 0.18)}px ${Math.round(b.size * 0.35)}px rgba(255,255,255,0.22)`,
              `inset ${Math.round(b.size * 0.1)}px ${Math.round(b.size * 0.1)}px ${Math.round(b.size * 0.2)}px rgba(37,162,68,0.08)`,
              `0 2px ${Math.round(b.size * 0.4)}px rgba(37,162,68,0.07)`,
            ].join(", "),
            animation: `bubble-global ${b.duration}s ${b.delay}s ease-in infinite`,
            // CSS variables per il wobble individuale
            ["--bwx" as string]: `${b.wobble}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes bubble-global {
          0%   { transform: translateY(0px)      translateX(0px)        scale(1);    opacity: 0; }
          5%   { opacity: 0.55; }
          30%  { transform: translateY(-28vh)    translateX(var(--bwx)) scale(1.04); opacity: 0.45; }
          60%  { transform: translateY(-58vh)    translateX(0px)        scale(0.96); opacity: 0.30; }
          85%  { transform: translateY(-85vh)    translateX(calc(var(--bwx) * -0.6)) scale(0.85); opacity: 0.15; }
          100% { transform: translateY(-105vh)   translateX(0px)        scale(0.5);  opacity: 0; }
        }
      `}</style>
    </div>
  );
}
