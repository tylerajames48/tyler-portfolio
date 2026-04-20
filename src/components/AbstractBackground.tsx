'use client';

import { useEffect, useRef } from 'react';

export default function AbstractBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Organic blob class
    class Blob {
      x: number;
      y: number;
      baseRadius: number;
      color: string;
      speedX: number;
      speedY: number;
      noiseOffset: number;
      rotationSpeed: number;

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.baseRadius = radius;
        this.color = color;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.noiseOffset = Math.random() * 1000;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002;
      }

      update(time: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges with padding
        const padding = this.baseRadius;
        if (this.x < padding || this.x > canvas!.width - padding) {
          this.speedX *= -1;
        }
        if (this.y < padding || this.y > canvas!.height - padding) {
          this.speedY *= -1;
        }
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.save();
        ctx.translate(this.x, this.y);

        // Create organic shape using bezier curves
        ctx.beginPath();
        const points = 6;
        const angleStep = (Math.PI * 2) / points;

        for (let i = 0; i <= points; i++) {
          const angle = i * angleStep;
          const noise = Math.sin(time * 0.001 + this.noiseOffset + i * 0.5) * 0.3 + 1;
          const radius = this.baseRadius * noise;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            const prevAngle = (i - 1) * angleStep;
            const prevNoise = Math.sin(time * 0.001 + this.noiseOffset + (i - 1) * 0.5) * 0.3 + 1;
            const prevRadius = this.baseRadius * prevNoise;
            const prevX = Math.cos(prevAngle) * prevRadius;
            const prevY = Math.sin(prevAngle) * prevRadius;

            const cpX = (prevX + x) / 2 + Math.sin(time * 0.0008 + i) * 20;
            const cpY = (prevY + y) / 2 + Math.cos(time * 0.0008 + i) * 20;

            ctx.quadraticCurveTo(cpX, cpY, x, y);
          }
        }

        ctx.closePath();

        // Gradient fill
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.baseRadius * 1.5);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color.replace('0.', '0.0'));

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
      }
    }

    // Create blobs with warm sunset colors
    const blobs: Blob[] = [
      new Blob(canvas.width * 0.2, canvas.height * 0.3, 180, 'rgba(212, 165, 154, 0.15)'), // coral
      new Blob(canvas.width * 0.8, canvas.height * 0.2, 220, 'rgba(193, 124, 103, 0.12)'), // terracotta
      new Blob(canvas.width * 0.5, canvas.height * 0.7, 200, 'rgba(245, 230, 220, 0.18)'), // peach
      new Blob(canvas.width * 0.15, canvas.height * 0.8, 150, 'rgba(193, 124, 103, 0.1)'), // terracotta
      new Blob(canvas.width * 0.85, canvas.height * 0.6, 170, 'rgba(212, 165, 154, 0.12)'), // coral
    ];

    const animate = () => {
      time += 16;

      // Clear canvas completely each frame
      ctx.fillStyle = '#FDF8F3';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        blob.update(time);
        blob.draw(ctx, time);
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = '#FDF8F3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
