import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../../../Routes/Experiences/Experience.module.css';

const ExperienceItem = ({ id, imgSrc, initials, company, role, period, details, employment, location, workMode, technologies = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={`${styles.experience} ${id === 'intermarine' ? styles.current : ''} ${isOpen ? styles.expanded : ''}`}>
      <button type="button" className={styles.detalhes} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={`experience-${id}`}>
        {imgSrc ? <img src={imgSrc} alt="" className={id === 'adidas' ? styles.adidasLogo : id === 'intermarine' ? styles.intermarineLogo : undefined} /> : <span className={styles.companyInitials} aria-hidden="true">{initials}</span>}
        <span className={styles.summary}>
          <span className={styles.role}>{role}</span>
          <span className={styles.company}>{company}</span>
        </span>
        <span className={styles.dateGroup}>
          {id === 'intermarine' && <span className={styles.currentBadge}>Atual</span>}
          <span className={styles.period}>{period}</span>
        </span>
        <FaChevronDown className={styles.icon} aria-hidden="true" />
      </button>
      <div id={`experience-${id}`} className={`${styles.descricao} ${isOpen ? styles.show : ''}`} aria-hidden={!isOpen}>
        <div className={styles.detailsContent}>
        {(employment || location || workMode) && <p className={styles.context}>{[employment, location, workMode].filter(Boolean).join(' · ')}</p>}
        <ul className={styles.activities}>
          {details.map(detail => <li key={detail.title}><strong>{detail.title}</strong><p>{detail.description}</p></li>)}
        </ul>
        {technologies.length > 0 && <div className={styles.technologies} aria-label="Tecnologias e ferramentas">{technologies.map(technology => <span key={technology}>{technology}</span>)}</div>}
        </div>
      </div>
    </section>
  );
};

export default ExperienceItem;
