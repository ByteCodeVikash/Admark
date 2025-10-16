import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
    { number: '98%', label: 'Success Rate', icon: '🎯' },
    { number: '250%', label: 'Avg. Growth', icon: '📈' }
  ];

  return (
    <section 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)',
      }}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
            top: '20%',
            left: '10%',
            animation: 'pulse 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
            animation: 'pulse 7s ease-in-out infinite',
            animationDelay: '3s',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* CEO Image with Modern Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group w-full lg:w-1/2 flex justify-center"
          >
            {/* Decorative Background */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                filter: 'blur(40px)',
              }}
            />
            
            {/* Main Image Container */}
            <div 
              className="relative rounded-3xl overflow-hidden w-full max-w-md"
              style={{
                border: '3px solid rgba(255, 193, 7, 0.3)',
                boxShadow: '0 20px 60px rgba(255, 193, 7, 0.3)',
              }}
            >
              {/* Image */}
              <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
                <img 
                  src="/src/assets/file.webp"
                  alt="CEO"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    filter: 'brightness(0.9) contrast(1.1)',
                  }}
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.7) 100%)',
                  }}
                />
                
                {/* CEO Info Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl"
                  style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255, 193, 7, 0.3)',
                  }}
                >
                  <h3 className="text-2xl font-black mb-1" style={{ color: '#FFC107' }}>
                    Vishesh Prabhakar
                  </h3>
                  <p className="text-base font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    CEO & Founder
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #FFC107, #FF9800)' }} />
                    <span className="text-xs font-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      15+ Years of Excellence
                    </span>
                  </div>
                </motion.div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-50" style={{ background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)' }} />
              <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full opacity-50" style={{ background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)' }} />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full flex items-center justify-center text-4xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,193,7,0.2) 0%, rgba(255,152,0,0.2) 100%)',
                border: '2px solid rgba(255, 193, 7, 0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 40px rgba(255, 193, 7, 0.3)',
              }}
            >
              🏆
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.1) 100%)',
                  border: '2px solid rgba(255, 193, 7, 0.3)',
                }}
              >
                <span className="text-2xl">⚡</span>
                <span className="text-base font-bold" style={{ color: '#FFC107' }}>
                  15+ Years of Excellence
                </span>
              </motion.div>
              
              {/* Heading */}
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 25%, #FFD700 50%, #FFC107 75%, #FFFFFF 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-flow 5s ease infinite',
                }}
              >
                Driving Digital Success Since 2009
              </h2>
              
              {/* Description */}
              <p 
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                We're a team of passionate digital marketing experts dedicated to helping businesses thrive online. Through data-driven strategies and innovative solutions, we've helped hundreds of companies achieve remarkable growth.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="relative p-4 sm:p-6 rounded-2xl text-center group overflow-hidden flex flex-col items-center justify-center h-full min-h-[140px]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,152,0,0.05) 100%)',
                      border: '2px solid rgba(255, 193, 7, 0.2)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = '2px solid rgba(255, 193, 7, 0.5)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 193, 7, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = '2px solid rgba(255, 193, 7, 0.2)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                    }}
                  >
                    {/* Background Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(255,193,7,0.1) 0%, transparent 70%)',
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="text-3xl mb-2 relative z-10">{stat.icon}</div>
                    
                    {/* Number */}
                    <div 
                      className="text-3xl sm:text-4xl font-black mb-2 relative z-10"
                      style={{
                        background: 'linear-gradient(135deg, #FFC107, #FFD700)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div 
                      className="text-sm font-semibold relative z-10" 
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      {stat.label}
                    </div>

                    {/* Bottom Accent */}
                    <div 
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #FFC107, #FF9800)' }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-bold transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                    color: '#000',
                    boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 12px 40px rgba(255, 193, 7, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
                  }}
                >
                  <span className="relative z-10">Learn More →</span>
                  <span 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      animation: 'shine 2s infinite'
                    }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-bold transition-all duration-300"
                  style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    border: '2px solid rgba(255, 193, 7, 0.3)',
                    color: '#FFC107',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 193, 7, 0.2)';
                    e.target.style.borderColor = 'rgba(255, 193, 7, 0.5)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 193, 7, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 193, 7, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
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
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}