import React, { useState, useRef, useEffect } from 'react';
import styles from './Portfolio.module.css';
import geral from '../../App.module.css';
import PortfolioModal from '../../Components/PortfolioModal';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const itemsRef = useRef([]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const projects = [
    {
      title: 'Burguer Mania',
      description: 'Site dinâmico com cardápio de hambúrgueres.',
      detailedDescription:
        'Criei o site da Burguer Mania como um projeto pessoal, inspirado em um restaurante fictício. Utilizei React e uma API para fornecer dados dinâmicos sobre os hambúrgueres, oferecendo uma navegação prática e detalhada com descrições, ingredientes e imagens.',
      imageSource: '/img/burguermania.png',
      videoSource: '/video/Burguer Mania.mp4',
      projectLink: 'https://burguermania.vercel.app',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Burguer-Mania',
      category: 'estudo',
    },
    {
      title: 'Lavagem Aquarius',
      description: 'Plataforma virtual para lava-rápido.',
      detailedDescription:
        'Apresento o site do Lava-Rápido Aquarius, uma plataforma virtual que oferece uma visão abrangente dos serviços de lavagem disponíveis, assim como sua localização conveniente para os clientes. Este site foi projetado para transmitir qualidade e praticidade, apresentando informações essenciais de forma clara e acessível aos visitantes.',
      imageSource: '/img/lavagemAquarius.png',
      videoSource: '/video/Lavagem Aquarius.mp4',
      projectLink: 'https://lavagemaquarius.com',
      category: 'cliente',
    },
    {
      title: 'Bikcraft 2.0',
      description: 'Projeto avançado com foco em UI.',
      detailedDescription:
        'Desenvolvi meu segundo projeto para a Bikcraft como parte do curso na Origamid, onde apliquei os conhecimentos aprimorados em HTML, CSS e UI design. Busquei oferecer uma experiência visualmente atraente e altamente intuitiva para os visitantes.',
      imageSource: '/img/bikcraft2.png',
      videoSource: '/video/Bikcraft2.0.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/Bikcraft-2.0/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Bikcraft-2.0',
      category: 'estudo',
    },
    {
      title: 'Haven Tranquility',
      description: 'Sistema de apoio à saúde mental.',
      detailedDescription:
        'Desenvolvido com Next.js, Java e banco de dados, esse sistema foi feito para ajudar pessoas com saúde mental, oferecendo dicas personalizadas com base no perfil do usuário.',
      imageSource: '/img/havenTranquility.png',
      videoSource: '/video/Haven Tranquility.mp4',
      projectLink: 'https://haven-tranquility.vercel.app',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Haven-Tranquility',
      category: 'estudo',
    },
    {
      title: 'Animais Fantásticos',
      description: 'Projeto interativo com JavaScript.',
      detailedDescription:
        'Site que apresenta informações detalhadas sobre diversos animais. Foi criado como parte do curso da Origamid para aprimorar minhas habilidades com JavaScript.',
      imageSource: '/img/animaisFantasticos.png',
      videoSource: '/video/AnimaisFantasticos.mp4',
      projectLink:
        'https://luigiexpositouchiyama.github.io/Animais-Fantasticos/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Animais-Fantasticos',
      category: 'estudo',
    },
    {
      title: 'Bikcraft 1.0',
      description: 'Primeiro projeto com HTML e CSS.',
      detailedDescription:
        'Esse foi meu primeiro projeto com HTML e CSS, focando em UI básica e marca fictícia. Marca o início da minha jornada no desenvolvimento web.',
      imageSource: '/img/bikcraft.png',
      videoSource: '/video/Bikcraft1.0.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/Bikcraft/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/Bikcraft',
      category: 'estudo',
    },
    {
      title: 'Wildbeast',
      description: 'Exploração avançada de CSS Grid.',
      detailedDescription:
        'Projeto focado em CSS Grid Layout desenvolvido em um curso da Origamid. Interface moderna e responsiva.',
      imageSource: '/img/wildbeast.png',
      videoSource: '/video/Wildbeast.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/WildBeast/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/WildBeast',
      category: 'estudo',
    },
    {
      title: 'Flexblog',
      description: 'Blog com layout em Flexbox.',
      detailedDescription:
        'Projeto voltado ao domínio do Flexbox, com estrutura de blog moderna e adaptável, feito como parte de um curso da Origamid.',
      imageSource: '/img/flexblog.png',
      videoSource: '/video/Flexblog.mp4',
      projectLink: 'https://luigiexpositouchiyama.github.io/FlexBlog/',
      repoLink: 'https://github.com/LuigiExpositoUchiyama/FlexBlog',
      category: 'estudo',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (entry.isIntersecting) {
            element.classList.add(styles.active);
          } else {
            element.classList.remove(styles.active);
          }
        });
      },
      { threshold: 0.3 },
    );

    const currentItems = itemsRef.current;

    currentItems.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentItems.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const renderProjects = (category) =>
    projects
      .filter((project) => project.category === category)
      .map((project, index) => (
        <div
          key={index}
          className={`${styles.portfolioItem}`}
          onClick={() => openModal(project)}
          ref={(el) => (itemsRef.current[index] = el)}
        >
          <div className={styles.imageContainer}>
            <img
              src={project.imageSource}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>
            </div>
          </div>
          <div className={`${styles.bottomBar}`}>
            <span>{project.description}</span>
            <button className={styles.viewMoreButton}>Ver mais</button>
          </div>
        </div>
      ));

  return (
    <section>
      <div className={geral.titulo}>
        <h1>Portfólio</h1>
      </div>

      <div className={styles.sectionTitle}>
        <h2>Projetos de Cliente</h2>
      </div>
      <div className={styles.portfolioContainer}>
        {renderProjects('cliente')}
      </div>

      <div className={styles.sectionTitle}>
        <h2>Projetos de Estudo</h2>
      </div>
      <div className={styles.portfolioContainer}>
        {renderProjects('estudo')}
      </div>

      {isModalOpen && selectedProject && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          description={selectedProject.detailedDescription}
          videoSource={selectedProject.videoSource}
          projectLink={selectedProject.projectLink}
          repoLink={selectedProject.repoLink}
        />
      )}
    </section>
  );
};

export default Portfolio;
