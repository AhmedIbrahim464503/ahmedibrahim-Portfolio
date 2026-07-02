import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    // Mouse Tracking for 3D Camera Parallax
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - width / 2) * 0.15;
      mouse.targetY = (e.clientY - height / 2) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D Point Interface
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    // 3D Shape Object Interface
    interface Shape3D {
      vertices: Point3D[];
      edges: [number, number][];
      centerX: number;
      centerY: number;
      centerZ: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      scale: number;
      color: string;
      glowColor: string;
      alpha: number;
    }

    // Helper: Create 3D Cube Wireframe
    const createCube = (scale: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const v: Point3D[] = [
        { x: -1, y: -1, z: -1 },
        { x: 1, y: -1, z: -1 },
        { x: 1, y: 1, z: -1 },
        { x: -1, y: 1, z: -1 },
        { x: -1, y: -1, z: 1 },
        { x: 1, y: -1, z: 1 },
        { x: 1, y: 1, z: 1 },
        { x: -1, y: 1, z: 1 },
      ].map((p) => ({ x: p.x * scale, y: p.y * scale, z: p.z * scale }));

      const e: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back face
        [4, 5], [5, 6], [6, 7], [7, 4], // front face
        [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
      ];
      return { vertices: v, edges: e };
    };

    // Helper: Create 3D Octahedron Wireframe
    const createOctahedron = (scale: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const v: Point3D[] = [
        { x: 0, y: -1.4, z: 0 },
        { x: 0, y: 1.4, z: 0 },
        { x: -1, y: 0, z: -1 },
        { x: 1, y: 0, z: -1 },
        { x: 1, y: 0, z: 1 },
        { x: -1, y: 0, z: 1 },
      ].map((p) => ({ x: p.x * scale, y: p.y * scale, z: p.z * scale }));

      const e: [number, number][] = [
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 3], [3, 4], [4, 5], [5, 2],
      ];
      return { vertices: v, edges: e };
    };

    // Helper: Create 3D Cyber Ring (Polygonal Ring)
    const createRing = (scale: number, segments: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const v: Point3D[] = [];
      const e: [number, number][] = [];
      for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        v.push({
          x: Math.cos(theta) * scale * 1.5,
          y: Math.sin(theta) * scale * 1.5,
          z: (i % 2 === 0 ? -0.2 : 0.2) * scale,
        });
        e.push([i, (i + 1) % segments]);
      }
      return { vertices: v, edges: e };
    };

    const shapes: Shape3D[] = [];
    const colors = [
      { color: "6, 182, 212", glow: "#06b6d4" },    // Cyan
      { color: "139, 92, 246", glow: "#8b5cf6" },   // Violet
      { color: "16, 185, 129", glow: "#10b981" },   // Emerald
      { color: "59, 130, 246", glow: "#3b82f6" },    // Electric Blue
    ];

    const shapeCount = window.innerWidth < 768 ? 12 : 25;

    for (let i = 0; i < shapeCount; i++) {
      const type = i % 3;
      const baseScale = Math.random() * 45 + 30;
      const geom = type === 0 ? createCube(baseScale) : type === 1 ? createOctahedron(baseScale) : createRing(baseScale, 12);
      const chosenColor = colors[i % colors.length];

      shapes.push({
        vertices: geom.vertices,
        edges: geom.edges,
        centerX: (Math.random() - 0.5) * width * 1.8,
        centerY: (Math.random() - 0.5) * height * 2.5,
        centerZ: Math.random() * 600 + 200,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        speedX: (Math.random() - 0.5) * 0.015,
        speedY: (Math.random() - 0.5) * 0.015,
        speedZ: (Math.random() - 0.5) * 0.01,
        scale: 1,
        color: chosenColor.color,
        glowColor: chosenColor.glow,
        alpha: Math.random() * 0.45 + 0.25,
      });
    }

    // Floating Particles field
    const floatingOrbs: Array<{ x: number; y: number; z: number; size: number; color: string; speed: number }> = [];
    for (let i = 0; i < 70; i++) {
      floatingOrbs.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 3,
        z: Math.random() * 800 + 100,
        size: Math.random() * 3 + 1,
        color: colors[i % colors.length].color,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    // Rotate 3D point around origin
    const rotate3D = (p: Point3D, rx: number, ry: number, rz: number): Point3D => {
      // X axis
      let y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      let z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
      // Y axis
      let x2 = p.x * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -p.x * Math.sin(ry) + z1 * Math.cos(ry);
      // Z axis
      let x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);

      return { x: x3, y: y3, z: z2 };
    };

    const fov = 450;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw Floating Volumetric Ambient Lights
      const gradient1 = ctx.createRadialGradient(
        width * 0.2 + mouse.x * 0.5,
        height * 0.3 + mouse.y * 0.5,
        50,
        width * 0.2 + mouse.x * 0.5,
        height * 0.3 + mouse.y * 0.5,
        450
      );
      gradient1.addColorStop(0, "rgba(6, 182, 212, 0.08)");
      gradient1.addColorStop(1, "transparent");
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(
        width * 0.8 - mouse.x * 0.5,
        height * 0.7 - mouse.y * 0.5,
        50,
        width * 0.8 - mouse.x * 0.5,
        height * 0.7 - mouse.y * 0.5,
        500
      );
      gradient2.addColorStop(0, "rgba(139, 92, 246, 0.09)");
      gradient2.addColorStop(1, "transparent");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Floating Orbs
      floatingOrbs.forEach((orb) => {
        orb.y -= orb.speed;
        if (orb.y < -height * 1.5) orb.y = height * 1.5;

        // Apply camera parallax
        const projX = orb.x - mouse.x * (500 / orb.z);
        const projY = orb.y - mouse.y * (500 / orb.z);

        const scale = fov / (fov + orb.z);
        const screenX = width / 2 + projX * scale;
        const screenY = height / 2 + projY * scale;

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, orb.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${orb.color}, ${0.6 * scale})`;
          ctx.fill();
        }
      });

      // Render 3D Rotating Geometric Wireframe Shapes
      shapes.forEach((s) => {
        s.rotX += s.speedX;
        s.rotY += s.speedY;
        s.rotZ += s.speedZ;

        // Drift slowly up and wrap around
        s.centerY -= 0.3;
        if (s.centerY < -height * 1.3) s.centerY = height * 1.3;

        // Apply mouse camera parallax offset
        const camX = s.centerX - mouse.x * (400 / s.centerZ);
        const camY = s.centerY - mouse.y * (400 / s.centerZ);

        // Transform vertices
        const projected: Array<{ x: number; y: number; z: number }> = s.vertices.map((v) => {
          const rotated = rotate3D(v, s.rotX, s.rotY, s.rotZ);
          const worldX = rotated.x + camX;
          const worldY = rotated.y + camY;
          const worldZ = rotated.z + s.centerZ;

          const scale = fov / (fov + Math.max(10, worldZ));
          return {
            x: width / 2 + worldX * scale,
            y: height / 2 + worldY * scale,
            z: worldZ,
          };
        });

        // Calculate average Z for depth fading
        const avgZ = projected.reduce((sum, p) => sum + p.z, 0) / projected.length;
        const depthAlpha = Math.max(0.08, Math.min(s.alpha, (1 - avgZ / 900) * s.alpha));

        // Draw edges
        ctx.strokeStyle = `rgba(${s.color}, ${depthAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.glowColor;

        s.edges.forEach(([i, j]) => {
          const p1 = projected[i];
          const p2 = projected[j];

          // Only render if roughly onscreen
          if (
            (p1.x > -100 && p1.x < width + 100 && p1.y > -100 && p1.y < height + 100) ||
            (p2.x > -100 && p2.x < width + 100 && p2.y > -100 && p2.y < height + 100)
          ) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Draw glowing vertex points
        ctx.fillStyle = `rgba(${s.color}, ${depthAlpha * 1.5})`;
        projected.forEach((p) => {
          if (p.x > 0 && p.x < width && p.y > 0 && p.y < height) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        ctx.shadowBlur = 0; // reset shadow
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};

export default ParticleBackground;
