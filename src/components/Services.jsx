import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { 
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
      icon: '🎯'
    },
    { 
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage audiences across all social platforms.',
      icon: '📱'
    },
    { 
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns and data-driven strategies.',
      icon: '💰'
    },
    { 
      title: 'Web Development',
      description: 'Create stunning, high-performance websites that convert visitors into customers.',
      icon: '💻'
    },
    { 
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that drives traffic and builds authority.',
      icon: '✍️'
    },
    { 
      title: 'Brand Strategy & Design',
      description: 'Build a memorable brand identity that resonates with your target audience.',
      icon: '🎨'
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #D4B896 0%, #E6D5B8 50%, #D4B896 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase relative inline-block"
            style={{
              fontFamily: "'Montserrat', 'Anton', 'Bebas Neue', sans-serif",
              letterSpacing: '0.15em',
              fontWeight: '900',
              lineHeight: '1',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #D4B896 25%, #FFD700 50%, #D4B896 75%, #1a1a1a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              filter: 'drop-shadow(0 4px 8px rgba(212, 184, 150, 0.3))',
            }}
          >
            SERVICES
          </h2>
        </motion.div>

        {/* Services Grid with Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(212, 184, 150, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid rgba(212, 184, 150, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 184, 150, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(212, 184, 150, 0.2)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
              }}
            >
              {/* Animated Background Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(212, 184, 150, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Decorative Corner */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #D4B896 50%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon with Animation */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
                  style={{
                    color: '#D4B896',
                    fontFamily: "'Montserrat', 'Arial Black', sans-serif",
                    fontWeight: '800',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-sm md:text-base mb-4 transition-colors duration-300"
                  style={{
                    color: 'rgba(212, 184, 150, 0.75)',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', 'Arial', sans-serif"
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Animated Arrow Button */}
              <a
                href="#get-quote"
                className="relative z-10 inline-flex items-center gap-2 font-bold text-sm transition-all duration-300 group/btn"
                style={{
                  color: '#D4B896',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                  Learn more
                </span>
                <motion.span 
                  className="text-xl"
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </a>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#D4B896] to-transparent w-0 group-hover:w-full transition-all duration-700"
                style={{
                  opacity: 0.6
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Shine Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="#get-quote"
            className="relative inline-block px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              color: '#D4B896',
              border: '2px solid #D4B896',
              boxShadow: '0 4px 15px rgba(212, 184, 150, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #D4B896 0%, #FFD700 100%)';
              e.target.style.color = '#1a1a1a';
              e.target.style.boxShadow = '0 8px 30px rgba(212, 184, 150, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
              e.target.style.color = '#D4B896';
              e.target.style.boxShadow = '0 4px 15px rgba(212, 184, 150, 0.3)';
            }}
          >
            <span className="relative z-10">View All Services →</span>
            
            {/* Shine Effect */}
            <span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transform: 'translateX(-100%)',
                animation: 'shine 2s infinite'
              }}
            />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}