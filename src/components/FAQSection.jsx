import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', label: 'General Related Questions', icon: '❓' },
    { id: 'pricing', label: 'Pricing Related Questions', icon: '💰' },
    { id: 'services', label: 'Services Related Questions', icon: '🛠️' },
    { id: 'technical', label: 'Technical Related Questions', icon: '⚙️' },
    { id: 'support', label: 'Support Related Questions', icon: '💬' }
  ];

  const faqData = {
    general: [
      {
        question: 'What is AdMark Digital Media?',
        answer: 'AdMark Digital Media is a full-service digital marketing agency specializing in SEO, social media marketing, PPC advertising, web development, and content marketing. We help businesses grow their online presence and achieve measurable results.'
      },
      {
        question: 'How long have you been in business?',
        answer: 'We have been providing digital marketing services since 2018, serving over 500+ clients across 15+ countries with proven track record of success.'
      },
      {
        question: 'What industries do you work with?',
        answer: 'We work with businesses across various industries including e-commerce, healthcare, technology, real estate, hospitality, education, and B2B services.'
      },
      {
        question: 'How do I get started?',
        answer: 'Simply click on the "Schedule Meeting" button on our homepage or contact us through the "Get Quote" form. We\'ll schedule a free consultation to discuss your needs and create a custom strategy.'
      }
    ],
    pricing: [
      {
        question: 'What are your pricing plans?',
        answer: 'We offer flexible pricing based on services - Basic, Standard, and Premium plans for SEO, SMO, PPC, Web Development, Content Marketing, and Branding. Prices start from $199/month depending on the service.'
      },
      {
        question: 'Do you offer custom packages?',
        answer: 'Yes! We understand every business is unique. We can create custom packages tailored to your specific needs and budget. Contact us to discuss your requirements.'
      },
      {
        question: 'Is there a setup fee?',
        answer: 'Setup fees vary by service. Most digital marketing services have no setup fee, while web development projects may include an initial setup cost depending on complexity.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, bank transfers, and for long-term contracts, we also offer flexible payment terms.'
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, we offer month-to-month flexibility. You can cancel or pause your subscription with 30 days notice. No long-term contracts required.'
      }
    ],
    services: [
      {
        question: 'What SEO services do you provide?',
        answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, link building, content optimization, competitor analysis, and monthly reporting with guaranteed rankings improvement.'
      },
      {
        question: 'How does your social media marketing work?',
        answer: 'We create and manage your social media presence across all major platforms, including content creation, posting schedule, community management, paid advertising, and analytics tracking.'
      },
      {
        question: 'Do you build custom websites?',
        answer: 'Yes! We build fully custom, responsive websites tailored to your brand. This includes design, development, CMS integration, e-commerce functionality, and ongoing maintenance.'
      },
      {
        question: 'What is included in PPC advertising?',
        answer: 'Our PPC services include campaign setup, keyword research, ad creation, landing page optimization, A/B testing, budget management, and detailed ROI reporting across Google Ads, Facebook Ads, and other platforms.'
      }
    ],
    technical: [
      {
        question: 'What technologies do you use?',
        answer: 'We use modern technologies including React, Node.js, WordPress, Shopify, Google Analytics, SEMrush, Ahrefs, and various marketing automation tools to deliver the best results.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All websites we develop are fully responsive and optimized for mobile, tablet, and desktop devices, ensuring perfect user experience across all screen sizes.'
      },
      {
        question: 'Do you provide website hosting?',
        answer: 'Yes, we offer reliable hosting solutions with 99.9% uptime guarantee, SSL certificates, daily backups, and 24/7 monitoring as part of our web development packages.'
      },
      {
        question: 'How do you ensure website security?',
        answer: 'We implement SSL certificates, regular security updates, malware scanning, firewall protection, and follow best practices to keep your website secure from threats.'
      }
    ],
    support: [
      {
        question: 'What kind of support do you provide?',
        answer: 'We offer email support, live chat, phone support, and dedicated account managers for premium clients. Support hours are Monday-Friday 9 AM - 6 PM, with emergency support available 24/7.'
      },
      {
        question: 'How quickly do you respond to queries?',
        answer: 'We typically respond within 1-2 business hours for email queries and immediately for live chat during business hours. Emergency issues are addressed within 30 minutes.'
      },
      {
        question: 'Do you provide training?',
        answer: 'Yes! We provide comprehensive training sessions for your team on how to use your website, manage content, understand analytics, and make the most of our services.'
      },
      {
        question: 'What if I need changes after project completion?',
        answer: 'All projects come with a warranty period. Minor changes are included, and we offer ongoing maintenance packages for continuous support and updates.'
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative py-16 px-4 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)'
      }}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
            top: '15%',
            right: '10%',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            bottom: '15%',
            left: '10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-3"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 25%, #FFD700 50%, #FFC107 75%, #FFFFFF 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-flow 5s ease infinite',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Find answers to common questions
          </p>
        </motion.div>

        {/* Grid Layout: Category Tabs + FAQ */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="space-y-2 lg:sticky lg:top-24">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOpenFAQ(null);
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3"
                  style={{
                    background: selectedCategory === cat.id
                      ? 'linear-gradient(135deg, rgba(255,193,7,0.15) 0%, rgba(255,152,0,0.1) 100%)'
                      : 'rgba(255,255,255,0.03)',
                    border: selectedCategory === cat.id
                      ? '2px solid rgba(255, 193, 7, 0.5)'
                      : '2px solid rgba(255,255,255,0.08)',
                    boxShadow: selectedCategory === cat.id
                      ? '0 4px 20px rgba(255, 193, 7, 0.2)'
                      : 'none',
                  }}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span 
                    className="text-sm font-bold"
                    style={{ 
                      color: selectedCategory === cat.id ? '#FFC107' : 'rgba(255,255,255,0.7)'
                    }}
                  >
                    {cat.label.replace(' Related Questions', '')}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {faqData[selectedCategory].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                    className="rounded-xl overflow-hidden transition-all duration-300 group"
                    style={{
                      background: openFAQ === index 
                        ? 'linear-gradient(135deg, rgba(255,193,7,0.12) 0%, rgba(255,152,0,0.08) 100%)'
                        : 'rgba(255,255,255,0.03)',
                      border: openFAQ === index 
                        ? '2px solid rgba(255, 193, 7, 0.4)' 
                        : '2px solid rgba(255,255,255,0.08)',
                      boxShadow: openFAQ === index 
                        ? '0 6px 25px rgba(255, 193, 7, 0.2)' 
                        : 'none',
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left transition-all duration-300"
                    >
                      <span 
                        className="text-sm md:text-base font-bold pr-4 flex-1" 
                        style={{ 
                          color: openFAQ === index ? '#FFC107' : 'rgba(255,255,255,0.85)'
                        }}
                      >
                        {faq.question}
                      </span>
                      
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{
                          background: openFAQ === index 
                            ? 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)'
                            : 'rgba(255, 193, 7, 0.1)',
                          color: openFAQ === index ? '#000' : '#FFC107',
                          border: openFAQ === index ? 'none' : '2px solid rgba(255, 193, 7, 0.3)',
                        }}
                      >
                        {openFAQ === index ? '−' : '+'}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div 
                            className="px-5 pb-4 pt-1"
                            style={{
                              borderTop: '1px solid rgba(255, 193, 7, 0.15)',
                            }}
                          >
                            <motion.p 
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.25 }}
                              className="text-sm leading-relaxed"
                              style={{ 
                                color: 'rgba(255, 255, 255, 0.85)',
                                lineHeight: '1.7',
                              }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 p-6 rounded-xl relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,152,0,0.06) 100%)',
            border: '2px solid rgba(255, 193, 7, 0.25)',
          }}
        >
          <h3 className="text-xl font-black mb-2" style={{ color: '#FFC107' }}>
            Still Have Questions?
          </h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Our team is here to help!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden group/btn"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
              color: '#000',
              boxShadow: '0 6px 20px rgba(255, 193, 7, 0.3)',
            }}
          >
            Contact Us →
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}