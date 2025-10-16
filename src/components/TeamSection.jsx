import React, { useState, useEffect, useRef } from "react";

/**
 * TeamSection - Larger cards + dynamic spacing version
 *
 * Drop into your project as TeamSection.jsx
 *
 * Tweak CONFIG below to change sizes/spacing quickly.
 */

const CONFIG = {
  // sizing
  stageMaxWidth: "1400px", // best-effort max width of the stage container (use '100%' to allow full)
  itemWidth: 450, // base card width in px (desktop)
  itemWidthMobile: 260,
  avatarSize: 350, // avatar diameter (desktop)
  avatarSizeMobile: 100,
  avatarBorder: 4, // avatar border thickness
  cardBorderCenter: 10,
  cardBorderOther: 6,
  cardPadding: 22,
  cardRadius: 18,

  // spacing / perspective
  baseSpacing: 380, // maximum spacing between adjacent slots (desktop)
  spacingClampRatio: 0.9, // reduce spacing if stage is tight
  perspective: 1500,
  rotateYMultiplier: -10,
  baseScale: 1,
  scaleStep: 0.12,
  opacityStep: 0.18,

  // behavior
  maxSideSlots: 2, // show up to 2 items each side => total 5 visible
  transitionMs: 600,
  slideIntervalMs: 3000,
};

const TeamSection = () => {
  const [current, setCurrent] = useState(2); // default center index
  const [stageWidth, setStageWidth] = useState(0);
  const stageRef = useRef(null);
  const autoRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Funciona84",
      role: "Lead Designer",
      image: "https://i.pravatar.cc/400?img=12",
      social: { github: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Rohit",
      role: "Web3/Web2 Front-End Developer",
      image: "https://i.pravatar.cc/400?img=32",
      social: { github: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Mansa",
      role: "Business Strategist",
      image: "https://i.pravatar.cc/400?img=5",
      social: { github: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Lilesper",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/400?img=47",
      social: { github: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "Devine",
      role: "Smart Contract Developer",
      image: "https://i.pravatar.cc/400?img=66",
      social: { github: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
  ];

  // measure stage width for dynamic spacing
  useEffect(() => {
    const measure = () => {
      if (stageRef.current) {
        setStageWidth(stageRef.current.clientWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // dynamic spacing: choose min(baseSpacing, stageWidth / slots * clampRatio)
  const computeSpacing = () => {
    const visibleSlots = CONFIG.maxSideSlots * 2 + 1;
    if (!stageWidth) return CONFIG.baseSpacing;
    const candidate = (stageWidth / visibleSlots) * CONFIG.spacingClampRatio;
    return Math.max(120, Math.min(CONFIG.baseSpacing, candidate));
  };

  const spacing = computeSpacing();
  const itemWidth = stageWidth < 720 ? CONFIG.itemWidthMobile : CONFIG.itemWidth;
  const avatarSize = stageWidth < 720 ? CONFIG.avatarSizeMobile : CONFIG.avatarSize;

  // auto slide
  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, teamMembers.length]);

  const startAuto = () => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % teamMembers.length);
    }, CONFIG.slideIntervalMs);
  };

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  // circular offset helper (minimal distance)
  const circularOffset = (index) => {
    const len = teamMembers.length;
    let raw = index - current;
    raw = ((raw % len) + len) % len;
    if (raw > len / 2) raw -= len;
    return raw;
  };

  const onClickItem = (idx) => {
    setCurrent(idx);
  };

  return (
    <>
      <style>{`
        :root {
          --gold: #fff3b0;
          --bg: #1a1d22;
          --accent: #3b344d;
          --card-bg: rgba(8,10,12,0.95);
        }
        .team-section {
          background: linear-gradient(180deg, #fffbe0 0%, #fff3b0 100%);
          padding: 64px 12px 100px;
          box-sizing: border-box;
        }
        .team-container {
          max-width: ${CONFIG.stageMaxWidth};
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }
        .team-title {
          font-weight: 800;
          color: var(--bg);
          letter-spacing: 4px;
          font-size: clamp(22px, 4vw, 48px);
          margin: 0 0 8px;
          text-align: center;
        }

        .carousel {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          perspective: ${CONFIG.perspective}px;
        }

        .stage {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: ${Math.max(360, avatarSize + 220)}px;
        }

        .item {
          position: absolute;
          top: 50%;
          transform-style: preserve-3d;
          transition: transform ${CONFIG.transitionMs}ms cubic-bezier(.2,.9,.2,1), opacity 300ms ease;
          width: ${itemWidth}px;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
          user-select: none;
        }

        .card {
          background: var(--card-bg);
          color: #fff;
          padding: ${CONFIG.cardPadding}px;
          border-radius: ${CONFIG.cardRadius}px;
          display: flex;
          gap: 14px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-style: solid;
          box-shadow: 0 18px 36px rgba(11,11,11,0.35);
        }

        .avatar {
          width: ${avatarSize}px;
          height: ${avatarSize}px;
          border-radius: 50%;
          object-fit: cover;
          border: ${CONFIG.avatarBorder}px solid var(--accent);
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);
        }

        .name { margin: 12px 0 0; font-weight: 700; font-size: 18px; color: #fff; }
        .role { margin: 6px 0 0; font-size: 14px; color: #d7d7d7; opacity: 0.95; }
        .socials { display:flex; gap:10px; margin-top:12px; }
        .socials a { color: var(--gold); font-size: 18px; text-decoration:none; }

        .dots { display:flex; gap:10px; margin-top: 18px; }
        .dot { width:11px; height:11px; border-radius:50%; background:#413b52; cursor:pointer; transition: transform 160ms ease, background 160ms; }
        .dot.active { transform:scale(1.6); background:#fff; }

        @media (max-width: 720px) {
          .stage { height: 300px; }
          .item { width: ${CONFIG.itemWidthMobile}px; }
          .avatar { width: ${CONFIG.avatarSizeMobile}px; height: ${CONFIG.avatarSizeMobile}px; border-width: 10px; }
        }
      `}</style>

      <section className="team-section" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
        <div className="team-container">
          <h2 className="team-title">Our Team</h2>

          <div className="carousel" aria-roledescription="carousel">
            <div
              className="stage"
              role="list"
              ref={stageRef}
              aria-label="Team members carousel"
            >
              {teamMembers.map((member, idx) => {
                const offset = circularOffset(idx); // negative => left, positive => right
                const absOff = Math.abs(offset);

                // If offset too large we can push further away or hide (but keep visible slots)
                if (absOff > CONFIG.maxSideSlots + 3) {
                  // hide really far away items (optional)
                  return null;
                }

                // compute transforms
                const tx = offset * spacing;
                const scale = Math.max(0.5, CONFIG.baseScale - absOff * CONFIG.scaleStep);
                const rotateY = offset * CONFIG.rotateYMultiplier;
                const zIndex = 100 - absOff;
                const opacity = absOff > CONFIG.maxSideSlots ? 0 : Math.max(0.35, 1 - absOff * CONFIG.opacityStep);

                const isCenter = offset === 0;
                const borderW = isCenter ? CONFIG.cardBorderCenter : CONFIG.cardBorderOther;

                const itemStyle = {
                  transform: `translateX(${tx}px) translateY(-50%) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  pointerEvents: isCenter ? "auto" : "auto",
                };

                const cardStyle = {
                  borderWidth: `${borderW}px`,
                  borderColor: "var(--gold)",
                };

                return (
                  <div
                    key={member.id}
                    role="listitem"
                    aria-label={`${member.name} - ${member.role}`}
                    className="item"
                    style={itemStyle}
                    onClick={() => onClickItem(idx)}
                  >
                    <div className="card" style={cardStyle}>
                      <img className="avatar" src={member.image} alt={member.name} loading="lazy" />
                      <div className="name">{member.name}</div>
                      <div className="role">{member.role}</div>
                      <div className="socials" aria-hidden>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="dots" role="tablist" aria-label="Team navigation">
            {teamMembers.map((m, i) => (
              <div
                key={m.id}
                role="tab"
                aria-selected={current === i}
                className={`dot ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                title={`${m.name}`}
              />
            ))}
          </div>
        </div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </section>
    </>
  );
};

export default TeamSection;