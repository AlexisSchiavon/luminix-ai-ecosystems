import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const FloatingParticles = ({ count = 50 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(newParticles);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          y: particle.y - particle.speed * 0.1,
          x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1,
        })).map(particle => 
          particle.y < -5 ? { ...particle, y: 105 } : particle
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-bg">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${6 + particle.speed}s ease-in-out infinite`,
            animationDelay: `${particle.id * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;