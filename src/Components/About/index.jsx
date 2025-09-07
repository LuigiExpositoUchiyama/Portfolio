import React from 'react';
import PerfilImg from '/Perfil.png';
import { Link } from 'react-router-dom';
import '../../App.module.css';
import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          <h1 className="title">Sobre mim</h1>
          <p>
            Olá! Sou Luigi Uchiyama, formado em Análise e Desenvolvimento de
            Sistemas e sou focado em criar interfaces digitais bonitas e fáceis
            de usar, com atenção aos detalhes e à performance (velocidade e
            eficiência). Transformo ideias em soluções digitais que ajudam
            pessoas e empresas, como sites, sistemas e painéis de controle.
          </p>
          <p>
            Gosto de trabalhar de forma organizada: entender o problema, testar
            com os usuários e evoluir o projeto rapidamente. Meu objetivo é
            sempre entregar valor real, garantindo que cada projeto seja útil,
            funcional e fácil de usar.
          </p>

          <p className={styles.quickLinksIntro}>
            Quer saber mais sobre meu trabalho? Veja:
          </p>
          <div className={styles.quickLinks}>
            <Link to="/education" className={styles.quickLink}>
              Formações
            </Link>
            <Link to="/experience" className={styles.quickLink}>
              Experiências
            </Link>
            <Link to="/projects" className={styles.quickLink}>
              Projetos
            </Link>
            <Link to="/certificates" className={styles.quickLink}>
              Certificados
            </Link>
          </div>
        </div>

        <div className={styles.perfilImageContainer}>
          <img
            src={PerfilImg}
            alt="Foto de perfil do Luigi"
            className={styles.perfilImg}
          />
        </div>
      </div>

      <div className={styles.achievements}>
        {[
          { label: 'graduação', value: '+1' },
          { label: 'experiências', value: '+4' },
          { label: 'projetos', value: '+10' },
          { label: 'certificados', value: '+10' },
          { label: 'cursos', value: '+12' },
        ].map(({ label, value }) => (
          <p key={label} className={styles.achievementItem}>
            <span className={styles.achievementNumber}>{value}</span>
            <span className={styles.achievementLabel}>{label}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
