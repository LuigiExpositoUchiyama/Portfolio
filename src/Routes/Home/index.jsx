import React from 'react';
import { Link } from 'react-router-dom';

/* ACESSIBILIDADE */
import Detalhes from '../../Components/Detalhes';
import Button from '../../Components/Button';
import TypingEffect from '../../Components/TypingEffect';

/* ÍCONES DO REACT */
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

/* IMAGENS */
import { ReactComponent as Perfil } from '../../Assets/Perfil.svg'; // Foto de perfil

/* CSS */
import '../../App.module.css';
import styles from './Home.module.css';
import Social from '../../Styles/RedesSociais.module.css';

const Home = () => {
  return (
    <section>
      <div className={styles.intro}>
        <div className={styles.eu}>
          <TypingEffect />
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas. Meu foco é
            criar soluções tecnológicas eficientes e inovadoras para ajudar
            empresas e pessoas a alcançarem seus objetivos.
          </p>
          <div className={styles.social}>
            <a
              className={styles.socialButton}
              href="/Currículo - Luigi Uchiyama.pdf"
              download="Currículo - Luigi Uchiyama.pdf"
            >
              <Button>
                <span className={styles.download}>Meu Currículo</span>
              </Button>
            </a>

            <div className={Social.card}>
              <a
                href="https://www.instagram.com/dev.luigiuchiyama/"
                className={`${Social.socialContainer} ${Social.containerOne}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={Social.socialSvg} />
              </a>

              <a
                href="https://wa.me/11957047874"
                className={`${Social.socialContainer} ${Social.containerTwo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={Social.socialSvg} />
              </a>

              <a
                href="https://github.com/LuigiExpositoUchiyama"
                className={`${Social.socialContainer} ${Social.containerThree}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={Social.socialSvg} />
              </a>

              <a
                href="https://www.linkedin.com/in/luigi-uchiyama/"
                className={`${Social.socialContainer} ${Social.containerFour}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={Social.socialSvg} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <Perfil className={styles.foto} />
        </div>
      </div>

      <Detalhes />

      <div className={styles.bgDados}>
        <h1>Minhas Conquistas</h1>
        <div className={styles.dados}>
          {[
            { label: 'graduação', value: '+1' },
            { label: 'experiências', value: '+4' },
            { label: 'projetos', value: '+8' },
            { label: 'certificados', value: '+10' },
            { label: 'cursos', value: '+12' },
          ].map(({ label, value }) => (
            <p key={label}>
              <span className={styles.tamanho}>{value}</span>
              <span>{label}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
