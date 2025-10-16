// ContactUs.jsx
import React, { useState } from "react";

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      category: 'SEO',
      title: '10 SEO Trends to Watch in 2025',
      excerpt: 'Naye search algorithms aur user intent ke hisaab se apni strategy kaise banayein – practical tips, examples aur action steps.',
      image: 'https://picsum.photos/seed/seo/1200/800',
      thumb: 'https://picsum.photos/seed/seo_thumb/400/300'
    },
    {
      id: 2,
      category: 'PPC',
      title: 'How to Maximize Your PPC ROI',
      excerpt: 'Smart bidding, negative keywords aur landing page testing ke proven tips.',
      image: 'https://picsum.photos/seed/ppc/1200/800',
      thumb: 'https://picsum.photos/seed/ppc_thumb/400/300'
    },
    {
      id: 3,
      category: 'Local SEO',
      title: 'The Power of Local SEO for Small Businesses',
      excerpt: 'Local listings aur review management se footfall kaise badhayein.',
      image: 'https://picsum.photos/seed/local/1200/800',
      thumb: 'https://picsum.photos/seed/local_thumb/400/300'
    },
    {
      id: 4,
      category: 'Content',
      title: 'Content Systems That Scale',
      excerpt: 'Repeating content workflows aur repurposing se productivity kaise badhe.',
      image: 'https://picsum.photos/seed/content/1200/800',
      thumb: 'https://picsum.photos/seed/content_thumb/400/300'
    },
    {
      id: 5,
      category: 'Dev',
      title: 'Technical SEO Checklist for Developers',
      excerpt: 'Crawling, indexing aur performance optimizations—jo devs ko pata hona chahiye.',
      image: 'https://picsum.photos/seed/dev/1200/800',
      thumb: 'https://picsum.photos/seed/dev_thumb/400/300'
    }
  ]);

  const [swapping, setSwapping] = useState(false);
  const [swappedIndex, setSwappedIndex] = useState(null);

  const openCalendlyModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const calendlyUrl = "https://calendly.com/samsmith-admark/30min";

  const handleSmallCardClick = (index) => {
    if (index === 0 || swapping) return;

    setSwapping(true);
    setSwappedIndex(index);

    setTimeout(() => {
      const newPosts = [...posts];
      [newPosts[0], newPosts[index]] = [newPosts[index], newPosts[0]];
      setPosts(newPosts);
      
      setTimeout(() => {
        setSwapping(false);
        setSwappedIndex(null);
      }, 120);
    }, 160);
  };

  const handleReadMore = () => {
    // Navigate to blog post or show details
    console.log('Open post:', posts[0].title);
  };

  const bigPost = posts[0];
  const smallPosts = posts.slice(1);

  return (
    <div className="contact-us-page">
      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Latest Blogs</h2>

          <div className="layout">
            {/* LEFT (big) */}
            <div className="left">
              <div 
                className={`big-card ${swapping ? 'is-swapping' : ''}`}
                onClick={handleReadMore}
              >
                <div 
                  className="big-media"
                  style={{ backgroundImage: `url(${bigPost.image})` }}
                  aria-hidden="true"
                />
                <div className="big-overlay" aria-hidden="true" />

                <div className="big-content">
                  <div className="big-meta">{bigPost.category}</div>
                  <h3 className="big-title">{bigPost.title}</h3>
                  <p className="big-excerpt">{bigPost.excerpt}</p>
                </div>

                <button className="read-more pulse">
                  READ MORE <span className="arrow">→</span>
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right">
              <div className="right-grid">
                {smallPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`small-card ${swappedIndex === index + 1 ? 'is-swapping' : ''}`}
                    onClick={() => handleSmallCardClick(index + 1)}
                    tabIndex={0}
                    role="button"
                  >
                    <div className="small-media">
                      <img src={post.thumb} alt={post.title} />
                    </div>
                    <div className="small-body">
                      <div className="small-cat">{post.category}</div>
                      <div className="small-title">{post.title}</div>
                      <div className="small-excerpt">{post.excerpt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col md:flex-row items-start justify-between px-4 md:px-8 py-12 gap-8">
          {/* LEFT */}
          <div className="md:w-1/2 space-y-8 w-full">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gold">
                Have a Project? <br /> Let's talk!
              </h1>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1">✅</span>
                <span>NDA? Absolutely just ask.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">⚡</span>
                <span>We'll respond in 24 hours — fast & focused.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">💼</span>
                <span>Work with senior UX experts, not juniors.</span>
              </li>
            </ul>

            {/* Founder box */}
            <div
              className="info-box rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-md"
              role="group"
            >
              <div className="flex-1">
                <div className="text-xs text-gray-400 uppercase">Founder</div>
                <div className="text-lg font-semibold text-gold">Vishesh Prabhakar</div>
                <div className="text-sm text-gray-300 mt-1 break-words">
                  VISHESHPRABHAKAR@ADMARKDIGITALMEDIA@GMAIL.COM
                </div>
              </div>

              <div className="ml-auto">
                <button
                  onClick={openCalendlyModal}
                  className="inline-flex items-center gap-2 bg-gold text-black rounded-full px-4 py-2 font-semibold hover:bg-yellow-400 hover:text-black transition focus:outline-none"
                >
                  📅 Schedule a Call
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="md:w-1/2 mt-10 md:mt-0 bg-[#111] p-6 md:p-8 rounded-3xl border border-gold/30 shadow-lg w-full">
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:w-1/2 bg-transparent border form-field p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full sm:w-1/2 bg-transparent border form-field p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <select className="w-full sm:w-1/2 bg-transparent border form-field p-3 rounded-lg text-white focus:outline-none">
                  <option>Project budget</option>
                  <option>$1k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k+</option>
                </select>
                <select className="w-full sm:w-1/2 bg-transparent border form-field p-3 rounded-lg text-white focus:outline-none">
                  <option>How did you hear about us?</option>
                  <option>Google</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                </select>
              </div>

              <textarea
                placeholder="Tell us about your product and goals..."
                rows="4"
                className="w-full bg-transparent border form-field p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
              />

              <div className="flex flex-wrap gap-3">
                {[
                  "UI/UX Design",
                  "SaaS Design",
                  "Branding",
                  "CRO",
                  "Mobile app",
                  "Development",
                  "MVP Development",
                  "Web Design",
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="border border-gold/40 text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-black transition text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black font-semibold py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4 text-right">
              Prefer email?{" "}
              <span className="text-gold">VISHESHPRABHAKAR@ADMARKDIGITALMEDIA@GMAIL.COM</span>
            </p>
          </div>
        </div>
      </section>

      {/* Modal for Calendly */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative bg-[#0f0f0f] w-[90vw] max-w-3xl rounded-xl p-4 border border-gold/40 shadow-2xl">
            <button
              onClick={closeModal}
              aria-label="Close calendly modal"
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="text-white mb-3 font-semibold">Schedule a meeting</div>
            <div className="w-full h-[70vh] md:h-[60vh] bg-white/5 rounded-md overflow-hidden border border-gold/20">
              <iframe
                title="Calendly scheduling"
                src={calendlyUrl}
                className="w-full h-full border-0"
              />
            </div>
            <div className="mt-3 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md bg-gold text-black font-semibold hover:bg-yellow-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .contact-us-page {
          --bg: #0b1020;
          --panel: #0f1724;
          --accent-1: #7c3aed;
          --accent-2: #06b6d4;
          --muted: #94a3b8;
          --card-border: 4px;
          --radius: 12px;
          --glass: rgba(255,255,255,0.04);
          --gold: #FFD700;
        }

        .blog-section {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          background: linear-gradient(180deg, var(--bg), #060712 120%);
          color: #e6eef8;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding: 28px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--accent-1);
          letter-spacing: 1.5px;
          margin: 0 0 18px 0;
        }

        .layout {
          display: flex;
          gap: 26px;
          align-items: flex-start;
        }

        .left {
          flex: 0 0 50%;
          min-width: 320px;
        }

        .right {
          flex: 0 0 50%;
          min-width: 280px;
        }

        .big-card {
          position: relative;
          height: 420px;
          border-radius: var(--radius);
          overflow: hidden;
          border: var(--card-border) solid rgba(124,58,237,0.95);
          background: linear-gradient(180deg, rgba(124,58,237,0.06), rgba(6,182,212,0.02));
          box-shadow: 0 12px 40px rgba(2,6,23,0.6);
          transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 22px;
          gap: 18px;
          cursor: pointer;
        }

        .big-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(2,6,23,0.75);
        }

        .big-media {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          filter: contrast(0.95) saturate(1.05) brightness(0.65);
        }

        .big-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(7,10,24,0.25) 0%, rgba(7,10,24,0.1) 35%, rgba(7,10,24,0.6) 100%);
        }

        .big-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .big-meta {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06));
          color: var(--accent-1);
          font-weight: 700;
          font-size: 13px;
          border: 2px solid rgba(124,58,237,0.18);
          width: max-content;
        }

        .big-title {
          margin: 0;
          font-size: 34px;
          line-height: 1.02;
          color: white;
          letter-spacing: 0.6px;
          text-shadow: 0 6px 30px rgba(0,0,0,0.6);
          max-width: 100%;
        }

        .big-excerpt {
          margin: 0;
          color: #d9e9f6;
          opacity: 0.94;
          max-width: 100%;
          line-height: 1.38;
        }

        .read-more {
          position: absolute;
          right: 16px;
          bottom: 16px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
          color: white;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          overflow: hidden;
        }

        .read-more::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .read-more:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
        }

        .read-more:hover::before {
          left: 100%;
        }

        .read-more .arrow {
          transition: transform 0.3s ease;
        }

        .read-more:hover .arrow {
          transform: translateX(4px);
        }

        .right-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 190px;
          gap: 18px;
        }

        .small-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          border: 3px solid rgba(124,58,237,0.95);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          display: flex;
          gap: 12px;
          padding: 12px;
          align-items: flex-start;
          cursor: pointer;
          transition: transform .18s cubic-bezier(.2,.9,.2,1), box-shadow .18s;
        }

        .small-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(2,6,23,0.6);
        }

        .small-media {
          width: 44%;
          height: 100%;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          background: #0b1220;
        }

        .small-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .small-body {
          width: 56%;
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-start;
          justify-content: center;
        }

        .small-cat {
          font-size: 12px;
          color: var(--accent-2);
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        .small-title {
          font-size: 15px;
          font-weight: 800;
          color: var(--accent-1);
          line-height: 1.05;
        }

        .small-excerpt {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.25;
          margin-top: 6px;
        }

        .is-swapping {
          transform: scale(0.98);
          opacity: 0.6;
        }

        @keyframes pulse {
          0% { box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3); }
          50% { box-shadow: 0 4px 20px rgba(124, 58, 237, 0.6); }
          100% { box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3); }
        }

        .read-more.pulse {
          animation: pulse 2s infinite;
        }

        /* Contact section styles */
        .info-box {
          border: 1px solid rgba(255, 215, 0, 0.25);
          transition: border-width .15s ease, border-color .15s ease, box-shadow .15s ease;
        }

        .info-box:hover {
          border-width: 3px;
          border-color: rgba(255, 215, 0, 0.95);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.04);
        }

        .form-field {
          border: 1px solid rgba(255,215,0,0.12);
          transition: border-width .12s ease, border-color .12s ease, box-shadow .12s ease;
        }

        .form-field:hover,
        .form-field:focus {
          border-width: 2px;
          border-color: rgba(255,215,0,0.9);
          box-shadow: 0 6px 18px rgba(255,215,0,0.03);
        }

        .text-gold { color: var(--gold); }
        .bg-gold { background-color: var(--gold); }
        .border-gold { border-color: var(--gold); }

        /* Responsive */
        @media (max-width: 1000px) {
          .big-card { height: 360px; }
          .small-card { grid-auto-rows: 160px; }
        }

        @media (max-width: 820px) {
          .layout { flex-direction: column; }
          .left, .right { flex-basis: 100%; width: 100%; }
          .big-card { height: 420px; }
          .right { margin-top: 18px; }
        }

        @media (max-width: 768px) {
          .contact-section .min-h-screen {
            flex-direction: column;
          }
          .contact-section .md\\:w-1/2 {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .big-card { height: 320px; padding: 16px; }
          .big-title { font-size: 24px; }
          .right-grid { grid-template-columns: 1fr; grid-auto-rows: 140px; }
          .read-more { padding: 10px 18px; font-size: 14px; }
          .container { padding: 0 15px; }
        }
      `}</style>
    </div>
  );
}