import React from 'react';
import styles from './Services.module.css';

/* SVGs */
import { ReactComponent as Design } from '../../Assets/design.svg';
import { ReactComponent as Manutencao } from '../../Assets/manutencao.svg';
import { ReactComponent as Web } from '../../Assets/web.svg';

const Services = () => {
  const services = [
    {
      icon: <Design className={styles.serviceIcon} />,
      title: 'UI / UX Design',
      description:
        'Criação de interfaces intuitivas, com foco na experiência do usuário e navegação eficiente, resultando em sites mais agradáveis e funcionais.',
    },
    {
      icon: <Manutencao className={styles.serviceIcon} />,
      title: 'Manutenção de Sites',
      description:
        'Atualizações frequentes, correções de erros, inclusão de novos conteúdos e suporte técnico para manter seu site sempre no ar.',
    },
    {
      icon: <Web className={styles.serviceIcon} />,
      title: 'Web Design',
      description:
        'Design moderno, alinhado à identidade visual da sua marca, garantindo um site visualmente atrativo e adaptado para todos os dispositivos.',
    },
  ];

  return (
    <section id="service" className={styles.servicesContainer}>
      <h2 className="title">Serviços</h2>

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
