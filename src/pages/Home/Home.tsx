import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { symbols } from './data';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const padding = 0; // Reduced padding value

    if (!ctx) return;

    const textBlock = canvas.parentElement;
    if (!textBlock) return;

    canvas.width = textBlock.offsetWidth;
    canvas.height = textBlock.offsetHeight;

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

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: padding + Math.random() * (canvas.width - padding * 2),
        y: padding + Math.random() * (canvas.height - padding * 2),
        size: Math.random() * 12 + 8,
        speedX: Math.random() * 0.6 - 0.2,
        speedY: Math.random() * 0.6 - 0.2,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 50%)`,
        alpha: Math.random() * 0.5 + 0.3,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.01 - 0.005,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(20, 20, 30, ${0.3 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.x <= p.size / 2 || p.x >= canvas.width - p.size / 2) {
          p.speedX *= -1;
          p.x = p.x <= p.size / 2 ? p.size / 2 : canvas.width - p.size / 2;
        }
        if (p.y <= p.size / 2 || p.y >= canvas.height - p.size / 2) {
          p.speedY *= -1;
          p.y = p.y <= p.size / 2 ? p.size / 2 : canvas.height - p.size / 2;
        }

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
      if (!textBlock) return;
      canvas.width = textBlock.offsetWidth;
      canvas.height = textBlock.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="-z-10 left-0 top-0 absolute w-1/2 h-full bg-gradient-to-b from-[#E6E6E6] to-[#EAEAEA]" />
        <div className="-z-10 right-0 top-0 absolute w-1/2 h-full bg-gradient-to-b from-[#E9E9E9] to-[#EBEBEB]" />
        <img
          src="/profile2.jpg"
          alt="Dr. Sankha Banerjee"
          className="w-full h-full object-cover lg:object-contain"
        />
      </div>

      {/* Content container */}
      <div className="relative z-30 max-md:justify-center flex h-full items-end 2xl:items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          className="max-md:w-full max-w-xl py-8 rounded-3xl md:ml-10 mt-0 md:mt-0"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 100,
            }}
          >
            {/* Glass effect background */}
            <motion.div
              className="absolute w-full h-full left-0 top-0 -inset-4 rounded-t-xl bg-white/50 backdrop-blur-md"
              style={{
                boxShadow: '0 4px 15px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
              }}
            />

            {/* Text container with canvas */}
            <div className="relative p-5 rounded-lg">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ mixBlendMode: 'overlay' }}
              />
              <motion.h1 className="text-4xl md:text-7xl font-bold text-left relative">
                <motion.span
                  className="block mb-1 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 bg-clip-text text-transparent font-extrabold tracking-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Dr. Sankha
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 bg-clip-text text-transparent font-extrabold tracking-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  Banerjee
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>
          {/* Learn More button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div className="relative group" whileHover="hover">
              <motion.div
                className="absolute -inset-0.5 rounded-b-xl bg-gradient-to-r from-primary via-secondary to-primary opacity-75 blur-lg group-hover:opacity-100"
                style={{
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <Link to="/experience" className="relative block px-8 py-4 bg-white rounded-b-xl">
                <motion.div
                  className="flex items-center gap-3"
                  variants={{
                    hover: {
                      gap: '16px',
                    },
                  }}
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12H16M16 12L12 8M16 12L12 16"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-lg font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Explore Complete Portfolio
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
