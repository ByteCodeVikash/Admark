import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function Tornado() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 700, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 700);
    camera.position.z = 20;

    // Golden Tornado particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = [];
    const colors = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 14;
      const radius = (i / particleCount) * 7;
      const y = (i / particleCount) * 18 - 9;
      
      positions.push(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );

      // Golden gradient colors
      const t = i / particleCount;
      const r = 1.0;
      const g = 0.75 + t * 0.2;
      const b = 0.0 + t * 0.3;
      colors.push(r, g, b);
    }
    
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({ 
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Golden ambient light
    scene.add(new THREE.AmbientLight(0xffbd59, 0.5));
    
    // Point lights for glow effect
    const light1 = new THREE.PointLight(0xffc107, 2, 50);
    light1.position.set(0, 5, 5);
    scene.add(light1);
    
    const light2 = new THREE.PointLight(0xff9800, 2, 50);
    light2.position.set(0, -5, 5);
    scene.add(light2);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      particles.rotation.y += 0.01;
      
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.02;
      }
      particleGeometry.attributes.position.needsUpdate = true;
      
      // Animate lights
      light1.position.x = Math.sin(time) * 3;
      light2.position.x = Math.cos(time) * 3;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 700;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 700);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const keywords = [
    { word: 'Reach', icon: '🎯', gradient: 'from-yellow-400 to-orange-500' },
    { word: 'Engage', icon: '💬', gradient: 'from-orange-400 to-amber-500' },
    { word: 'Convert', icon: '💰', gradient: 'from-amber-400 to-yellow-500' },
    { word: 'Grow', icon: '📈', gradient: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)',
      }}
    >
      {/* Animated Background Glows */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
            top: '20%',
            left: '10%',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
            animation: 'pulse 5s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* 3D Tornado Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight inline-block px-8 py-4 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, rgba(255,193,7,0.1) 50%, #1a1a1a 100%)',
              border: '2px solid rgba(255,193,7,0.3)',
              boxShadow: '0 0 60px rgba(255,193,7,0.2)',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 25%, #FFD700 50%, #FFC107 75%, #FFFFFF 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 5s ease infinite',
              }}
            >
              Turn Chaos Into Conversions
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255, 255, 255, 0.85)' }}
        >
          Navigate the complex digital landscape with confidence. We transform scattered efforts into strategic, measurable success that drives real business growth.
        </motion.p>

        {/* Keywords Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {keywords.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group relative p-8 rounded-2xl transition-all duration-500 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,152,0,0.04) 100%)',
                border: '2px solid rgba(255,193,7,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid rgba(255,193,7,0.6)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(255,193,7,0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.08) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid rgba(255,193,7,0.2)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,152,0,0.04) 100%)';
              }}
            >
              {/* Animated glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,193,7,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Icon */}
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>

              {/* Word */}
              <span 
                className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent relative z-10`}
                style={{
                  textShadow: '0 0 30px rgba(255,193,7,0.3)',
                }}
              >
                {item.word}
              </span>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-0 group-hover:w-full transition-all duration-700"
                style={{ opacity: 0.8 }}
              />

              {/* Corner decoration */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #FFC107 50%)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
              boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
              color: '#000'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 12px 40px rgba(255, 193, 7, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
            }}
          >
            Start Your Transformation →
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}