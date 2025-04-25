import React from 'react';
import { Link } from 'react-router-dom';

/* ACESSIBILIDADE */
import Detalhes from '../../Components/Detalhes';
import Button from '../../Components/Button';
import TypingEffect from '../../Components/TypingEffect';

/* ÍCONES DO REACT */
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi'; // Importando o ícone de download com contorno

/* IMAGENS */
import { ReactComponent as Perfil } from '../../Assets/Perfil.svg'; // Foto de perfil

/* CSS */
import '../../App.module.css';
import styles from './Home.module.css';
import Social from '../../Styles/RedesSociais.module.css';

const socialLinks = [
  {
    href: 'https://www.instagram.com/dev.luigiuchiyama/',
    Icon: FaInstagram,
    alt: 'Instagram',
    className: Social.containerOne,
  },
  {
    href: 'https://wa.me/11957047874',
    Icon: FaWhatsapp,
    alt: 'WhatsApp',
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

const Home = () => {
  return (
    <section>
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          <TypingEffect />
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas. Meu foco é
            criar soluções tecnológicas eficientes e inovadoras para ajudar
            empresas e pessoas a alcançarem seus objetivos.
          </p>
          <div className={styles.socialLinks}>
            <a
              className={styles.socialLinkButton}
              href="/Currículo - Luigi Uchiyama.pdf"
              download="Currículo - Luigi Uchiyama.pdf"
            >
              <Button>
                <div className={styles.downloadButton}>
                  <HiOutlineDownload className={styles.iconStyle} />
                  <span>Meu Currículo</span>
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
                  aria-label={`Visite meu perfil no ${alt}`} // Acessibilidade
                >
                  <Icon className={Social.socialSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Perfil className={styles.profileImage} />
        </div>
      </div>

      <Detalhes />

      <div className={styles.statsBackground}>
        <h1>Minhas Conquistas</h1>
        <div className={styles.statsContainer}>
          {[
            {
              label: 'graduação',
              value: '+1',
            },
            {
              label: 'experiências',
              value: '+4',
            },
            {
              label: 'projetos',
              value: '+10',
            },
            {
              label: 'certificados',
              value: '+10',
            },
            {
              label: 'cursos',
              value: '+12',
            },
          ].map(({ label, value }) => (
            <p key={label}>
              <span className={styles.statsNumber}>{value}</span>
              <span>{label}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
