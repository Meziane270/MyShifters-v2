import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../data/mock';

const ModernTestimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section id="temoignages" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
            {t('testimonialsBadge')}
          </div>
          <h2 className="display-md" style={{ marginBottom: '24px' }}>
            {t('testimonialsTitle')}
          </h2>
          <p className="body-lg">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card" style={{
              background: 'var(--bg-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <Quote size={40} color="var(--interactive-primary)" style={{ opacity: 0.2 }} />
              <p className="body-lg" style={{ 
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-light)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div>
                  <div className="body-md" style={{ 
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: 'var(--text-primary)'
                  }}>
                    {testimonial.author}
                  </div>
                  <div className="body-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '48px',
          background: 'var(--bg-primary)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)'
        }}>
          <p className="body-sm" style={{ marginBottom: '16px', color: 'var(--text-tertiary)' }}>
            {t('trustBadge')}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap'
          }}>
            {['Hôtel Palace', 'Grand Hôtel', 'Luxury Resort', 'Premium Suites'].map((hotel, idx) => (
              <div key={idx} style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--text-tertiary)',
                fontFamily: "'Playfair Display', serif"
              }}>
                {hotel}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
