import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PMSSection = () => {
  const { language } = useLanguage();
  
  // Logos réels des PMS (HotelEasy et Mews retirés)
  const pmsLogos = [
    { name: 'HotSoft', logo: '/logos/hotsoft.png' },
    { name: 'ThaÏs Soft', logo: '/logos/thais_soft.png' },
    { name: 'Opera', logo: '/logos/opera.png' },
    { name: 'Opera Cloud', logo: '/logos/opera_cloud.png' },
    { name: 'Fols', logo: '/logos/fols.jpeg' },
    { name: 'Lean', logo: '/logos/lean.png' },
    { name: 'Protel', logo: '/logos/protel.png' },
    { name: 'Medialog', logo: '/logos/medialog.png' },
    { name: 'JazzHotel', logo: '/logos/jazzhotel.jpeg' },
    { name: 'GeHo', logo: '/logos/logo_geho.webp' }
  ];

  const title = language === 'fr' ? 'PMS Maîtrisés' : 'Mastered PMS';
  const subtitle = language === 'fr' 
    ? 'Notre équipe est formée et certifiée sur les principaux systèmes de gestion hôtelière'
    : 'Our team is trained and certified on major hotel management systems';

  return (
    <section style={{ 
      padding: '80px 0',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '64px',
          maxWidth: '800px',
          margin: '0 auto 64px auto'
        }}>
          <div style={{ 
            display: 'inline-block',
            padding: '8px 16px',
            background: 'var(--bg-tertiary)',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>
            {language === 'fr' ? 'Systèmes' : 'Systems'}
          </div>
          <h2 className="display-md" style={{ marginBottom: '20px' }}>
            {title}
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        </div>

        {/* Slider Stylé avec Gradient Fade */}
        <div className="slider-container" style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: '20px 0'
        }}>
          {/* Gradient Fade Left */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '150px',
            background: 'linear-gradient(to right, var(--bg-primary), transparent)',
            zIndex: 10,
            pointerEvents: 'none'
          }}></div>
          
          {/* Gradient Fade Right */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '150px',
            background: 'linear-gradient(to left, var(--bg-primary), transparent)',
            zIndex: 10,
            pointerEvents: 'none'
          }}></div>

          <div className="pms-slider-track" style={{
            display: 'flex',
            gap: '48px',
            animation: 'smoothScroll 40s linear infinite',
            width: 'fit-content',
            paddingLeft: '48px'
          }}>
            {/* Triple for seamless loop */}
            {[...pmsLogos, ...pmsLogos, ...pmsLogos].map((pms, index) => (
              <div 
                key={index}
                className="pms-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px 36px',
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '2px solid var(--border-light)',
                  minWidth: '200px',
                  height: '100px',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(191, 174, 126, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(191, 174, 126, 0.25)';
                  e.currentTarget.style.borderColor = '#bfae7e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(191, 174, 126, 0.08)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                {/* Shine Effect on Hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transform: 'skewX(-25deg)',
                  transition: 'left 0.6s ease'
                }} className="shine-effect"></div>
                
                <img 
                  src={pms.logo} 
                  alt={pms.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '65px',
                    objectFit: 'contain',
                    filter: 'grayscale(20%)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(20%)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Message */}
        <div style={{
          textAlign: 'center',
          marginTop: '64px',
          padding: '32px',
          background: 'var(--bg-tertiary)',
          borderRadius: '16px',
          border: '1px solid rgba(191, 174, 126, 0.2)'
        }}>
          <p className="body-lg" style={{ 
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {language === 'fr' 
              ? 'Nos professionnels sont formés pour s\'adapter rapidement à votre environnement de travail et garantir une intégration sans friction.'
              : 'Our professionals are trained to quickly adapt to your work environment and ensure seamless integration.'}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .slider-container:hover .pms-slider-track {
          animation-play-state: paused;
        }

        .pms-card:hover .shine-effect {
          left: 150% !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .pms-card {
            min-width: 160px !important;
            height: 85px !important;
            padding: 20px 28px !important;
          }
          
          .pms-slider-track {
            gap: 32px !important;
          }
          
          .pms-card img {
            max-height: 55px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PMSSection;
