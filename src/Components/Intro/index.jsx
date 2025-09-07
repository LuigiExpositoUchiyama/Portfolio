import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Button from '../../Components/Button';
import TypingEffect from '../../Components/TypingEffect';
import introImg from '/icons/img.png';
import styles from './Intro.module.css';
import Social from '../../Styles/RedesSociais.module.css';

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
  return (
    <div className={styles.introContainer}>
      <div className={styles.introGrid}>
        <div className={styles.introText}>
          <TypingEffect />
          <p>
            Já pensou em ter uma solução digital que realmente valorize o seu
            trabalho? Meu propósito é transformar ideias em projetos práticos e
            criativos, ajudando você ou sua empresa a conquistar mais espaço e
            resultados no mundo online.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://wa.me/5511957047874"
              className={styles.socialLinkButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <div className={styles.contactButton}>
                  <span>Entre em Contato</span>
                </div>
              </Button>
            </a>

            <div className={Social.card}>
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
          <img
            src={introImg}
            alt="Ilustração da intro"
            className={styles.introImg}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
