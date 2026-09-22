import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ModernHero = () => {
  const { t } = useLanguage();
  
  return (
    <section style={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Video Background - Votre vidéo personnalisée */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="https://customer-assets.emergentagent.com/job_luxury-service-link/artifacts/qt9vdmj7_Untitled%20design.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay gris élégant */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(30, 30, 35, 0.85) 0%, rgba(50, 50, 55, 0.6) 50%, rgba(70, 70, 75, 0.3) 100%)'
        }} />
      </div>

      {/* Content Over Video */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2,
        paddingTop: '140px',
        paddingBottom: '80px'
      }}>
        <div style={{ 
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Badge */}
          <div style={{ 
            display: 'inline-block',
            padding: '10px 24px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#ffffff',
            marginBottom: '32px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            {t('heroBadge')}
          </div>

          {/* Main Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(42px, 6vw, 76px)',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '28px',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
          }}>
            {t('heroTitle')}
          </h1>
          
          {/* Description */}
          <p style={{
            fontSize: '21px',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '720px',
            margin: '0 auto 48px auto',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)',
            fontWeight: '300'
          }}>
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '80px'
          }}>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '18px 36px',
              background: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '8px',
              fontSize: '17px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.2)';
            }}
            >
              {t('ctaRequest')}
              <ArrowRight size={20} />
            </button>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '18px 36px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              color: '#ffffff',
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              fontSize: '17px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            >
              {t('ctaFind')}
            </button>
          </div>

          {/* Stats - Plus petits et discrets */}
          <div style={{
            display: 'flex',
            gap: '48px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '32px 40px',
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '36px', 
                fontWeight: '600', 
                color: '#ffffff',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '6px',
                lineHeight: '1',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
              }}>
                {t('stat24h')}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                {t('stat24hLabel')}
              </div>
            </div>
            <div style={{ 
              width: '1px', 
              background: 'rgba(255, 255, 255, 0.15)',
              alignSelf: 'stretch'
            }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '36px', 
                fontWeight: '600', 
                color: '#ffffff',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '6px',
                lineHeight: '1',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
              }}>
                {t('stat98')}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                {t('stat98Label')}
              </div>
            </div>
            <div style={{ 
              width: '1px', 
              background: 'rgba(255, 255, 255, 0.15)',
              alignSelf: 'stretch'
            }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '36px', 
                fontWeight: '600', 
                color: '#ffffff',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '6px',
                lineHeight: '1',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)'
              }}>
                {t('stat77')}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: '400',
                letterSpacing: '0.5px'
              }}>
                {t('stat77Label')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
