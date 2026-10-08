import React from 'react';
import ExperienceItem from '../../Components/Experiences/ExperienceItem';
import experiences from '../../Data/experiences';
import styles from './Experience.module.css';

const Experiences = () => (
  <section className={styles.experienceContainer}>
    <header className={styles.sectionHeader}>
      <h1 className="title">Experiências</h1>
      <p className={styles.introduction}>Minha trajetória em desenvolvimento web, sistemas e atendimento ao cliente.</p>
    </header>
    <div className={styles.experienceList}>
      {experiences.map(exp => <ExperienceItem key={exp.id} {...exp} />)}
    </div>
  </section>
);

export default Experiences;
