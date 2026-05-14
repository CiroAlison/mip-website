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
    const generated: Bubble[] = Array.from({ length: 16 }, (_, i) => {
      const seed = i * 137.508;
      return {
        id: i,
        size: 30 + (i % 6) * 18,
        left: ((seed * 3.7) % 88) + 6,
        delay: (i * 0.8) % 10,
        duration: 9 + (i % 5) * 3,
        wobble: (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8),
      };
    });
    setBubbles(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 40 }}
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-120px",
            borderRadius: "50%",
            /*
             * Gradiente con verde marcato nel corpo della bolla:
             * - riflesso bianco in alto a sinistra → effetto sfera 3D
             * - verde medio/scuro nel corpo → visibile su sfondi bianchi
             * mix-blend-mode: multiply fa sì che su bianco il verde risalti,
             * su sfondi verdi scuri la bolla si fonde diventando quasi trasparente.
             */
            background: `radial-gradient(
              circle at 32% 28%,
              rgba(255,255,255,0.82) 0%,
              rgba(200,245,215,0.55) 18%,
              rgba(100,200,140,0.40) 40%,
              rgba(37,162,68,0.28) 65%,
              rgba(20,120,50,0.12) 85%,
              transparent 100%
            )`,
            border: `${Math.max(1, Math.round(b.size * 0.028))}px solid rgba(37,162,68,0.35)`,
            boxShadow: [
              `inset -${Math.round(b.size * 0.14)}px -${Math.round(b.size * 0.14)}px ${Math.round(b.size * 0.28)}px rgba(255,255,255,0.22)`,
              `inset ${Math.round(b.size * 0.07)}px ${Math.round(b.size * 0.07)}px ${Math.round(b.size * 0.14)}px rgba(37,162,68,0.12)`,
              `0 4px ${Math.round(b.size * 0.45)}px rgba(37,162,68,0.10)`,
            ].join(", "),
            mixBlendMode: "multiply",
            animation: `bubble-global ${b.duration}s ${b.delay}s ease-in infinite`,
            ["--bwx" as string]: `${b.wobble}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes bubble-global {
          0%   { transform: translateY(0px)    translateX(0px)                     scale(1);    opacity: 0; }
          6%   { opacity: 0.38; }
          30%  { transform: translateY(-28vh)  translateX(var(--bwx))              scale(1.04); opacity: 0.32; }
          60%  { transform: translateY(-58vh)  translateX(0px)                     scale(0.96); opacity: 0.22; }
          85%  { transform: translateY(-84vh)  translateX(calc(var(--bwx) * -0.5)) scale(0.88); opacity: 0.10; }
          100% { transform: translateY(-106vh) translateX(0px)                     scale(0.6);  opacity: 0; }
        }
      `}</style>
    </div>
  );
}
