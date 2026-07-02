import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track pointer position & interactive element hover state
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

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
    const colors = ["#06b6d4", "#8b5cf6", "#10b981", "#ec4899", "#3b82f6"];

    let lastX = -100;
    let lastY = -100;
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn new particles along the movement path
      const dx = mousePosition.x - lastX;
      const dy = mousePosition.y - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist > 2 && mousePosition.x >= 0) {
        const steps = Math.min(Math.floor(dist / 4), 6);
        for (let i = 0; i <= steps; i++) {
          const px = lastX + (dx * i) / steps;
          const py = lastY + (dy * i) / steps;

          particles.push({
            x: px + (Math.random() - 0.5) * 8,
            y: py + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5 - 0.5, // gentle float upward
            size: Math.random() * 4 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            life: 1,
            decay: Math.random() * 0.03 + 0.02,
          });
        }
        lastX = mousePosition.x;
        lastY = mousePosition.y;
      }

      // Render brush trail sparkles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.96; // shrink over time

        if (p.life <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;

        // Draw glowing sparkle dot
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
  }, [mousePosition.x, mousePosition.y]);

  // Hide custom cursor on touch/mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Fullscreen Canvas for Magic Glowing Brush Trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Main Core Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering ? 20 : 6),
          y: mousePosition.y - (isHovering ? 20 : 6),
          width: isHovering ? 40 : 12,
          height: isHovering ? 40 : 12,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.2,
        }}
        style={{
          background: isHovering
            ? "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.1) 70%, transparent 100%)"
            : "#06b6d4",
          boxShadow: isHovering
            ? "0 0 25px rgba(6,182,212,0.8), inset 0 0 10px rgba(139,92,246,0.6)"
            : "0 0 14px #06b6d4, 0 0 28px #8b5cf6",
          border: isHovering ? "1.5px solid rgba(6,182,212,0.8)" : "none",
        }}
      />
    </>
  );
};

export default CustomCursor;
