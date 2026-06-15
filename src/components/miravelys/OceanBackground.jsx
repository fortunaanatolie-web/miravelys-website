import React from 'react';
import { motion } from 'framer-motion';

export default function OceanBackground({ children, showHorizon = false, showMoon = false, intensity = 'normal' }) {
  return (
    <div className="relative min-h-screen ocean-gradient overflow-hidden" style={{ colorScheme: 'dark' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(20,60,130,0.18) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(10,35,90,0.22) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(30,55,100,0.12) 0%, transparent 70%)' }} />
      </div>

      {showHorizon && (
        <div className="absolute left-0 right-0 top-[38%] pointer-events-none">
          <div className="horizon-line h-px" />
          <div className="h-px mt-px opacity-30 horizon-line" style={{ transform: 'scaleX(0.6)' }} />
        </div>
      )}

      {showMoon && (
        <div className="absolute top-20 right-16 pointer-events-none">
          <motion.div
            className="absolute -inset-8 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(240,235,210,0.04) 0%, transparent 70%)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-8 h-8 rounded-full relative"
            style={{ background: 'radial-gradient(circle at 35% 35%, rgba(245,240,225,0.55) 0%, rgba(220,215,200,0.25) 60%, rgba(200,195,180,0.1) 100%)' }}
            animate={{ opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute top-1 right-0.5 w-6 h-6 rounded-full"
              style={{ background: 'rgba(8,14,28,0.55)' }} />
          </motion.div>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-48"
          animate={{ x: [0, -24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C180,40 360,120 540,75 C720,30 900,110 1080,70 C1260,30 1380,90 1440,80 L1440,200 L0,200 Z"
              fill="rgba(20,70,140,0.08)" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-36"
          animate={{ x: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,110 C240,70 480,150 720,100 C960,55 1200,130 1440,105 L1440,200 L0,200 Z"
              fill="rgba(60,180,160,0.04)" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,40 C360,20 720,60 1080,35 C1260,22 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="rgba(100,180,200,0.03)" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute inset-0 fog-overlay pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }}>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px rounded-full bg-white"
            style={{
              left: `${[8, 15, 28, 35, 52, 60, 68, 75, 82, 88, 92, 97][i]}%`,
              top: `${[5, 12, 3, 18, 8, 2, 15, 6, 10, 3, 14, 7][i]}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative z-10" style={{ color: 'hsl(210 20% 88%)' }}>
        {children}
      </div>
    </div>
  );
}
