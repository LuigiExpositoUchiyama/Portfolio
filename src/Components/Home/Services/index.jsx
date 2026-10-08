import React from 'react';
import styles from './Services.module.css';

/* SVGs */
import { ReactComponent as Design } from '../../../Assets/design.svg';
import { ReactComponent as Manutencao } from '../../../Assets/manutencao.svg';
import { ReactComponent as Web } from '../../../Assets/web.svg';

const Services = () => {
  const services = [
    {
      icon: <Design className={styles.serviceIcon} />,
      title: 'Criação de Sites',
      description: 'Sites profissionais para apresentar sua empresa, divulgar serviços e facilitar o contato com clientes.',
    },
    {
      icon: <Web className={styles.serviceIcon} />,
      title: 'Sistemas Personalizados',
      description: 'Painéis e sistemas para organizar processos, acompanhar informações e facilitar a rotina da sua empresa.',
    },
    {
      icon: <Manutencao className={styles.serviceIcon} />,
      title: 'Manutenção e Melhorias',
      description: 'Atualizações, correções e melhorias de desempenho e usabilidade para manter seu site funcionando bem.',
    },
  ];

  return (
    <section id="service" className={styles.servicesContainer}>
      <h2 className="title">Serviços</h2>
      <p className={styles.servicesIntro}>Soluções digitais para apresentar seu negócio e simplificar sua operação.</p>

      <div className={styles.servicesRow}>
        {services.map(({ icon, title, description }, i) => (
          <article key={i} className={styles.serviceCard}>
            <div className={styles.serviceIconWrap}>{icon}</div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceText}>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
