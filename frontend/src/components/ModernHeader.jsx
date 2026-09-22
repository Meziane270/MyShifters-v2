import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const ModernHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9; // 90vh
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('services'), href: '#services' },
    { name: t('advantages'), href: '#avantages' },
    { name: t('testimonials'), href: '#temoignages' }
  ];

  return (
    <header 
      className="modern-header"
      style={{
        background: scrolled 
          ? (theme === 'light' ? 'rgba(248, 245, 240, 0.95)' : 'rgba(0, 0, 0, 0.95)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled 
          ? (theme === 'light' ? '1px solid rgba(191, 174, 126, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)')
          : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-wrapper">
          <img 
            src="https://customer-assets.emergentagent.com/job_luxury-service-link/artifacts/xjqpbr9k_logo_myShifters_luxe-removebg-preview.png" 
            alt="MyShifters" 
            style={{ height: '75px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{
                color: scrolled 
                  ? (theme === 'light' ? 'var(--text-secondary)' : 'rgba(255, 255, 255, 0.85)')
                  : 'rgba(255, 255, 255, 0.9)',
                transition: 'color 0.3s ease'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          {/* Language Selector */}
          <button 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-secondary)'
            }}
            onClick={toggleLanguage}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-tertiary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle - Doré élégant */}
          <button 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: theme === 'light' ? '#f5f0e8' : '#1e293b',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              color: theme === 'light' ? '#bfae7e' : '#94a3b8'
            }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme === 'light' ? '#ebe4d8' : '#334155';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = theme === 'light' ? '#f5f0e8' : '#1e293b';
            }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button 
            className="btn btn-secondary btn-sm"
            onClick={(e) => e.preventDefault()}
          >
            {t('login')}
          </button>
          <button 
            className="btn btn-primary btn-sm"
            onClick={(e) => e.preventDefault()}
          >
            {t('signup')}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: window.innerWidth <= 1024 ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              color: 'var(--text-secondary)'
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px 32px',
            borderTop: '1px solid var(--border-light)',
            background: 'var(--bg-primary)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default ModernHeader;
