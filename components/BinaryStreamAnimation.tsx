// components/BinaryStreamAnimation.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes'; // <-- 1. Import the useTheme hook

const BinaryStreamAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme(); // <-- 2. Get the current theme ('light' or 'dark')

  // 3. We re-run this effect whenever the 'theme' changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 4. Read the theme colors from our CSS variables
    const style = getComputedStyle(canvas);
    const bgColor = style.getPropertyValue('--canvas-bg');
    const textColor = style.getPropertyValue('--canvas-text');

    let width = (canvas.width = 300);
    let height = (canvas.height = 200);

    const columns = Math.floor(width / 20);
    const ypos: number[] = Array(columns).fill(0);

    const matrix = () => {
      if (!ctx) return;
      
      // 5. Use the theme colors for drawing
      ctx.fillStyle = bgColor; // Use background color from CSS
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = textColor; // Use text color from CSS
      ctx.font = '15pt monospace';

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() > 0.5 ? 48 : 49);
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + 20;
        }
      });
    };

    const intervalId = setInterval(matrix, 50);

    return () => clearInterval(intervalId);

  }, [theme]); // <-- Add 'theme' here to re-run when it changes

  return <canvas ref={canvasRef} />;
};

export default BinaryStreamAnimation;