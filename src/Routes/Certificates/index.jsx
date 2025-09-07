import React from 'react';
import CoverflowCarousel from '../../Components/CoverflowCarousel';
import styles from './Certificates.module.css';

// IMAGENS
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

const FIAP = [
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

const ORIGAMID = [
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

export default function CertificatesSection() {
  return (
    <section className={styles.certificatesSection}>
      {/* FIAP */}
      <div className={styles.certificatesContainer}>
        <h2 className={`title ${styles.certificatesTitle}`}>Faculdade FIAP</h2>
      </div>
      <CoverflowCarousel
        items={FIAP}
        autoplay
        interval={3500}
        ariaLabel="Certificados FIAP"
        cardWidth={300}
        imageHeight={170}
        stageHeight={240}
        spacing={70}
        angle={14}
        scaleStep={0.1}
        minScale={0.7}
        visibleRange={2}
        navDistance={250}
        navSize={28}
        navFont={16}
        navOpacity={1}
        navHoverOpacity={1}
        navAutoHide={true}
        breakpoints={[
          {
            maxWidth: 1400,
            overrides: {
              cardWidth: 280,
              imageHeight: 165,
              stageHeight: 230,
              spacing: 68,
              navDistance: 220,
            },
          },
          {
            maxWidth: 1024,
            overrides: {
              visibleRange: 1,
              navDistance: 180,
              navAutoHide: false,
            },
          },
          {
            maxWidth: 768,
            overrides: {
              cardWidth: 220,
              imageHeight: 140,
              stageHeight: 240,
              navDistance: 120,
              visibleRange: 1,
              navAutoHide: false,
            },
          },
        ]}
      />

      {/* ORIGAMID */}
      <div className={styles.certificatesContainer}>
        <h2 className={`title ${styles.certificatesTitle}`}>Curso Origamid</h2>
      </div>
      <CoverflowCarousel
        items={ORIGAMID}
        autoplay
        interval={3500}
        ariaLabel="Certificados Origamid"
        cardWidth={300}
        imageHeight={170}
        stageHeight={240}
        spacing={70}
        angle={14}
        scaleStep={0.1}
        minScale={0.7}
        visibleRange={2}
        navDistance={450}
        navSize={28}
        navFont={16}
        navOpacity={1}
        navHoverOpacity={1}
        navAutoHide={true}
        breakpoints={[
          {
            maxWidth: 1400,
            overrides: {
              cardWidth: 280,
              imageHeight: 165,
              stageHeight: 230,
              spacing: 68,
              navDistance: 400,
            },
          },
          {
            maxWidth: 1024,
            overrides: {
              visibleRange: 1,
              navDistance: 180,
              navAutoHide: false,
            },
          },
          {
            maxWidth: 768,
            overrides: {
              cardWidth: 220,
              imageHeight: 140,
              stageHeight: 240,
              navDistance: 120,
              visibleRange: 1,
              navAutoHide: false,
            },
          },
        ]}
      />
    </section>
  );
}
