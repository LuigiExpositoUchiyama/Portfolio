import React from 'react';
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

import { HiOutlineDownload, HiArrowNarrowRight } from 'react-icons/hi';

/* COMPONENTES */
import Detalhes from '../../Components/Detalhes';
import Button from '../../Components/Button';
import TypingEffect from '../../Components/TypingEffect';

/* IMAGENS */
import { ReactComponent as Perfil } from '../../Assets/Perfil.svg';
import { ReactComponent as Design } from '../../Assets/design.svg';
import { ReactComponent as Manutencao } from '../../Assets/manutencao.svg';
import { ReactComponent as Web } from '../../Assets/web.svg';

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

const services = [
  {
    title: 'UI / UX Design',
    icon: <Design className={styles.serviceIcon} />,
    description:
      'Criação de interfaces intuitivas, com foco na experiência do usuário e navegação eficiente, resultando em sites mais agradáveis e funcionais.',
  },
  {
    title: 'Manutenção de Sites',
    icon: <Manutencao className={styles.serviceIcon} />,
    description:
      'Atualizações frequentes, correções de erros, inclusão de novos conteúdos e suporte técnico para manter seu site sempre no ar.',
  },
  {
    title: 'Web Design',
    icon: <Web className={styles.serviceIcon} />,
    description:
      'Design moderno, alinhado à identidade visual da sua marca, garantindo um site visualmente atrativo e adaptado para todos os dispositivos.',
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
                  aria-label={`Visite meu perfil no ${alt}`}
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

      <div className={styles.servicesBackground}>
        <div className={styles.servicesPrincipal}>
          <div className={styles.servicesTitleArea}>
            <div className={styles.servicesTitle}>
              <h1>Meus Serviços</h1>
            </div>
            <a href="/portfolio">
              <Button>
                <div className={styles.projetosButton}>
                  <span>Ver Projetos</span>
                  <HiArrowNarrowRight className={styles.projetosIcon} />
                </div>
              </Button>
            </a>
          </div>

          <div className={styles.servicesContainer}>
            {services.map(({ title, icon, description }, index) => (
              <div key={index} className={styles.serviceCard}>
                <span>{icon}</span>
                <h1>{title}</h1>
                <p className={styles.serviceDescription}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.statsBackground}>
        <h1>Minhas Conquistas</h1>
        <div className={styles.statsContainer}>
          {[
            { label: 'graduação', value: '+1' },
            { label: 'experiências', value: '+4' },
            { label: 'projetos', value: '+10' },
            { label: 'certificados', value: '+10' },
            { label: 'cursos', value: '+12' },
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
