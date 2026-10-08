import React from 'react';
import PerfilImg from '/Perfil.png';
import projects from '../../../Data/projects';
import experiences from '../../../Data/experiences';
import { Link } from 'react-router-dom';
import '../../../App.module.css';
import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          <h1 className="title">Sobre mim</h1>
          <p>
            Sou Luigi Uchiyama, formado em Análise e Desenvolvimento de Sistemas. Tenho mais de 2 anos de experiência em desenvolvimento e crio sites e sistemas personalizados para empresas, com foco em interfaces claras, desempenho e facilidade de uso.
          </p>
          <p>
            Minha experiência inclui sites comerciais e sistemas de gestão industrial. Trabalho desde o entendimento da necessidade até a implementação, buscando soluções que ajudem cada cliente a apresentar seu negócio e organizar seus processos.
          </p>

          <p className={styles.quickLinksIntro}>
            Quer saber mais sobre meu trabalho? Veja:
          </p>
          <div className={styles.quickLinks}>
            <Link to="/projects" className={`${styles.quickLink} ${styles.featuredLink}`}>
              Projetos
            </Link>
            <Link to="/education" className={styles.quickLink}>
              Formações
            </Link>
            <Link to="/experience" className={styles.quickLink}>
              Experiências
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
          { label: 'projetos', value: projects.length },
          { label: 'graduação', value: '1' },
          { label: 'experiências', value: experiences.length },
          { label: 'certificados', value: '10' },
          { label: 'cursos', value: '12' },
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
