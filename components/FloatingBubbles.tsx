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
        size: 30 + (i % 6) * 18,             // 30, 48, 66, 84, 102, 120 px
        left: ((seed * 3.7) % 88) + 6,        // 6%–94%
        delay: (i * 0.8) % 10,
        duration: 9 + (i % 5) * 3,            // 9–21s
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
            background: `radial-gradient(
              circle at 32% 28%,
              rgba(255,255,255,0.65) 0%,
              rgba(255,255,255,0.20) 20%,
              rgba(160,230,180,0.10) 50%,
              rgba(37,162,68,0.08) 75%,
              transparent 100%
            )`,
            border: `${Math.max(1, Math.round(b.size * 0.025))}px solid rgba(255,255,255,0.40)`,
            boxShadow: [
              `inset -${Math.round(b.size * 0.15)}px -${Math.round(b.size * 0.15)}px ${Math.round(b.size * 0.3)}px rgba(255,255,255,0.18)`,
              `inset ${Math.round(b.size * 0.08)}px ${Math.round(b.size * 0.08)}px ${Math.round(b.size * 0.15)}px rgba(37,162,68,0.07)`,
              `0 4px ${Math.round(b.size * 0.5)}px rgba(37,162,68,0.06)`,
            ].join(", "),
            animation: `bubble-global ${b.duration}s ${b.delay}s ease-in infinite`,
            ["--bwx" as string]: `${b.wobble}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes bubble-global {
          0%   { transform: translateY(0px)    translateX(0px)                    scale(1);    opacity: 0; }
          6%   { opacity: 0.50; }
          30%  { transform: translateY(-28vh)  translateX(var(--bwx))             scale(1.04); opacity: 0.42; }
          60%  { transform: translateY(-58vh)  translateX(0px)                    scale(0.96); opacity: 0.28; }
          85%  { transform: translateY(-84vh)  translateX(calc(var(--bwx) * -0.5)) scale(0.88); opacity: 0.14; }
          100% { transform: translateY(-106vh) translateX(0px)                    scale(0.6);  opacity: 0; }
        }
      `}</style>
    </div>
  );
}
