import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Zero-latency direct DOM update for pointer tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        // Instantaneous position update with ZERO css transition delay on transform
        cursorRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
      if (ringRef.current) {
        const offset = isHovering ? 22 : 16;
        ringRef.current.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
      }

      const target = e.target as HTMLElement;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button'], .cursor-pointer");
        setIsHovering(!!interactive);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Canvas magic brush particle trail setup
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
    const colors = ["#06b6d4", "#8b5cf6", "#10b981", "#ec4899", "#60a5fa"];

    let lastX = -100;
    let lastY = -100;
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const currentX = mouseRef.current.x;
      const currentY = mouseRef.current.y;

      // Spawn glowing magic brush stardust along movement path
      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist > 1 && currentX >= 0) {
        const steps = Math.min(Math.floor(dist / 2.5), 10);
        for (let i = 0; i <= steps; i++) {
          const px = lastX + (dx * i) / steps;
          const py = lastY + (dy * i) / steps;

          particles.push({
            x: px + (Math.random() - 0.5) * 8,
            y: py + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 0.5, // magical float upward
            size: Math.random() * 4.5 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            life: 1,
            decay: Math.random() * 0.03 + 0.015,
          });
        }
        lastX = currentX;
        lastY = currentY;
      }

      // Render stardust brush trail
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.95;

        if (p.life <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 15;
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
      {/* Fullscreen Canvas for Magic Brush Stardust Trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Instant Precision Core Tip Dot (Zero CSS transform latency) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4,0_0_20px_#8b5cf6]"
      />

      {/* Outer Holographic Halo Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-[width,height,background,border-color] duration-200 ease-out flex items-center justify-center"
        style={{
          width: isHovering ? "44px" : "32px",
          height: isHovering ? "44px" : "32px",
          background: isHovering
            ? "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(139,92,246,0.1) 70%, transparent 100%)"
            : "transparent",
          borderColor: isHovering ? "rgba(6,182,212,0.9)" : "rgba(6,182,212,0.4)",
        }}
      />
    </>
  );
};

export default CustomCursor;
