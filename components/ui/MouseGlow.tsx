'use client';
import { useState, useEffect } from 'react';

export const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-opacity duration-300"
      style={{
        left: position.x - 192,
        top: position.y - 192,
        opacity: isVisible ? 0.08 : 0,
        background: 'radial-gradient(circle, rgba(232, 180, 166, 0.4) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  );
};