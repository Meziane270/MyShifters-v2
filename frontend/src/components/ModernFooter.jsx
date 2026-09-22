import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      padding: '80px 0 32px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}>
          {/* Company Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_luxury-service-link/artifacts/xjqpbr9k_logo_myShifters_luxe-removebg-preview.png" 
                alt="MyShifters" 
                style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p className="body-md" style={{ marginBottom: '24px' }}>
              La plateforme de référence pour la mise en relation de professionnels de l'hôtellerie de luxe.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="frontend/src/components#"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--bg-primary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    border: '1px solid var(--border-light)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--interactive-primary)';
                    e.currentTarget.querySelector('svg').style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-primary)';
                    e.currentTarget.querySelector('svg').style.color = 'var(--text-secondary)';
                  }}
                >
                  <Icon size={18} color="var(--text-secondary)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-md" style={{ marginBottom: '24px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Services', 'Avantages', 'Témoignages', 'À propos', 'Carrières'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="body-md"
                    style={{ 
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--interactive-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Hotels */}
          <div>
            <h4 className="heading-md" style={{ marginBottom: '24px' }}>
              Pour les Hôtels
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Demander du personnel', 'Tarifs', 'Comment ça marche', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href="frontend/src/components#"
                    className="body-md"
                    style={{ 
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--interactive-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-md" style={{ marginBottom: '24px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--text-secondary)" />
                <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  contact@myshifters.com
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="var(--text-secondary)" />
                <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  +33 1 23 45 67 89
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} color="var(--text-secondary)" />
                <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p className="body-sm">
            © {currentYear} MyShifters. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a 
              href="frontend/src/components#"
              className="body-sm"
              style={{ 
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--interactive-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Mentions légales
            </a>
            <a 
              href="frontend/src/components#"
              className="body-sm"
              style={{ 
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--interactive-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Confidentialité
            </a>
            <a 
              href="frontend/src/components#"
              className="body-sm"
              style={{ 
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--interactive-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
