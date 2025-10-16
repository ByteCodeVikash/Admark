import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function MirrorRoom() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 700, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 700);
    camera.position.z = 14;

    // Main Golden Cube with particles effect
    const geometry = new THREE.BoxGeometry(6, 6, 6);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffc107,
      emissive: 0xff9800,
      shininess: 150,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
      wireframeLinewidth: 2
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Inner rotating cube
    const innerGeometry = new THREE.BoxGeometry(5, 5, 5);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      emissive: 0xffbd59,
      shininess: 120,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    const innerCube = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerCube);

    // Smallest core cube
    const coreGeometry = new THREE.BoxGeometry(3, 3, 3);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0xffbd59,
      emissive: 0xffc107,
      shininess: 100,
      transparent: true,
      opacity: 0.2,
    });
    const coreCube = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreCube);

    // Particle system around cube
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffc107,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Multiple golden lights
    const pointLight1 = new THREE.PointLight(0xffc107, 2.5, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff9800, 2.5, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffd700, 2, 100);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffbd59, 2, 100);
    pointLight4.position.set(10, -10, -10);
    scene.add(pointLight4);

    scene.add(new THREE.AmbientLight(0xffbd59, 0.5));

    // Enhanced edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffc107, 
      transparent: true, 
      opacity: 0.5 
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Multi-directional rotation
      cube.rotation.x += 0.004;
      cube.rotation.y += 0.006;
      cube.rotation.z += 0.002;
      
      innerCube.rotation.x -= 0.005;
      innerCube.rotation.y -= 0.007;
      innerCube.rotation.z += 0.003;
      
      coreCube.rotation.x += 0.008;
      coreCube.rotation.y -= 0.006;
      
      wireframe.rotation.x += 0.004;
      wireframe.rotation.y += 0.006;
      wireframe.rotation.z += 0.002;
      
      // Animate particles
      particlesMesh.rotation.y += 0.001;
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = positions[i] + Math.sin(time + i) * 0.01;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      // Animate lights in circular pattern
      pointLight1.position.x = Math.sin(time * 0.5) * 10;
      pointLight1.position.z = Math.cos(time * 0.5) * 10;
      
      pointLight2.position.x = Math.cos(time * 0.7) * 10;
      pointLight2.position.z = Math.sin(time * 0.7) * 10;
      
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
          className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC107 0%, #FF9800 50%, transparent 70%)',
            top: '10%',
            right: '10%',
            animation: 'pulse 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, #FFC107 50%, transparent 70%)',
            bottom: '10%',
            left: '10%',
            animation: 'pulse 7s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-8 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 8s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* 3D Mirror Cube Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Single AdMark Logo with Premium Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotateY: 5 }}
              className="relative px-14 py-8 rounded-3xl group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,193,7,0.18) 0%, rgba(255,152,0,0.1) 50%, rgba(255,215,0,0.18) 100%)',
                border: '3px solid rgba(255,193,7,0.4)',
                boxShadow: '0 12px 48px rgba(255,193,7,0.35), 0 0 80px rgba(255,193,7,0.15) inset',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-yellow-400 rounded-tl-3xl opacity-60" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-yellow-400 rounded-tr-3xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-yellow-400 rounded-bl-3xl opacity-60" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400 rounded-br-3xl opacity-60" />
              
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,193,7,0.2) 0%, transparent 70%)',
                }}
              />

              <h3 
                className="text-5xl md:text-6xl font-black relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 25%, #FF9800 50%, #FFC107 75%, #FFD700 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-flow 4s ease infinite',
                  textShadow: '0 0 40px rgba(255,193,7,0.6)',
                  letterSpacing: '0.05em',
                }}
              >
                AdMark
              </h3>
              
              {/* Bottom accent line */}
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1.5 rounded-full transition-all duration-500 group-hover:w-4/5"
                style={{ 
                  width: '60%',
                  background: 'linear-gradient(90deg, transparent, #FFC107, #FFD700, #FFC107, transparent)',
                  boxShadow: '0 0 20px rgba(255,193,7,0.8)',
                }} 
              />

              {/* Top accent */}
              <div 
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-500"
                style={{ 
                  width: '40%',
                  background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                  boxShadow: '0 0 15px rgba(255,215,0,0.6)',
                }} 
              />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight px-4"
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
              Reflecting the Future of Marketing
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-16 px-4"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            We don't just follow trends—we create them. Our innovative approach mirrors your brand's potential and amplifies it across every digital touchpoint, ensuring your message resonates in a crowded marketplace.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: '🎯', title: 'Strategic Vision', desc: 'Data-driven insights that deliver results' },
              { icon: '⚡', title: 'Rapid Execution', desc: 'Fast & efficient implementation' },
              { icon: '💎', title: 'Premium Quality', desc: 'Excellence in every detail' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group p-8 rounded-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,152,0,0.04) 100%)',
                  border: '2px solid rgba(255,193,7,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid rgba(255,193,7,0.6)';
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(255,193,7,0.35)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.08) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid rgba(255,193,7,0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,152,0,0.04) 100%)';
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,193,7,0.15) 0%, transparent 70%)',
                  }}
                />
                
                <motion.div 
                  className="text-5xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-2xl font-black mb-3 relative z-10" style={{ color: '#FFC107' }}>
                  {item.title}
                </h4>
                <p className="text-base relative z-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {item.desc}
                </p>
                
                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-0 group-hover:w-full transition-all duration-700"
                  style={{ opacity: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden group"
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
              <span className="relative z-10">See Our Work →</span>
              
              {/* Shine effect */}
              <span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shine 2s infinite'
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.08); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}