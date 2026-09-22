import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  fr: {
    // Navigation
    services: 'Services',
    advantages: 'Avantages',
    testimonials: 'Témoignages',
    login: 'S\'identifier',
    signup: 'S\'inscrire',
    
    // Hero
    heroBadge: '✨ Personnel hôtelier d\'exception',
    heroTitle: 'L\'excellence hôtelière, même en renfort',
    heroDescription: 'MyShifters accompagne les hôtels, résidences et établissements premium avec du personnel extra à la demande. Réception, F&B, housekeeping ou maintenance : des professionnels prêts à l\'emploi, disponibles rapidement.',
    ctaRequest: 'Demander du renfort',
    ctaFind: 'Trouver une mission',
    
    // Stats
    stat24h: '24h',
    stat24hLabel: 'Réactivité',
    stat98: '98%',
    stat98Label: 'Satisfaction',
    stat77: '7/7',
    stat77Label: 'Disponibilité',
    stat500: '500+',
    stat500Label: 'Professionnels',
    
    // Services Section
    servicesBadge: 'Services',
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Nous couvrons tous les besoins en personnel extra pour établissements hôteliers',
    
    // Service 1 - Reception
    service1Subtitle: 'Front Desk Extras',
    service1Title: 'Réception',
    service1Desc: 'Agents de réception, night auditors, accueil check-in/out, standard téléphonique et relations clients.',
    service1Detail1: 'Accueil professionnel chaleureux',
    service1Detail2: 'Check-in/out efficace',
    service1Detail3: 'Missions ponctuelles ou récurrentes',
    
    // Service 2 - Housekeeping
    service2Subtitle: 'House Keeping',
    service2Title: 'Housekeeping',
    service2Desc: 'Gouvernantes expérimentées, respect des process, discrétion et efficacité.',
    service2Detail1: 'Entretien des chambres & espaces communs',
    service2Detail2: 'Standards d\'hygiène strictes',
    service2Detail3: 'Respect de l\'intimité des clients',
    
    // Service 3 - F&B
    service3Subtitle: 'F&B & Floor',
    service3Title: 'Restaurant & Bar',
    service3Desc: 'Serveurs, commis, barmen pour petits-déjeuners, service à la carte ou événements.',
    service3Detail1: 'Service à table professionnel',
    service3Detail2: 'Barmen qualifiés',
    service3Detail3: 'Respect des normes d\'hygiène',
    
    // Service 4 - Maintenance
    service4Subtitle: 'Technical Maintenance',
    service4Title: 'Maintenance',
    service4Desc: 'Interventions rapides, petite maintenance, assistance technique et gestion d\'urgence.',
    service4Detail1: 'Dépannages rapides',
    service4Detail2: 'Préventif & correctif',
    service4Detail3: 'Électricité, plomberie, CVC…',
    
    // Advantages Section
    advantagesBadge: 'Pourquoi nous choisir',
    advantagesTitle: 'Ce qui fait de nous le partenaire idéal',
    advantagesSubtitle: 'Chez MyShifters, nous ne fournissons pas que du personnel. Nous vous connectons avec des micro-entrepreneurs qualifiés, disponibles rapidement et sélectionnés pour leur professionnalisme.',
    
    advantage1Title: 'Réactivité 24h',
    advantage1Desc: 'Support en moins de 24h. Disponibilité 7/7 pour les situations critiques.',
    advantage2Title: 'Flexibilité',
    advantage2Desc: 'Durée, compétences, horaires, budget : nous adaptons l\'équipe à vos besoins.',
    advantage3Title: 'Qualité',
    advantage3Desc: 'Extras sélectionnés, formés aux standards hôteliers, évalués régulièrement.',
    advantage4Title: 'Transparence',
    advantage4Desc: 'Pas de frais cachés. Tarification claire et facturation précise.',
    advantage5Title: 'Expertise',
    advantage5Desc: '7 ans dans l\'hôtellerie : nous connaissons vos contraintes et attentes.',
    advantage6Title: 'Accompagnement',
    advantage6Desc: 'Un contact dédié et un suivi qualité tout au long de la mission.',
    
    ctaNeedStaff: 'Besoin de personnel rapidement ?',
    ctaNeedStaffDesc: 'Créez un compte et demandez du personnel extra en quelques minutes',
    ctaRequestStaff: 'Demander du personnel',
    ctaBookCall: 'Réserver un appel',
    
    // Testimonials
    testimonialsBadge: 'Témoignages',
    testimonialsTitle: 'Retours de nos partenaires hôteliers',
    testimonialsSubtitle: 'Découvrez ce que disent les professionnels qui nous font confiance',
    trustBadge: 'ILS NOUS FONT CONFIANCE',
    
    // Footer
    footerDesc: 'La plateforme de référence pour la mise en relation de professionnels de l\'hôtellerie de luxe.',
    footerNavigation: 'Navigation',
    footerForHotels: 'Pour les Hôtels',
    footerContact: 'Contact',
    footerAbout: 'À propos',
    footerCareers: 'Carrières',
    footerPricing: 'Tarifs',
    footerHowItWorks: 'Comment ça marche',
    footerFAQ: 'FAQ',
    footerLegal: 'Mentions légales',
    footerPrivacy: 'Confidentialité',
    footerTerms: 'CGU',
    footerRights: 'Tous droits réservés.'
  },
  en: {
    // Navigation
    services: 'Services',
    advantages: 'Benefits',
    testimonials: 'Testimonials',
    login: 'Login',
    signup: 'Sign up',
    
    // Hero
    heroBadge: '✨ Exceptional hospitality staff',
    heroTitle: 'Hotel excellence, even when you need reinforcements',
    heroDescription: 'MyShifters supports hotels, residences and premium properties with on-demand extra staff. Front desk, F&B, housekeeping or maintenance: ready-to-go professionals, available fast.',
    ctaRequest: 'Request staff',
    ctaFind: 'Find a mission',
    
    // Stats
    stat24h: '24h',
    stat24hLabel: 'Responsiveness',
    stat98: '98%',
    stat98Label: 'Satisfaction',
    stat77: '7/7',
    stat77Label: 'Availability',
    stat500: '500+',
    stat500Label: 'Professionals',
    
    // Services Section
    servicesBadge: 'Services',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'We cover all extra-staffing needs for hospitality properties',
    
    // Service 1 - Reception
    service1Subtitle: 'Front Desk Extras',
    service1Title: 'Reception',
    service1Desc: 'Reception agents, night auditors, arrivals/departures, phone switchboard and guest relations.',
    service1Detail1: 'Warm professional welcome',
    service1Detail2: 'Efficient check-in/out',
    service1Detail3: 'Flexible one-off or recurring shifts',
    
    // Service 2 - Housekeeping
    service2Subtitle: 'House Keeping',
    service2Title: 'Housekeeping',
    service2Desc: 'Experienced room attendants, process compliance, discretion and efficiency.',
    service2Detail1: 'Rooms & public areas upkeep',
    service2Detail2: 'Strict hygiene standards',
    service2Detail3: 'Respect for guest privacy',
    
    // Service 3 - F&B
    service3Subtitle: 'F&B & Floor',
    service3Title: 'Restaurant & Bar',
    service3Desc: 'Waiters, runners, bartenders for breakfasts, à la carte service or events.',
    service3Detail1: 'Professional table service',
    service3Detail2: 'Qualified bartenders',
    service3Detail3: 'Hygiene standards respected',
    
    // Service 4 - Maintenance
    service4Subtitle: 'Technical Maintenance',
    service4Title: 'Maintenance',
    service4Desc: 'Fast interventions, light maintenance, technical assistance and emergency handling.',
    service4Detail1: 'Quick fixes',
    service4Detail2: 'Preventive & corrective',
    service4Detail3: 'Electrical, plumbing, HVAC…',
    
    // Advantages Section
    advantagesBadge: 'Why choose us',
    advantagesTitle: 'What makes us the ideal partner',
    advantagesSubtitle: 'At MyShifters, we don\'t just supply staff. We connect you with qualified micro-entrepreneurs, available quickly and selected for professionalism.',
    
    advantage1Title: '24h responsiveness',
    advantage1Desc: 'Support in under 24 hours. 7/7 availability for critical situations.',
    advantage2Title: 'Flexibility',
    advantage2Desc: 'Duration, skills, schedules, budget: we tailor the team to your needs.',
    advantage3Title: 'Quality',
    advantage3Desc: 'Selected extras, trained to hospitality standards, regularly reviewed.',
    advantage4Title: 'Transparency',
    advantage4Desc: 'No hidden fees. Clear pricing and accurate billing.',
    advantage5Title: 'Expertise',
    advantage5Desc: '7 years in hospitality: we know your constraints and expectations.',
    advantage6Title: 'Support',
    advantage6Desc: 'A dedicated contact and quality follow-up throughout the mission.',
    
    ctaNeedStaff: 'Need staff quickly?',
    ctaNeedStaffDesc: 'Create an account and request extra staff in minutes',
    ctaRequestStaff: 'Request staff',
    ctaBookCall: 'Book a call',
    
    // Testimonials
    testimonialsBadge: 'Testimonials',
    testimonialsTitle: 'Feedback from hospitality partners',
    testimonialsSubtitle: 'See what professionals who trust us have to say',
    trustBadge: 'THEY TRUST US',
    
    // Footer
    footerDesc: 'The leading platform for connecting luxury hospitality professionals.',
    footerNavigation: 'Navigation',
    footerForHotels: 'For Hotels',
    footerContact: 'Contact',
    footerAbout: 'About',
    footerCareers: 'Careers',
    footerPricing: 'Pricing',
    footerHowItWorks: 'How it works',
    footerFAQ: 'FAQ',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerRights: 'All rights reserved.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
