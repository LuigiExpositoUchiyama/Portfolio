import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaWordpress,
  FaPython,
  FaJava,
  FaDatabase,
  FaServer,
  FaDocker,
  FaMicrosoft,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';

import Fiap from '/logos/Fiap.png';
import Origamid from '/logos/Curso.png';

import '../../App.module.css'; // mantém a classe global "title"
import styles from './Education.module.css';

const Educations = () => {
  const educationData = [
    {
      imgSrc: Fiap,
      altText: 'Fiap',
      title: 'FIAP',
      description:
        'Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP, uma jornada que foi fundamental para ampliar minha visão sobre os detalhes tecnológicos e práticas do setor. Durante esse processo, adquiri conhecimentos profundos sobre desenvolvimento de sistemas, arquitetura de software e novas tecnologias, o que contribuiu significativamente para o meu aprimoramento técnico e profissional. Essa formação me permitiu compreender melhor os desafios da área e me capacitou para atuar de forma estratégica e eficiente no desenvolvimento de soluções tecnológicas inovadoras.',
      languagesTitle: 'Stack de Desenvolvimento',
      languages: [
        { name: 'HTML', key: 'html', icon: <FaHtml5 /> },
        { name: 'CSS', key: 'css', icon: <FaCss3Alt /> },
        { name: 'JavaScript', key: 'js', icon: <FaJsSquare /> },
        { name: 'React', key: 'react', icon: <FaReact /> },
        { name: 'Python', key: 'python', icon: <FaPython /> },
        { name: 'React Native', key: 'react', icon: <FaReact /> },
        { name: 'Java', key: 'java', icon: <FaJava /> },
        { name: 'MongoDB', key: 'mongodb', icon: <FaDatabase /> },
        { name: 'MariaDB', key: 'mariadb', icon: <FaServer /> },
        { name: 'Docker', key: 'docker', icon: <FaDocker /> },
        { name: 'GitHub', key: 'github', icon: <FaGithub /> },
        { name: 'Azure DevOps', key: 'azure', icon: <FaMicrosoft /> },
        { name: 'Figma', key: 'figma', icon: <FaFigma /> },
      ],
    },
    {
      imgSrc: Origamid,
      altText: 'Origamid',
      title: 'Origamid',
      description:
        'Foi no curso da Origamid que tive meu primeiro contato com o universo Front-End, o que despertou uma verdadeira paixão pela programação. Ao longo dessa jornada, pude explorar diversas tecnologias e conceitos, o que solidificou meu interesse por essa área tão dinâmica. Além disso, completei com sucesso os diversos cursos oferecidos, conquistando certificados que comprovam minha dedicação e evolução constante no aprendizado de novas ferramentas e práticas do desenvolvimento Front-End.',
      languagesTitle: 'Stack de Desenvolvimento',
      languages: [
        { name: 'HTML', key: 'html', icon: <FaHtml5 /> },
        { name: 'CSS', key: 'css', icon: <FaCss3Alt /> },
        { name: 'JavaScript', key: 'js', icon: <FaJsSquare /> },
        { name: 'React', key: 'react', icon: <FaReact /> },
        { name: 'WordPress', key: 'wordpress', icon: <FaWordpress /> },
      ],
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDetails = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className={styles.educationContainer}>
      <header className={styles.sectionHeader}>
        <h1 className="title">Formações</h1>
      </header>

      <div className={styles.educationList}>
        {educationData.map((education, index) => {
          const isOpen = openIndexes.includes(index);
          const panelId = `desc-${index}`;
          const btnId = `accbtn-${index}`;

          return (
            <article
              key={education.title}
              className={`${styles.education} ${isOpen ? styles.expanded : ''}`}
            >
              {/* Cabeçalho clicável (acessível) */}
              <div
                className={styles.detalhes}
                role="button"
                tabIndex={0}
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleDetails(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDetails(index);
                  }
                }}
              >
                <img
                  className={styles.logo}
                  src={education.imgSrc}
                  alt={education.altText}
                />
                <div className={styles.titleWrap}>
                  <p className={styles.schoolName}>{education.title}</p>
                </div>
                {isOpen ? (
                  <FaChevronUp className={styles.icon} aria-hidden />
                ) : (
                  <FaChevronDown className={styles.icon} aria-hidden />
                )}
              </div>

              {/* Painel colapsável */}
              <div
                className={`${styles.descricao} ${isOpen ? styles.show : ''}`}
                id={panelId}
                role="region"
                aria-labelledby={btnId}
              >
                <div className={styles.descricaoInner}>
                  <p>{education.description}</p>

                  <h3 className={styles.languagesTitle}>
                    {education.languagesTitle}
                  </h3>

                  <div className={styles.languages}>
                    {education.languages.map((lang, idx) => (
                      <div
                        key={`${education.title}-${lang.name}-${idx}`}
                        className={styles.language}
                      >
                        <span
                          className={`${styles.languageIcon} ${
                            styles['icon-' + lang.key]
                          }`}
                          aria-hidden
                        >
                          {lang.icon}
                        </span>
                        <span>{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Educations;
