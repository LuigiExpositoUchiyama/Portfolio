import React from 'react';
import Slider from 'react-slick';

/* IMAGENS */
import ResponsiveWebDevelopment from '/certifications/Responsive Web Development.png';
import FormaçãoSocial from '/certifications/Formação Social e Sustentabilidade.png';
import CSSFlexbox from '/certifications/CSS Flexbox.png';
import CSSGridLayout from '/certifications/CSS Grid Layout.png';
import HTMLeCSSparaIniciantes from '/certifications/HTML e CSS para Iniciantes.png';
import JavaScriptCompletoES6 from '/certifications/JavaScript Completo.png';
import ReactCompleto from '/certifications/React Completo.png';
import UIDesignAvançado from '/certifications/UI Design Avançado.png';
import UIDesignparaIniciantes from '/certifications/UI Design para Iniciantes.png';
import WordPressComoCMS from '/certifications/WordPress Como CMS.png';

/* CSS */
import geral from '../../App.module.css';
import styles from './Certificates.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const certificatesDataFIAP = [
  {
    title: 'Responsive Web Development',
    link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/82454/497adcb897eb85d68b668b9acb0a1847/certificado.png',
    img: ResponsiveWebDevelopment,
  },
  {
    title: 'Formação Social e Sustentabilidade',
    link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/82422/df5093680615c5827e7bd4084e97f975/certificado.png',
    img: FormaçãoSocial,
  },
];

const certificatesDataOrigamid = [
  {
    title: 'CSS Flexbox',
    link: 'https://www.origamid.com/certificate/75a65166/',
    img: CSSFlexbox,
  },
  {
    title: 'CSS Grid Layout',
    link: 'https://www.origamid.com/certificate/2836fa02/',
    img: CSSGridLayout,
  },
  {
    title: 'HTML e CSS para Iniciantes',
    link: 'https://www.origamid.com/certificate/ed087fcc/',
    img: HTMLeCSSparaIniciantes,
  },
  {
    title: 'JavaScript Completo ES6+',
    link: 'https://www.origamid.com/certificate/6c1774b4/',
    img: JavaScriptCompletoES6,
  },
  {
    title: 'React Completo',
    link: 'https://www.origamid.com/certificate/41782cf1/',
    img: ReactCompleto,
  },
  {
    title: 'UI Design Avançado',
    link: 'https://www.origamid.com/certificate/67f4f769/',
    img: UIDesignAvançado,
  },
  {
    title: 'UI Design para Iniciantes',
    link: 'https://www.origamid.com/certificate/cc0a74bb/',
    img: UIDesignparaIniciantes,
  },
  {
    title: 'WordPress Como CMS',
    link: 'https://www.origamid.com/certificate/c8302b0c/',
    img: WordPressComoCMS,
  },
];

const Certificates = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    centerPadding: '30px',
    arrows: false,
  };

  return (
    <section>
      <div className={geral.titulo}>
        <h1>Certificados</h1>
      </div>

      <div>
        <div className={styles.certificados}>
          <div>
            <div className={styles.certificadoTitle}>
              <h1>Faculdade FIAP</h1>
            </div>
            <Slider {...settings}>
              {certificatesDataFIAP.map((certificate, index) => (
                <div key={index}>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={certificate.img} alt={certificate.title} />
                    <p>{certificate.title}</p>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <div className={styles.certificadoTitle}>
              <h1 className={styles.separacao}>Curso Origamid</h1>
            </div>
            <Slider {...settings}>
              {certificatesDataOrigamid.map((certificate, index) => (
                <div key={index}>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={certificate.img} alt={certificate.title} />
                    <p>{certificate.title}</p>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
