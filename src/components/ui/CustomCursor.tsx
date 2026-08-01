'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function CustomCursor() {
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
      } else if (target.closest('button, a, input, select')) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-transform duration-300 ease-out border border-accent-solar/40 backdrop-blur-[2px] ${
          isHovered
            ? 'w-20 h-20 -ml-10 -mt-10 bg-accent-solar/15 scale-110 shadow-lg shadow-accent-solar/20'
            : 'w-8 h-8 -ml-4 -mt-4 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-widest uppercase font-semibold text-accent-solar animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>

      {/* Core Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-accent-solar transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isHovered && cursorText ? 0 : 1,
        }}
      />
    </div>
  );
}
