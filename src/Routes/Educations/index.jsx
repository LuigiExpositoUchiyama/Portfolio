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

import Fiap from '../../Assets/Fiap.png';
import Origamid from '../../Assets/Curso.png';

import geral from '../../App.module.css';
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
        { name: 'HTML', icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
        { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
        {
          name: 'JavaScript',
          icon: <FaJsSquare style={{ color: '#f7df1e' }} />,
        },
        { name: 'React', icon: <FaReact style={{ color: '#61dafb' }} /> },
        { name: 'Python', icon: <FaPython style={{ color: '#306998' }} /> },
        {
          name: 'React Native',
          icon: <FaReact style={{ color: '#61dafb' }} />,
        },
        { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
        { name: 'MongoDB', icon: <FaDatabase style={{ color: '#4DB33D' }} /> },
        { name: 'MariaDB', icon: <FaServer style={{ color: '#003B57' }} /> },
        { name: 'Docker', icon: <FaDocker style={{ color: '#2496ED' }} /> },
        { name: 'GitHub', icon: <FaGithub style={{ color: '#181717' }} /> },
        {
          name: 'Azure DevOps',
          icon: <FaMicrosoft style={{ color: '#0078D4' }} />,
        },
        { name: 'Figma', icon: <FaFigma style={{ color: '#F24E1E' }} /> },
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
        { name: 'HTML', icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
        { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
        {
          name: 'JavaScript',
          icon: <FaJsSquare style={{ color: '#f7df1e' }} />,
        },
        { name: 'React', icon: <FaReact style={{ color: '#61dafb' }} /> },
        {
          name: 'WordPress',
          icon: <FaWordpress style={{ color: '#21759b' }} />,
        },
      ],
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDetails = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((item) => item !== index)
        : [...prevIndexes, index],
    );
  };

  return (
    <section>
      <div className={geral.titulo}>
        <h1>Formações</h1>
      </div>

      <div>
        {educationData.map((education, index) => (
          <div
            key={index}
            className={`${styles.education} ${
              openIndexes.includes(index) ? styles.expanded : ''
            }`}
          >
            <div
              className={styles.detalhes}
              onClick={() => toggleDetails(index)}
              role="button"
            >
              <img src={education.imgSrc} alt={education.altText} />
              <div>
                <p>{education.title}</p>
              </div>
              {openIndexes.includes(index) ? (
                <FaChevronUp className={styles.icon} />
              ) : (
                <FaChevronDown className={styles.icon} />
              )}
            </div>
            <div
              className={`${styles.descricao} ${
                openIndexes.includes(index) ? styles.show : ''
              }`}
              id={`desc-${index}`}
            >
              <p>{education.description}</p>

              <div>
                <h3 className={styles.languagesTitle}>
                  {education.languagesTitle}
                </h3>
                <div className={styles.languages}>
                  {education.languages.map((lang, idx) => (
                    <div key={idx} className={styles.language}>
                      <span className={styles.languageIcon}>{lang.icon}</span>
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
