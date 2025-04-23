import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitch,
  FaGithub,
  FaTiktok,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'; // Importando ícones

/* CSS */
import styles from '../../Styles/RedesSociais.module.css';

const socialLinks = [
  {
    href: 'https://www.twitch.tv/luigi_uchiyama',
    Icon: FaTwitch,
    alt: 'Twitch',
    className: styles.containerSeven,
  },
  {
    href: 'https://github.com/LuigiExpositoUchiyama',
    Icon: FaGithub,
    alt: 'Github',
    className: styles.containerEight,
  },
  {
    href: 'https://www.tiktok.com/@luigiuchiyama',
    Icon: FaTiktok,
    alt: 'Tiktok',
    className: styles.containerSix,
  },
  {
    href: 'https://www.linkedin.com/in/luigi-uchiyama/',
    Icon: FaLinkedin,
    alt: 'Linkedin',
    className: styles.containerNine,
  },
  {
    href: 'https://mail.google.com/mail/u/0/#inbox',
    Icon: FaEnvelope,
    alt: 'Gmail',
    className: styles.containerTen,
  },
  {
    href: 'https://www.instagram.com/dev.luigiuchiyama/',
    Icon: FaInstagram,
    alt: 'Instagram',
    className: styles.containerFive,
  },
  {
    href: 'https://wa.me/5511957047874',
    Icon: FaWhatsapp,
    alt: 'WhatsApp',
    className: styles.containerEleven,
  },
];

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.card}>
        {socialLinks.map(({ href, Icon, alt, className }, index) => (
          <Link
            key={index}
            to={href}
            className={`${styles.socialContainer} ${className}`}
            target="_blank"
            aria-label={`Visite meu perfil no ${alt}`}
          >
            <Icon className={styles.socialSvg} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
