// components/BackgroundJal.tsx
'use client';

import { useEffect } from 'react';

export default function BackgroundJal() {
  useEffect(() => {
    const rays = document.querySelectorAll('.black-ray');
    const interval = setInterval(() => {
      const randomRay = rays[Math.floor(Math.random() * rays.length)];
      randomRay.classList.add('active');
      setTimeout(() => randomRay.classList.remove('active'), 800);
    }, 1800 + Math.random() * 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      
      {/* BLACK GRID */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(#000000 1px, transparent 1px), 
                            linear-gradient(90deg, #000000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.07
        }}
      />

      {/* VERTICAL RAYS */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="black-ray absolute"
            style={{
              left: `${i * 5.55}%`,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, #000000 30%, #ffffff 50%, #000000 70%, transparent)',
              filter: 'blur(1.5px)',
              opacity: 0,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>

      {/* HORIZONTAL RAYS */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="black-ray absolute"
            style={{
              top: `${i * 7.14}%`,
              height: '4px',
              width: '100%',
              background: 'linear-gradient(to right, transparent, #000000 30%, #ffffff 50%, #000000 70%, transparent)',
              filter: 'blur(1.5px)',
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* SPARKS */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={`spark-${i}`}
            className="spark"
            style={{
              left: `${(i % 10) * 10 + Math.random() * 6}%`,
              top: `${Math.floor(i / 10) * 12 + Math.random() * 8}%`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .black-ray {
          transition: opacity 0.5s ease, box-shadow 0.5s ease;
        }

        .black-ray.active {
          opacity: 1;
          box-shadow: 
            0 0 20px #ffffff,
            0 0 40px #ffffff,
            0 0 60px rgba(255, 255, 255, 0.7),
            0 0 80px rgba(255, 255, 255, 0.5);
          animation: electricPulse 0.8s ease-out;
        }

        @keyframes electricPulse {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 0; transform: scale(1); }
        }

        .spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 12px #ffffff;
          animation: sparkBurst 2s infinite;
          animation-delay: ${Math.random() * 2.5}s;
        }

        @keyframes sparkBurst {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.6); box-shadow: 0 0 16px #ffffff, 0 0 24px #ffffff; }
        }
      `}</style>
    </div>
  );
}