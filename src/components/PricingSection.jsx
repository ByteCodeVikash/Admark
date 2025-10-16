import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingSection() {
  const [activeService, setActiveService] = useState('seo');

  const services = [
    { 
      id: 'seo', 
      name: 'SEO', 
      icon: '🔍',
      gradient: 'from-yellow-400 to-orange-500',
      description: 'Search Engine Optimization'
    },
    { 
      id: 'smo', 
      name: 'SMO', 
      icon: '📱',
      gradient: 'from-blue-400 to-cyan-500',
      description: 'Social Media Optimization'
    },
    { 
      id: 'ppc', 
      name: 'PPC', 
      icon: '💰',
      gradient: 'from-green-400 to-emerald-500',
      description: 'Pay Per Click Advertising'
    },
    { 
      id: 'web', 
      name: 'Web Dev', 
      icon: '💻',
      gradient: 'from-purple-400 to-pink-500',
      description: 'Website Development'
    },
    { 
      id: 'content', 
      name: 'Content', 
      icon: '✍️',
      gradient: 'from-orange-400 to-red-500',
      description: 'Content Marketing'
    },
    { 
      id: 'branding', 
      name: 'Branding', 
      icon: '🎨',
      gradient: 'from-pink-400 to-rose-500',
      description: 'Brand Strategy & Design'
    }
  ];

  const pricingPlans = {
    seo: [
      {
        name: 'Starter',
        price: '$199',
        popular: false,
        features: [
          '5 Keywords Tracking',
          'Basic On-Page SEO',
          'Monthly Reports',
          'Email Support'
        ]
      },
      {
        name: 'Basic',
        price: '$399',
        popular: false,
        features: [
          '10 Keywords Tracking',
          'On-Page SEO',
          'Technical Audit',
          'Bi-weekly Reports',
          'Priority Support'
        ]
      },
      {
        name: 'Standard',
        price: '$699',
        popular: true,
        features: [
          '25 Keywords Tracking',
          'Link Building',
          'Content Optimization',
          'Competitor Analysis',
          'Weekly Reports',
          'Dedicated Manager'
        ]
      },
      {
        name: 'Premium',
        price: '$1299',
        popular: false,
        features: [
          '50 Keywords Tracking',
          'Advanced Technical SEO',
          'Local SEO',
          'Content Creation',
          'Daily Monitoring',
          'Priority Support'
        ]
      },
      {
        name: 'Enterprise',
        price: '$2499',
        popular: false,
        features: [
          'Unlimited Keywords',
          'Full SEO Suite',
          'Custom Strategy',
          'White-label Reports',
          'API Access',
          '24/7 Support'
        ]
      }
    ],
    smo: [
      {
        name: 'Basic',
        price: '$199',
        popular: false,
        features: [
          'Facebook & Instagram',
          '10 Posts/Month',
          'Basic Analytics',
          'Community Management',
          'Content Calendar'
        ]
      },
      {
        name: 'Standard',
        price: '$399',
        popular: true,
        features: [
          'All Social Platforms',
          '20 Posts/Month',
          'Advanced Analytics',
          'Paid Ad Management',
          'Influencer Outreach'
        ]
      },
      {
        name: 'Premium',
        price: '$699',
        popular: false,
        features: [
          'Everything in Standard',
          '30+ Posts/Month',
          'Video Content',
          'Dedicated Manager',
          'Growth Strategy'
        ]
      }
    ],
    ppc: [
      {
        name: 'Basic',
        price: '$499',
        popular: false,
        features: [
          'Google Ads Setup',
          '$1000 Ad Budget',
          'Keyword Research',
          'Campaign Optimization',
          'Monthly Reports'
        ]
      },
      {
        name: 'Standard',
        price: '$899',
        popular: true,
        features: [
          'Multi-Platform Ads',
          '$2500 Ad Budget',
          'A/B Testing',
          'Landing Page Optimization',
          'Bi-weekly Reports'
        ]
      },
      {
        name: 'Premium',
        price: '$1499',
        popular: false,
        features: [
          'Everything in Standard',
          '$5000+ Ad Budget',
          'Remarketing Campaigns',
          'Dedicated PPC Specialist',
          'Weekly Reports'
        ]
      }
    ],
    web: [
      {
        name: 'Basic',
        price: '$999',
        popular: false,
        features: [
          'Up to 5 Pages',
          'Responsive Design',
          'SEO Friendly',
          'Contact Form',
          '30 Days Support'
        ]
      },
      {
        name: 'Standard',
        price: '$1999',
        popular: true,
        features: [
          'Up to 10 Pages',
          'Custom Design',
          'CMS Integration',
          'E-commerce Ready',
          '60 Days Support'
        ]
      },
      {
        name: 'Premium',
        price: '$3999',
        popular: false,
        features: [
          'Unlimited Pages',
          'Advanced Features',
          'Custom Development',
          'API Integration',
          '90 Days Support'
        ]
      }
    ],
    content: [
      {
        name: 'Basic',
        price: '$299',
        popular: false,
        features: [
          '4 Blog Posts/Month',
          'SEO Optimization',
          'Keyword Research',
          'Topic Research',
          'Basic Editing'
        ]
      },
      {
        name: 'Standard',
        price: '$599',
        popular: true,
        features: [
          '8 Blog Posts/Month',
          'Advanced SEO',
          'Content Strategy',
          'Social Media Posts',
          'Professional Editing'
        ]
      },
      {
        name: 'Premium',
        price: '$999',
        popular: false,
        features: [
          '12+ Blog Posts/Month',
          'Video Scripts',
          'Email Campaigns',
          'Content Calendar',
          'Dedicated Writer'
        ]
      }
    ],
    branding: [
      {
        name: 'Basic',
        price: '$799',
        popular: false,
        features: [
          'Logo Design',
          'Brand Colors',
          'Typography Guide',
          'Social Media Kit',
          '2 Revisions'
        ]
      },
      {
        name: 'Standard',
        price: '$1499',
        popular: true,
        features: [
          'Everything in Basic',
          'Brand Guidelines',
          'Business Cards',
          'Letterhead Design',
          '5 Revisions'
        ]
      },
      {
        name: 'Premium',
        price: '$2999',
        popular: false,
        features: [
          'Everything in Standard',
          'Brand Strategy',
          'Marketing Collateral',
          'Website Design',
          'Unlimited Revisions'
        ]
      }
    ]
  };

  const currentPlans = pricingPlans[activeService];
  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section 
      id="pricing" 
      className="relative py-16 px-4 overflow-hidden"
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
            top: '10%',
            right: '10%',
            animation: 'pulse 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            bottom: '10%',
            left: '10%',
            animation: 'pulse 7s ease-in-out infinite',
            animationDelay: '3s',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p 
            className="text-xs font-bold mb-3 tracking-widest uppercase"
            style={{ color: '#FFC107' }}
          >
            Transparent Pricing
          </motion.p>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-3"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 25%, #FFD700 50%, #FFC107 75%, #FFFFFF 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-flow 5s ease infinite',
            }}
          >
            CHOOSE YOUR PLAN
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-0.5 w-8 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #FFC107)' }} />
            <div className="h-0.5 w-16 rounded-full" style={{ background: '#FFC107' }} />
            <div className="h-0.5 w-8 rounded-full" style={{ background: 'linear-gradient(90deg, #FFC107, transparent)' }} />
          </div>
        </motion.div>

        {/* Service Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setActiveService(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 group"
              style={{
                background: activeService === service.id 
                  ? 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.08) 100%)'
                  : 'rgba(255,255,255,0.03)',
                border: activeService === service.id 
                  ? '2px solid rgba(255,193,7,0.5)'
                  : '2px solid rgba(255,255,255,0.1)',
                boxShadow: activeService === service.id 
                  ? '0 4px 20px rgba(255,193,7,0.3)'
                  : 'none',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: activeService === service.id 
                    ? 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)'
                    : 'rgba(255,193,7,0.1)',
                  boxShadow: activeService === service.id 
                    ? '0 4px 15px rgba(255,193,7,0.4)'
                    : 'none',
                }}
                whileHover={{ rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <div className="text-center">
                <div className="font-bold text-sm" style={{ color: activeService === service.id ? '#FFC107' : 'rgba(255,255,255,0.8)' }}>
                  {service.name}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-5 justify-center ${
              activeService === 'seo' 
                ? 'md:grid-cols-3 lg:grid-cols-5' 
                : 'md:grid-cols-3'
            }`}
            style={{
              maxWidth: activeService === 'seo' ? '100%' : '900px',
              margin: '0 auto'
            }}
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative rounded-2xl p-5 transition-all duration-300 group overflow-hidden cursor-pointer"
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                  border: plan.popular
                    ? '2px solid rgba(255,193,7,0.5)'
                    : '2px solid rgba(255,255,255,0.08)',
                  boxShadow: plan.popular
                    ? '0 8px 32px rgba(255,193,7,0.25)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(10px)',
                  width: activeService === 'seo' ? 'auto' : '280px',
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.border = '2px solid rgba(255,193,7,0.4)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,193,7,0.25)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,152,0,0.05) 100%)';
                  } else {
                    e.currentTarget.style.boxShadow = '0 16px 50px rgba(255,193,7,0.4)';
                    e.currentTarget.style.border = '2px solid rgba(255,193,7,0.8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.border = '2px solid rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)';
                  } else {
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,193,7,0.25)';
                    e.currentTarget.style.border = '2px solid rgba(255,193,7,0.5)';
                  }
                }}
              >
                {/* Animated Corner Glow */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(255,193,7,0.3) 0%, transparent 70%)',
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: 'radial-gradient(circle at bottom left, rgba(255,193,7,0.3) 0%, transparent 70%)',
                  }}
                />

                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center text-xs font-black shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FF9800 100%)',
                      color: '#000',
                      transform: 'rotate(15deg)',
                      zIndex: 10,
                    }}
                  >
                    <span style={{ transform: 'rotate(-15deg)' }}>⭐<br/>TOP</span>
                  </motion.div>
                )}

                {/* Center Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,193,7,0.08) 0%, transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Plan Name with Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 
                      className="text-xl font-black"
                      style={{ color: plan.popular ? '#FFC107' : 'rgba(255,255,255,0.9)' }}
                    >
                      {plan.name}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl"
                    >
                      {activeServiceData.icon}
                    </motion.div>
                  </div>
                  
                  {/* Price with Animation */}
                  <div className="mb-4">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="text-3xl md:text-4xl font-black inline-block"
                      style={{ 
                        background: plan.popular 
                          ? 'linear-gradient(135deg, #FFD700, #FFC107, #FF9800)'
                          : 'linear-gradient(135deg, #FFC107, #FF9800)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200%',
                        animation: 'gradient-flow 3s ease infinite',
                      }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-sm ml-1" style={{ color: 'rgba(255,255,255,0.5)' }}>/mo</span>
                  </div>

                  {/* Divider with Animation */}
                  <div 
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mb-4 rounded-full mx-auto"
                    style={{ background: 'linear-gradient(90deg, transparent, #FFC107, transparent)' }}
                  />

                  {/* Features List */}
                  <div className="space-y-2 mb-5">
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-sm mt-0.5 min-w-[14px]"
                          style={{ color: '#4CAF50' }}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          ✓
                        </motion.span>
                        <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button with Shine Effect */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 relative overflow-hidden group/btn"
                    style={{
                      background: plan.popular
                        ? 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)'
                        : 'rgba(255,193,7,0.08)',
                      border: plan.popular ? '2px solid transparent' : '2px solid rgba(255,193,7,0.3)',
                      color: plan.popular ? '#000' : '#FFC107',
                      boxShadow: plan.popular ? '0 4px 15px rgba(255,193,7,0.4)' : 'none',
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    
                    {/* Multi-layer shine effect */}
                    <span 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        animation: 'shine 1.5s infinite'
                      }}
                    />
                  </motion.button>
                </div>

                {/* Animated Bottom Border */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-0 group-hover:w-full transition-all duration-700"
                  style={{ opacity: 0.8 }}
                />

                {/* Side Glow Lines */}
                <div 
                  className="absolute top-0 left-0 w-0.5 h-0 group-hover:h-full transition-all duration-500 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                  style={{ opacity: 0.5 }}
                />
                <div 
                  className="absolute top-0 right-0 w-0.5 h-0 group-hover:h-full transition-all duration-500 bg-gradient-to-b from-transparent via-yellow-400 to-transparent delay-100"
                  style={{ opacity: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-base mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Need a custom plan tailored to your business?
          </p>
          <motion.a
            href="#get-quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-full font-bold text-base transition-all duration-300 relative overflow-hidden group"
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
            <span className="relative z-10">Contact Us for Custom Plan →</span>
            <span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: 'shine 2s infinite'
              }}
            />
          </motion.a>
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
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}