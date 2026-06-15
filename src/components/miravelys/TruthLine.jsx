import React from 'react';
import { motion } from 'framer-motion';

const heights = { sm: 48, md: 96, lg: 160, xl: 220 };

export default function TruthLine({ size = 'md', animated = true, className = '' }) {
  const h = heights[size] || 96;

  return (
    <div className={`flex flex-col items-center ${className}`} style={{ position: 'relative' }}>
      <motion.div
        style={{
          width: 12, height: h, position: 'absolute', borderRadius: 99,
          background: 'linear-gradient(to top, rgba(212,175,90,0.15), rgba(212,175,90,0.04), transparent)',
          filter: 'blur(6px)', transformOrigin: 'bottom',
        }}
        initial={animated ? { scaleY: 0, opacity: 0 } : false}
        animate={animated ? { scaleY: 1, opacity: 1 } : false}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        style={{
          width: 1.5, height: h, borderRadius: 99,
          background: 'linear-gradient(to top, rgba(212,175,90,0.9), rgba(212,175,90,0.5), rgba(212,175,90,0.05), transparent)',
          boxShadow: '0 0 8px rgba(212,175,90,0.4), 0 0 20px rgba(212,175,90,0.15)',
          transformOrigin: 'bottom', position: 'relative', zIndex: 1,
        }}
        initial={animated ? { scaleY: 0, opacity: 0 } : false}
        animate={animated ? { scaleY: 1, opacity: 1 } : false}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,175,80,0.95), rgba(180,130,50,0.7))',
          boxShadow: '0 0 10px rgba(212,175,90,0.7), 0 0 4px rgba(212,175,90,1)',
          marginTop: 3, position: 'relative', zIndex: 1,
        }}
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
    </div>
  );
}
