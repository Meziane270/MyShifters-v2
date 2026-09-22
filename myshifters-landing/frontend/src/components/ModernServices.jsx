import React from 'react';
import { UserCheck, Sparkles, Wine, Wrench, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  UserCheck,
  Sparkles,
  Wine,
  Wrench
};

const ModernServices = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 1,
      subtitle: t('service1Subtitle'),
      title: t('service1Title'),
      description: t('service1Desc'),
      details: [t('service1Detail1'), t('service1Detail2'), t('service1Detail3')],
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
      icon: "UserCheck"
    },
    {
      id: 2,
      subtitle: t('service2Subtitle'),
      title: t('service2Title'),
      description: t('service2Desc'),
      details: [t('service2Detail1'), t('service2Detail2'), t('service2Detail3')],
      image: "https://images.pexels.com/photos/6466212/pexels-photo-6466212.jpeg",
      icon: "Sparkles"
    },
    {
      id: 3,
      subtitle: t('service3Subtitle'),
      title: t('service3Title'),
      description: t('service3Desc'),
      details: [t('service3Detail1'), t('service3Detail2'), t('service3Detail3')],
      image: "https://images.pexels.com/photos/6284891/pexels-photo-6284891.jpeg",
      icon: "Wine"
    },
    {
      id: 4,
      subtitle: t('service4Subtitle'),
      title: t('service4Title'),
      description: t('service4Desc'),
      details: [t('service4Detail1'), t('service4Detail2'), t('service4Detail3')],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
      icon: "Wrench"
    }
  ];
  
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '80px',
          maxWidth: '800px',
          margin: '0 auto 80px auto'
        }}>
          <div style={{ 
            display: 'inline-block',
            padding: '8px 16px',
            background: 'var(--bg-primary)',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>
            {t('servicesBadge')}
          </div>
          <h2 className="display-md" style={{ marginBottom: '24px' }}>
            {t('servicesTitle')}
          </h2>
          <p className="body-lg">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '320px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    width: '56px',
                    height: '56px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}>
                    <IconComponent size={28} color="#bfae7e" />
                  </div>
                </div>
                <div className="service-card-content">
                  <div className="body-sm" style={{ 
                    color: 'var(--interactive-primary)',
                    marginBottom: '8px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {service.subtitle}
                  </div>
                  <h3 className="heading-lg" style={{ marginBottom: '16px' }}>
                    {service.title}
                  </h3>
                  <p className="body-md" style={{ marginBottom: '24px' }}>
                    {service.description}
                  </p>
                  {service.details && (
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      {service.details.map((detail, idx) => (
                        <li key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '12px',
                          fontSize: '14px',
                          color: 'var(--text-secondary)'
                        }}>
                          <Check size={16} color="#bfae7e" strokeWidth={2.5} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
