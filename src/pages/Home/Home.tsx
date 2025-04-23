import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { symbols } from './data';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      symbol: string;
      rotation: number;
      rotationSpeed: number;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 16 + 12,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `hsl(${Math.random() * 60 + 200}, 40%, 20%)`,
        alpha: Math.random() * 0.7 + 0.3,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 - 0.01,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Create connections
        for (let j = i; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(20, 20, 30, ${0.3 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Check mouse interaction
        // const distToMouse = Math.sqrt(
        //   Math.pow(p.x - mousePosition.x, 2) +
        //   Math.pow(p.y - mousePosition.y, 2)
        // );
        //
        // if (distToMouse < 150) {
        //   const angle = Math.atan2(p.y - mousePosition.y, p.x - mousePosition.x);
        //   p.x += Math.cos(angle) * 1;
        //   p.y += Math.sin(angle) * 1;
        // }

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Update rotation
        p.rotation += p.rotationSpeed;

        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Draw the symbol
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px Arial`;
        ctx.fillStyle = p.color.replace('hsl', 'hsla').slice(0, -1) + `, ${p.alpha})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // const handleMouseMove = (e: MouseEvent) => {
    //   setMousePosition({ x: e.clientX, y: e.clientY });
    // };

    window.addEventListener('resize', handleResize);
    // window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Full screen image */}
      <div className="absolute inset-0 z-0 bg-[#EBEFFA]">
        <img
          src="/src/assets/profile2.jpg"
          alt="Dr. Sankha Banerjee"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Canvas for particle animation */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-60" />

      {/* Content container */}
      <div className="relative z-20 flex h-full items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-xl py-8 px-10 rounded-3xl self-center ml-10 mt-0 md:mt-0"
          style={{
            background: 'transparent',
          }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            {/* Decorative elements for the name */}
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-md" />

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-left relative p-5 rounded-lg"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,255,0.9) 100%)',
                color: '#222',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              <span className="block mb-1">Dr. Sankha</span>
              <span className="block">Banerjee</span>
              <div className="h-1 w-32 bg-secondary mt-3 rounded-full"></div>
            </motion.h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed bottom-16 right-16"
        >
          <Link to="/experience" className="relative inline-block group">
            <motion.span
              className="bg-secondary relative block px-8 py-4 rounded-lg font-bold text-lg transform group-hover:translate-y-[-3px] transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              style={{
                // background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                color: 'white',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              Learn More
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Add global CSS using style element */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
