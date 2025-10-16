import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "With over 20 years of experience in international development, I've dedicated my career to creating sustainable solutions for communities in need.",
      name: "Jonathan Moore",
      role: "CEO",
      company: "Global Impact Solutions",
      domain: "globalimpact.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "𝕏", link: "#" },
        { icon: "in", link: "#" },
        { icon: "f", link: "#" }
      ]
    },
    {
      quote: "With my expertise in market research and consumer behavior, I help businesses make strategic decisions that drive growth and enhance overall customer satisfaction to the best.",
      name: "Alicia Cole",
      role: "Marketing Analyst",
      company: "Data Driven Insights",
      domain: "datadriven.io",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "𝕏", link: "#" },
        { icon: "in", link: "#" }
      ]
    },
    {
      quote: "Leading diverse teams with strategic vision, I drive customer-centric solutions, fostering innovation and delivering real value to the market.",
      name: "Jiang Xi",
      role: "Product Manager",
      company: "Tech Innovators Inc",
      domain: "techinnovators.ai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "in", link: "#" },
        { icon: "f", link: "#" }
      ]
    },
    {
      quote: "Transforming digital landscapes with innovative solutions that drive business growth and customer engagement.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "Digital Transform Inc",
      domain: "digitaltransform.tech",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "𝕏", link: "#" },
        { icon: "in", link: "#" }
      ]
    },
    {
      quote: "Building bridges between technology and business needs to create impactful solutions that matter.",
      name: "Michael Chen",
      role: "Product Director",
      company: "Innovate Labs",
      domain: "innovatelabs.io",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "in", link: "#" },
        { icon: "f", link: "#" }
      ]
    },
    {
      quote: "Driving innovation through strategic partnerships and cutting-edge technology solutions.",
      name: "Emma Wilson",
      role: "VP of Operations",
      company: "NextGen Solutions",
      domain: "nextgen.dev",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "𝕏", link: "#" },
        { icon: "in", link: "#" }
      ]
    },
    {
      quote: "Creating user-centric designs that transform complex problems into simple, elegant solutions.",
      name: "David Park",
      role: "Design Lead",
      company: "Creative Minds",
      domain: "creativeminds.design",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "𝕏", link: "#" },
        { icon: "in", link: "#" }
      ]
    },
    {
      quote: "Leveraging data analytics to uncover insights that drive strategic business decisions.",
      name: "Lisa Rodriguez",
      role: "Data Scientist",
      company: "Analytics Pro",
      domain: "analyticspro.ai",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "in", link: "#" },
        { icon: "f", link: "#" }
      ]
    },
    {
      quote: "Building scalable architectures that support millions of users with seamless performance.",
      name: "Alex Thompson",
      role: "Lead Architect",
      company: "Cloud Systems",
      domain: "cloudsystems.tech",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "𝕏", link: "#" },
        { icon: "in", link: "#" }
      ]
    },
    {
      quote: "Transforming customer experiences through innovative product strategies and user research.",
      name: "Rachel Green",
      role: "UX Researcher",
      company: "Experience First",
      domain: "experiencefirst.co",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
      socials: [
        { icon: "in", link: "#" },
        { icon: "f", link: "#" }
      ]
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section 
      className="relative py-20 px-4 overflow-hidden min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 3 === 0 ? '#FDB931' : i % 3 === 1 ? '#D2691E' : '#8B4513',
              opacity: Math.random() * 0.3 + 0.1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#8B4513 1px, transparent 1px),
                             linear-gradient(90deg, #8B4513 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #D2691E 0%, transparent 70%)',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #FDB931 0%, transparent 70%)',
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #FDB931 0%, #D2691E 25%, #FDB931 50%, #D2691E 75%, #FDB931 100%)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
             // WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(253, 185, 49, 0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            What Our Experts Say
          </motion.h2>
          <motion.p 
            className="text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ 
              color: '#f5e6d3',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Trusted by industry leaders driving innovation across global markets
          </motion.p>
        </motion.div>

        {/* Auto-Scrolling Testimonials Carousel */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1920] // Adjust based on total width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 lg:w-96" // Fixed width for consistent scrolling
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Testimonial Card */}
                <div 
                  className="relative rounded-3xl p-8 border-2 backdrop-blur-xl h-full transform-gpu"
                  style={{
                    background: 'linear-gradient(145deg, rgba(139, 69, 19, 0.15) 0%, rgba(210, 105, 30, 0.08) 100%)',
                    borderColor: 'rgba(210, 105, 30, 0.4)',
                    boxShadow: `
                      0 20px 60px rgba(139, 69, 19, 0.25),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 0 0 1px rgba(255, 255, 255, 0.05)
                    `,
                    minHeight: '420px',
                  }}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(210, 105, 30, 0.2) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                    }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Quote Section */}
                    <div className="flex-1 mb-8">
                      {/* Quote Marks */}
                      <div 
                        className="text-5xl font-black mb-6 opacity-30"
                        style={{ color: '#FDB931' }}
                      >
                        "
                      </div>
                      
                      {/* Quote Text */}
                      <p 
                        className="text-base leading-relaxed mb-6 font-normal tracking-wide"
                        style={{ 
                          color: '#ffffff',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          lineHeight: '1.7'
                        }}
                      >
                        {testimonial.quote}
                      </p>

                      {/* Company Domain */}
                      <div
                        className="inline-flex items-center px-4 py-3 rounded-2xl border backdrop-blur-sm"
                        style={{
                          background: 'rgba(210, 105, 30, 0.15)',
                          borderColor: 'rgba(253, 185, 49, 0.3)',
                          color: '#FDB931',
                          boxShadow: '0 4px 20px rgba(210, 105, 30, 0.2)'
                        }}
                      >
                        <span className="text-sm font-semibold tracking-wide">🌐 {testimonial.domain}</span>
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center space-x-4 pt-6 border-t" style={{ borderColor: 'rgba(139, 69, 19, 0.4)' }}>
                      
                      {/* Profile Image */}
                      <div className="relative">
                        <div 
                          className="w-16 h-16 rounded-2xl relative overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
                            boxShadow: '0 8px 32px rgba(139, 69, 19, 0.4)',
                            border: '3px solid rgba(253, 185, 49, 0.3)'
                          }}
                        >
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Animated Ring */}
                          <div 
                            className="absolute inset-0 rounded-2xl border-2"
                            style={{ borderColor: '#FDB931' }}
                          />
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="flex-1 min-w-0">
                        <h3 
                          className="text-lg font-bold truncate tracking-tight"
                          style={{ 
                            color: '#ffffff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          {testimonial.name}
                        </h3>
                        <p 
                          className="text-amber-300 font-semibold text-sm mb-1 tracking-wide"
                          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                        >
                          {testimonial.role}
                        </p>
                        <p 
                          className="text-sm font-medium truncate tracking-wide"
                          style={{ 
                            color: 'rgba(255,255,255,0.8)',
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                          }}
                        >
                          {testimonial.company}
                        </p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex flex-col gap-2">
                        {testimonial.socials.map((social, idx) => (
                          <motion.a
                            key={idx}
                            href={social.link}
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 backdrop-blur-sm"
                            style={{
                              background: 'rgba(210, 105, 30, 0.25)',
                              color: '#FDB931',
                              border: '1px solid rgba(253, 185, 49, 0.4)',
                              boxShadow: '0 4px 15px rgba(210, 105, 30, 0.3)'
                            }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for Smooth Edges */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-20"
            style={{
              background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 100%)'
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-20"
            style={{
              background: 'linear-gradient(270deg, #0a0a0a 0%, transparent 100%)'
            }}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(210, 105, 30, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-4 rounded-2xl font-bold text-lg relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #FDB931 100%)',
              color: '#0a0a0a',
              boxShadow: '0 12px 40px rgba(210, 105, 30, 0.4)',
              border: '2px solid rgba(253, 185, 49, 0.3)'
            }}
          >
            <span className="relative z-10 font-black tracking-wide">Join Our Expert Network</span>
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
              animate={{
                x: ['0%', '200%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}