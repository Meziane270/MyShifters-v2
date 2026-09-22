import React from 'react';
import { Clock, Workflow, Award, FileText, Target, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Clock,
  Workflow,
  Award,
  FileText,
  Target,
  Users
};

const ModernAdvantages = () => {
  const { t } = useLanguage();
  
  const advantages = [
    {
      id: 1,
      title: t('advantage1Title'),
      description: t('advantage1Desc'),
      icon: "Clock"
    },
    {
      id: 2,
      title: t('advantage2Title'),
      description: t('advantage2Desc'),
      icon: "Workflow"
    },
    {
      id: 3,
      title: t('advantage3Title'),
      description: t('advantage3Desc'),
      icon: "Award"
    },
    {
      id: 4,
      title: t('advantage4Title'),
      description: t('advantage4Desc'),
      icon: "FileText"
    },
    {
      id: 5,
      title: t('advantage5Title'),
      description: t('advantage5Desc'),
      icon: "Target"
    },
    {
      id: 6,
      title: t('advantage6Title'),
      description: t('advantage6Desc'),
      icon: "Users"
    }
  ];
  
  return (
    <section id="avantages" className="section" style={{ background: 'var(--bg-primary)' }}>
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
            background: 'var(--bg-tertiary)',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>
            {t('advantagesBadge')}
          </div>
          <h2 className="display-md" style={{ marginBottom: '24px' }}>
            {t('advantagesTitle')}
          </h2>
          <p className="body-lg">
            {t('advantagesSubtitle')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {advantages.map((advantage) => {
            const IconComponent = iconMap[advantage.icon];
            return (
              <div key={advantage.id} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--bg-primary)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-light)'
                }}>
                  <IconComponent size={28} color="var(--interactive-primary)" />
                </div>
                <div>
                  <h3 className="heading-md" style={{ marginBottom: '12px' }}>
                    {advantage.title}
                  </h3>
                  <p className="body-md">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '80px',
          padding: '64px',
          background: 'var(--bg-tertiary)',
          borderRadius: '24px',
          textAlign: 'center',
          border: '1px solid var(--border-light)'
        }}>
          <h3 className="heading-xl" style={{ marginBottom: '16px' }}>
            {t('ctaNeedStaff')}
          </h3>
          <p className="body-lg" style={{ marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            {t('ctaNeedStaffDesc')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg">
              {t('ctaRequestStaff')}
            </button>
            <button className="btn btn-outline btn-lg">
              {t('ctaBookCall')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAdvantages;
