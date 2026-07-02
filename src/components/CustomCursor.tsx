import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. Mouse move handler updating ref and direct DOM position for zero latency
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        // Direct DOM update avoids React re-render lag
        const offset = isHovering ? 20 : 7;
        cursorRef.current.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
      }

      const target = e.target as HTMLElement;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button'], .cursor-pointer");
        setIsHovering(!!interactive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 2. Canvas setup for magic glowing stardust brush trail
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    interface TrailParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      decay: number;
    }

    const particles: TrailParticle[] = [];
    const colors = ["#06b6d4", "#8b5cf6", "#10b981", "#ec4899", "#3b82f6"];

    let lastX = -100;
    let lastY = -100;
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const currentX = mouseRef.current.x;
      const currentY = mouseRef.current.y;

      // Spawn glowing magic brush sparkles along path
      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist > 1.5 && currentX >= 0) {
        const steps = Math.min(Math.floor(dist / 3), 8);
        for (let i = 0; i <= steps; i++) {
          const px = lastX + (dx * i) / steps;
          const py = lastY + (dy * i) / steps;

          particles.push({
            x: px + (Math.random() - 0.5) * 10,
            y: py + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 1.8,
            vy: (Math.random() - 0.5) * 1.8 - 0.4, // gentle float up
            size: Math.random() * 4.5 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            life: 1,
            decay: Math.random() * 0.028 + 0.015,
          });
        }
        lastX = currentX;
        lastY = currentY;
      }

      // Render brush sparkles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.96;

        if (p.life <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  // Hide on touch mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Fullscreen Canvas for Magic Brush Trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Main Core Pointer Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-75 ease-out flex items-center justify-center"
        style={{
          width: isHovering ? "40px" : "14px",
          height: isHovering ? "40px" : "14px",
          background: isHovering
            ? "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.1) 70%, transparent 100%)"
            : "#06b6d4",
          boxShadow: isHovering
            ? "0 0 30px rgba(6,182,212,0.9), inset 0 0 12px rgba(139,92,246,0.7)"
            : "0 0 15px #06b6d4, 0 0 30px #8b5cf6, 0 0 45px #10b981",
          border: isHovering ? "1.5px solid rgba(6,182,212,0.9)" : "none",
        }}
      />
    </>
  );
};

export default CustomCursor;
