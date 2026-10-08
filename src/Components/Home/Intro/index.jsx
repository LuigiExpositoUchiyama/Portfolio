import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Button from '../../Button';
import projects from '../../../Data/projects';
import styles from './Intro.module.css';
import Social from '../../../Styles/RedesSociais.module.css';

const socialLinks = [
  {
    href: 'https://www.instagram.com/dev.luigiuchiyama/',
    Icon: FaInstagram,
    alt: 'Instagram',
    className: Social.containerOne,
  },
  {
    href: 'mailto:luigi_uchiyama@outlook.com',
    Icon: FaEnvelope,
    alt: 'E-mail',
    className: Social.containerTwo,
  },
  {
    href: 'https://github.com/LuigiExpositoUchiyama',
    Icon: FaGithub,
    alt: 'GitHub',
    className: Social.containerThree,
  },
  {
    href: 'https://www.linkedin.com/in/luigi-uchiyama/',
    Icon: FaLinkedin,
    alt: 'LinkedIn',
    className: Social.containerFour,
  },
];

const Intro = () => {
  const desktopProject = projects.find(project => project.title.startsWith('Intermarine - Portal'));
  const mobileProject = projects.find(project => project.title === 'Lavagem Aquarius');
  return (
    <div className={styles.introContainer}>
      <div className={styles.introGrid}>
        <div className={styles.introText}>
          <span className={styles.eyebrow}>DESENVOLVIMENTO WEB SOB MEDIDA</span>
          <h1>Sites e sistemas feitos para o <span>seu negócio.</span></h1>
          <p>Desenvolvo sites profissionais e sistemas personalizados para apresentar sua empresa, organizar processos e facilitar o dia a dia.</p>
          <div className={styles.socialLinks}>
            <div className={styles.contactAction}>
            <Button
              href="https://wa.me/5511957047874"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.contactButtonContent}>Vamos conversar sobre seu projeto</span>
            </Button>
            </div>

            <div className={`${Social.card} ${styles.socialIcons}`}>
              {socialLinks.map(({ href, Icon, alt, className }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`${Social.socialContainer} ${className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visite meu perfil no ${alt}`}
                >
                  <Icon className={Social.socialSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.introImageContainer}>
<figure className={styles.showcase} aria-label="Exemplos de sites e sistemas desenvolvidos para clientes">
    <div className={styles.glow} aria-hidden="true" />
    <div className={styles.desktop}>
      <div className={styles.browserBar}><span className={styles.dots} aria-hidden="true"><i /><i /><i /></span><span>Intermarine / Gestão industrial</span></div>
      <img src={desktopProject.imageSource} alt="Portal Intermarine com ordens de fabricação e indicadores de produção" />
    </div>
    <div className={styles.phone}>
      <span className={styles.speaker} aria-hidden="true" />
      <img src="/img/hero-aquarius-mobile.png" alt={`Versão mobile do site ${mobileProject.title}`} />
    </div>
    <figcaption className={styles.caption}><span aria-hidden="true" />Sites e sistemas de clientes reais</figcaption>
  </figure>
        </div>
      </div>
    </div>
  );
};

export default Intro;
