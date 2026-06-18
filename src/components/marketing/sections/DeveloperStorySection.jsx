import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../../styles/site-screen-story.css'; // Reuse or new for story

const DeveloperStorySection = () => {
  const { t } = useTranslation();

  return (
    <section className="developer-story-section" style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #f8f4f0 0%, #f0e8e0 100%)' }}>
      <div className="story-container" style={{ maxWidth: '720px', margin: '0 auto', lineHeight: '1.8' }}>
        <h1 className="story-title" style={{ fontSize: '3.2rem', textAlign: 'center', marginBottom: '60px', color: '#3a2f2f' }}>
          {t('story.title')}
        </h1>
        
        <div className="story-content" style={{ fontSize: '1.15rem', color: '#4a3f3f' }}>
          <p style={{ marginBottom: '40px' }}>{t('story.intro')}</p>
          <p style={{ marginBottom: '40px' }}>{t('story.moment')}</p>
          <p style={{ marginBottom: '40px' }}>{t('story.wondering')}</p>
          <p style={{ marginBottom: '40px' }}>{t('story.writing')}</p>
          <p style={{ marginBottom: '40px' }}>{t('story.body')}</p>
          <p style={{ marginBottom: '40px' }}>{t('story.patterns')}</p>
          <p style={{ marginBottom: '60px' }}>{t('story.exists')}</p>
          <p style={{ fontStyle: 'italic', textAlign: 'center', fontSize: '1.3rem', color: '#5a4a4a' }}>
            {t('story.closing')}
          </p>
        </div>

        <div className="story-cta" style={{ textAlign: 'center', marginTop: '80px' }}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cta-button"
            style={{ padding: '16px 48px', fontSize: '1.1rem' }}
          >
            {t('story.return')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperStorySection;
