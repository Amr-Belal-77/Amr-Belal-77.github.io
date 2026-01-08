import { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    alpha: number;
    targetAlpha: number;
}

const InteractiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const initPoints = () => {
            pointsRef.current = [];
            const numPoints = Math.floor((width * height) / 10000); // Higher density for crisp dots
            for (let i = 0; i < numPoints; i++) {
                pointsRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.15,
                    vy: (Math.random() - 0.5) * 0.15 - 0.2, // Subtle upward float
                    radius: Math.random() * 1.5 + 0.5, // Much smaller dots
                    alpha: Math.random() * 0.3 + 0.05,
                    targetAlpha: Math.random() * 0.3 + 0.05,
                });
            }
        };

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            initPoints();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        // Initial setup
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const points = pointsRef.current;
            const mouse = mouseRef.current;

            points.forEach((point) => {
                // Liftoff / Flow Field Effect
                // Move towards right side and slightly up

                // Strength increases towards the right edge
                const flowX = (point.x / width) * 0.2;
                point.vx += flowX * 0.01;

                // Bound velocity
                point.vx = Math.min(Math.max(point.vx, -0.5), 0.5);
                point.vy = Math.min(Math.max(point.vy, -0.8), 0.2);

                point.y += point.vy;
                point.x += point.vx;

                // Mouse influence (Subtle Parallax & Repel)
                const dx = mouse.x - point.x;
                const dy = mouse.y - point.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    point.x -= (dx / dist) * force * 1.5;
                    point.y -= (dy / dist) * force * 1.5;
                    point.alpha = Math.min(point.alpha + 0.02, 0.6);
                } else {
                    if (point.alpha > point.targetAlpha) point.alpha -= 0.005;
                }

                // Wrap around with soft fade
                if (point.y < -20) point.y = height + 20;
                if (point.y > height + 20) point.y = -20;
                if (point.x < -20) point.x = width + 20;
                if (point.x > width + 20) {
                    point.x = -20;
                    point.vx = Math.random() * 0.2;
                }

                // Draw Crisp Particle
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(50, 130, 240, ${point.alpha + 0.2})`; // More visible blue
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{
                background: 'radial-gradient(circle at 20% 50%, #ffffff 0%, #f8fafc 100%)'
            }}
        />
    );
};

export default InteractiveBackground;
