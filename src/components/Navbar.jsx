import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    websiteUrl: '',
    websiteName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Our Team', href: '#teamsection' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close popup
    setTimeout(() => {
      setIsSubmitted(false);
      setIsPopupOpen(false);
      setFormData({
        websiteUrl: '',
        websiteName: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsSubmitted(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsSubmitted(false);
    setFormData({
      websiteUrl: '',
      websiteName: '',
      email: '',
      phone: ''
    });
  };

  // Free Audit Popup Component
  const FreeAuditPopup = () => {
    if (!isPopupOpen) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 29, 34, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
          borderRadius: '20px',
          padding: '40px',
          width: '90%',
          maxWidth: '500px',
          border: '2px solid rgba(255, 215, 0, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Close Button */}
          <button
            onClick={closePopup}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#FFD700',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 215, 0, 0.1)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>

          {!isSubmitted ? (
            <>
              <h2 style={{
                color: '#FFD700',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '28px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 10px rgba(255, 215, 0, 0.3)'
              }}>
                Free Website Audit
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Website URL *
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Website Name *
                  </label>
                  <input
                    type="text"
                    name="websiteName"
                    value={formData.websiteName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '8px',
                    fontWeight: '500',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '2px solid rgba(255, 215, 0, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FFD700';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                    color: '#1a1d22',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
                  }}
                >
                  Submit for Free Audit
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                fontSize: '60px',
                marginBottom: '20px',
                filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
              }}>
                ✅
              </div>
              <h3 style={{
                color: '#FFD700',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif"
              }}>
                Request Submitted Successfully!
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Your request for free audit report has been successfully submitted and your free audit report will soon be sent to your email inbox. Thank you!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Layout - New Structural Design */}
      <div className="hidden lg:block">
        <nav 
          className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '12px 0',
            background: 'transparent'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 40px',
              background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 29, 34, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: '25px',
              width: '95%',
              maxWidth: '1400px',
              gap: '30px',
              border: '1px solid rgba(255, 215, 0, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.5)
              `,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Animated Background Elements */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.02) 0%, transparent 50%)
              `,
              zIndex: 0,
            }}></div>

            {/* Mega Logo - Left Side with Enhanced 3D Effect */}
            <div style={{ 
              flexShrink: 0, 
              background: 'transparent',
              position: 'relative',
              zIndex: 1,
              transform: 'perspective(1000px) rotateY(-5deg)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.7))',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1.1) translateY(-2px)';
              e.currentTarget.style.filter = 'drop-shadow(0 12px 35px rgba(255, 215, 0, 0.3))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
              e.currentTarget.style.filter = 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.7))';
            }}
            >
              <a href="#home">
                <img 
                  src="/src/assets/comp-logo.png"
                  alt="AdMark Digital Media"
                  className="h-16 w-auto transition-all duration-500"
                  style={{
                    filter: `
                      brightness(1.3) 
                      contrast(1.4) 
                      drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))
                      drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))
                    `,
                  }}
                />
              </a>
            </div>

            {/* Navigation Links - Center with Glass Morphism Effect */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flex: 1,
              gap: '4px',
              position: 'relative',
              zIndex: 1,
            }}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="transition-all duration-400"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: '500',
                    padding: '10px 16px',
                    textAlign: 'center',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FFD700';
                    e.target.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 193, 7, 0.1) 100%)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = `
                      0 8px 25px rgba(255, 215, 0, 0.25),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `;
                    e.target.style.border = '1px solid rgba(255, 215, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons - Right Side with Circular Animation */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
            }}>
              {/* Pricing Plan Button with Circular Border Animation */}
              <a
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, '#pricing')}
                className="transition-all duration-500"
                style={{
                  padding: '12px 28px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 29, 34, 0.8) 100%)',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  color: '#FFD700',
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                  letterSpacing: '0.03em',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.background = 'linear-gradient(135deg, rgba(26, 29, 34, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)';
                  e.target.style.boxShadow = '0 12px 30px rgba(255, 215, 0, 0.2)';
                  e.target.style.border = '2px solid rgba(255, 215, 0, 0.6)';
                  e.target.style.color = '#FFF8DC';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 29, 34, 0.8) 100%)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                  e.target.style.border = '2px solid rgba(255, 215, 0, 0.3)';
                  e.target.style.color = '#FFD700';
                }}
              >
                {/* Circular Animated Border */}
                <div style={{
                  position: 'absolute',
                  top: '-3px',
                  left: '-3px',
                  right: '-3px',
                  bottom: '-3px',
                  borderRadius: '32px',
                  background: 'conic-gradient(from 0deg, transparent, #FFD700, #FFA500, #FFD700, transparent)',
                  zIndex: -1,
                  animation: 'rotateBorder 3s linear infinite',
                  opacity: 0.7,
                }}></div>
                
                {/* Inner background to cover the rotating border */}
                <div style={{
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
                  right: '2px',
                  bottom: '2px',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 29, 34, 0.9) 100%)',
                  zIndex: -1,
                }}></div>

                <span style={{ 
                  fontSize: '1.4em',
                  filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))',
                  zIndex: 1,
                  transform: 'scale(1.2)'
                }}>
                  💎
                </span>
                <span style={{ zIndex: 1 }}>Pricing Plan</span>
              </a>

              {/* Free Audit Button - Premium Design */}
              <button
                onClick={openPopup}
                className="transition-all duration-500"
                style={{
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                  color: '#1a1d22',
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  boxShadow: `
                    0 8px 25px rgba(255, 215, 0, 0.5),
                    inset 0 2px 0 rgba(255, 255, 255, 0.4),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.3)
                  `,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.4)',
                  border: '2px solid rgba(255, 215, 0, 0.8)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.background = 'linear-gradient(135deg, #FFA500 0%, #FF8C00 50%, #FF6B00 100%)';
                  e.target.style.boxShadow = `
                    0 12px 35px rgba(255, 165, 0, 0.7),
                    inset 0 2px 0 rgba(255, 255, 255, 0.5),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.4)
                  `;
                  e.target.style.color = '#000000';
                  e.target.style.border = '2px solid rgba(255, 215, 0, 1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)';
                  e.target.style.boxShadow = `
                    0 8px 25px rgba(255, 215, 0, 0.5),
                    inset 0 2px 0 rgba(255, 255, 255, 0.4),
                    inset 0 -2px 0 rgba(0, 0, 0, 0.3)
                  `;
                  e.target.style.color = '#1a1d22';
                  e.target.style.border = '2px solid rgba(255, 215, 0, 0.8)';
                }}
              >
                <span style={{ 
                  fontSize: '1.4em',
                  filter: 'drop-shadow(0 0 6px rgba(255, 0, 0, 0.6))',
                  transform: 'scale(1.2)'
                }}>
                  🎯
                </span>
                Free Audit
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Header - Enhanced Design */}
      <nav 
        className="lg:hidden fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(26, 29, 34, 0.95) 100%)' 
            : 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 29, 34, 0.85) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.7)' : '0 4px 20px rgba(0,0,0,0.4)',
          borderBottom: '1px solid rgba(255, 215, 0, 0.15)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Mobile Logo */}
            <a href="#home" className="block">
              <div style={{
                background: 'transparent',
                borderRadius: '10px',
                padding: '4px',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))',
              }}>
                <img 
                  src="/src/assets/comp-logo.png"
                  alt="AdMark Digital Media"
                  className="h-12 w-auto"
                  style={{
                    filter: `
                      brightness(1.3) 
                      contrast(1.4) 
                      drop-shadow(0 2px 6px rgba(0, 0, 0, 0.7))
                    `,
                  }}
                />
              </div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
              style={{
                color: '#FFD700',
                background: isMobileMenuOpen 
                  ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 193, 7, 0.15) 100%)' 
                  : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                boxShadow: isMobileMenuOpen ? '0 4px 15px rgba(255, 215, 0, 0.25)' : '0 2px 10px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className="shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(26, 29, 34, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255, 215, 0, 0.2)',
            }}
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-4 rounded-xl font-semibold transition-all duration-300"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: "'Inter', sans-serif",
                    background: 'rgba(255, 255, 255, 0.05)',
                    fontSize: '1rem',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#FFD700';
                    e.target.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 193, 7, 0.1) 100%)';
                    e.target.style.border = '1px solid rgba(255, 215, 0, 0.4)';
                    e.target.style.transform = 'translateX(8px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Free Audit Button */}
              <button
                onClick={() => {
                  openPopup();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-4 rounded-xl font-bold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                  color: '#1a1d22',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  border: '2px solid rgba(255, 215, 0, 0.8)',
                  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                  marginTop: '10px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
                }}
              >
                🎯 Free Audit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Free Audit Popup */}
      <FreeAuditPopup />

      {/* CSS for Circular Border Animation */}
      <style jsx>{`
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Spacing for fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
