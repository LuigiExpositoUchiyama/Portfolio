import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Projects.module.css';
import '../../App.module.css';
import ProjectModal from '../../Components/ProjectModal';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const itemsRef = useRef({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = useMemo(
    () => [
      {
        title: 'Lavagem Aquarius',
        description:
          'Site moderno para lava-rápido, destacando serviços, horário e localização.',
        detailedDescription:
          'Este site foi desenvolvido para um lava-rápido com foco em transmitir modernidade, confiança e praticidade. Destaca os serviços, horário de funcionamento e localização, criando uma presença digital profissional que fortalece a imagem do negócio e facilita a conexão com clientes.',
        imageSource: '/img/lavagemAquarius.png',
        videoSource: '/video/Lavagem Aquarius.mp4',
        projectLink: 'https://lavagemaquarius.com',
        repoLink: '',
        category: 'cliente',
        year: 2025,
        stack: ['React', 'Vite', 'CSS Modules'],
      },
      {
        title: 'Burguer Mania',
        description:
          'Site moderno para hamburgueria, destacando cardápio, promoções e localização.',
        detailedDescription:
          'Este site foi desenvolvido como projeto pessoal de uma hamburgueria, utilizando React e integração com API, com foco em modernidade e praticidade. Destaca o cardápio, promoções e localização, criando uma experiência digital envolvente que aproxima clientes e valoriza a marca.',
        imageSource: '/img/burguermania.png',
        videoSource: '/video/Burguer Mania.mp4',
        projectLink: 'https://burguermania.vercel.app',
        repoLink: 'https://github.com/LuigiExpositoUchiyama/Burguer-Mania',
        category: 'estudo',
        year: 2024,
        stack: ['React', 'Vite', 'API', 'CSS Modules'],
      },
      {
        title: 'Haven Tranquility',
        description:
          'Site acadêmico para saúde mental, com perfis personalizados e base de dados de estudos.',
        detailedDescription:
          'Este projeto acadêmico foi desenvolvido com Next.js, Java e banco de dados, com foco em saúde mental. Permite criar perfis de usuários e acompanhar uma base de dados personalizada de estudos, oferecendo recursos digitais que apoiam o bem-estar e facilitam a gestão de informações de forma organizada e segura.',
        imageSource: '/img/havenTranquility.png',
        videoSource: '/video/Haven Tranquility.mp4',
        projectLink: 'https://haven-tranquility.vercel.app',
        repoLink: 'https://github.com/LuigiExpositoUchiyama/Haven-Tranquility',
        category: 'estudo',
        year: 2024,
        stack: ['Next.js', 'Java', 'DB'],
      },
      {
        title: 'Bikcraft 2.0',
        description:
          'Projeto para Bikcraft, destacando design visual e experiência intuitiva.',
        detailedDescription:
          'Desenvolvi meu segundo projeto para a Bikcraft no curso da Origamid, usando HTML, CSS e UI design. A ideia foi criar uma experiência bonita e fácil de usar, deixando o site mais agradável e intuitivo para quem visita.',
        imageSource: '/img/bikcraft2.png',
        videoSource: '/video/Bikcraft2.0.mp4',
        projectLink: 'https://luigiexpositouchiyama.github.io/Bikcraft-2.0/',
        repoLink: 'https://github.com/LuigiExpositoUchiyama/Bikcraft-2.0',
        category: 'estudo',
        year: 2023,
        stack: ['HTML', 'CSS', 'UI'],
      },
      {
        title: 'Animais Fantásticos',
        description:
          'Site sobre animais, criado para praticar JavaScript de forma interativa.',
        detailedDescription:
          'Criei este site para apresentar informações sobre diversos animais como parte do curso da Origamid. O projeto ajudou a aprimorar minhas habilidades com JavaScript, tornando a navegação mais dinâmica e divertida para quem visita.',
        imageSource: '/img/animaisFantasticos.png',
        videoSource: '/video/AnimaisFantasticos.mp4',
        projectLink:
          'https://luigiexpositouchiyama.github.io/Animais-Fantasticos/',
        repoLink:
          'https://github.com/LuigiExpositoUchiyama/Animais-Fantasticos',
        category: 'estudo',
        year: 2023,
        stack: ['JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Bikcraft 1.0',
        description:
          'Primeiro projeto com HTML e CSS, focado em UI e marca fictícia.',
        detailedDescription:
          'Meu primeiro projeto com HTML e CSS, focando em uma interface simples e uma marca fictícia. Foi o começo da minha jornada no desenvolvimento web, aprendendo o básico e experimentando o design de páginas.',
        imageSource: '/img/bikcraft.png',
        videoSource: '/video/Bikcraft1.0.mp4',
        projectLink: 'https://luigiexpositouchiyama.github.io/Bikcraft/',
        repoLink: 'https://github.com/LuigiExpositoUchiyama/Bikcraft',
        category: 'estudo',
        year: 2022,
        stack: ['HTML', 'CSS'],
      },
      {
        title: 'Wildbeast',
        description:
          'Projeto com CSS Grid, destacando layout moderno e responsivo.',
        detailedDescription:
          'Criei este projeto durante um curso da Origamid para praticar CSS Grid. O foco foi construir uma interface moderna e totalmente responsiva, deixando o site organizado e fácil de navegar em qualquer dispositivo.',
        imageSource: '/img/wildbeast.png',
        videoSource: '/video/WildBeast.mp4',
        projectLink: 'https://luigiexpositouchiyama.github.io/WildBeast/',
        repoLink: 'https://github.com/LuigiExpositoUchiyama/WildBeast',
        category: 'estudo',
        year: 2022,
        stack: ['CSS Grid', 'HTML', 'CSS'],
      },
      {
        title: 'Flexblog',
        description:
          'Projeto com Flexbox, criando um blog moderno e adaptável.',
        detailedDescription:
          'Desenvolvi este projeto durante um curso da Origamid para treinar Flexbox. A ideia foi construir um blog moderno e adaptável, com layout organizado que se ajusta bem a qualquer tela.',
        imageSource: '/img/flexblog.png',
        videoSource: '/video/Flexblog.mp4',
        projectLink: 'https://luigiexpositouchiyama.github.io/FlexBlog/',
        repoLink: 'https://github.com/LuigiExpositoUchiyama/FlexBlog',
        category: 'estudo',
        year: 2022,
        stack: ['Flexbox', 'HTML', 'CSS'],
      },
    ],
    [],
  );

  const [typeFilter, setTypeFilter] = useState('todos');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('recentes');

  const filtered = useMemo(() => {
    let data = [...projects];
    if (typeFilter !== 'todos')
      data = data.filter((p) => p.category === typeFilter);

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.detailedDescription.toLowerCase().includes(q),
      );
    }

    if (sort === 'recentes') data.sort((a, b) => (b.year || 0) - (a.year || 0));
    else data.sort((a, b) => a.title.localeCompare(b.title));

    return data;
  }, [projects, typeFilter, search, sort]);

  useEffect(() => {
    const cards = Object.values(itemsRef.current).filter(Boolean);

    cards.forEach((el, i) => {
      el.classList.remove(styles.active);
      el.dataset.index = i;
      el.style.transitionDelay = `${Math.min(i * 0.1, 0.6)}s`;
    });

    // força reflow
    document.body.offsetHeight;

    requestAnimationFrame(() => {
      cards.forEach((el) => el.classList.add(styles.active));
    });
  }, [filtered]);

  const renderStackPills = (stack = []) => (
    <div className={styles.pills}>
      {stack.map((s) => (
        <span key={s} className={styles.pill}>
          {s}
        </span>
      ))}
    </div>
  );

  const renderProjectCard = (project, index) => (
    <div
      key={project.title}
      className={styles.card}
      data-index={index}
      onClick={() => openModal(project)}
      ref={(el) => {
        itemsRef.current[project.title] = el;
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') openModal(project);
      }}
      aria-label={`Abrir detalhes do projeto ${project.title}`}
    >
      <div className={styles.media}>
        <span
          className={`${styles.badge} ${styles['cat-' + project.category]}`}
          aria-hidden="true"
        >
          {project.category === 'cliente' ? 'Cliente' : 'Estudo'}
        </span>

        <img
          src={project.imageSource}
          alt={project.title}
          className={styles.thumb}
          loading="lazy"
        />

        {project.videoSource && (
          <video
            className={styles.hoverVideo}
            src={project.videoSource}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

        <div className={styles.mediaOverlay}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
        </div>
      </div>

      <div className={styles.cardBody}>
        {/* stack primeiro */}
        {renderStackPills(project.stack)}
        {/* descrição depois */}
        <p className={styles.cardDesc}>{project.description}</p>
      </div>

      <div className={styles.cardActions} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.actionBtn}
          onClick={() => openModal(project)}
          aria-label={`Ver mais sobre ${project.title}`}
        >
          Veja mais
        </button>
      </div>
    </div>
  );

  const typeOptions = [
    { key: 'todos', label: 'Todos os projetos' },
    { key: 'cliente', label: 'Projetos de cliente' },
    { key: 'estudo', label: 'Projetos de estudo' },
  ];

  return (
    <section>
      <div className={styles.projectsContainer}>
        <div className={styles.controls}>
          <div
            className={styles.chipsRow}
            role="tablist"
            aria-label="Filtro de tipo"
          >
            {typeOptions.map(({ key, label }) => (
              <button
                key={key}
                className={`${styles.chip} ${
                  typeFilter === key ? styles.chipActive : ''
                }`}
                onClick={() => setTypeFilter(key)}
                aria-pressed={typeFilter === key}
              >
                {label}
              </button>
            ))}
          </div>

          <div className={styles.searchBar}>
            <input
              className={styles.search}
              type="text"
              placeholder="Buscar projeto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar projeto"
            />
            <div className={styles.select}>
              <select
                className={styles.sort}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Ordenar projetos"
              >
                <option value="recentes">Mais recentes</option>
                <option value="alfabetica">A–Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => renderProjectCard(p, i))}
          {filtered.length === 0 && (
            <p className={styles.emptyState}>
              Nenhum projeto encontrado com esses filtros.
            </p>
          )}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          description={selectedProject.detailedDescription}
          videoSource={selectedProject.videoSource}
          imageSource={selectedProject.imageSource}
          projectLink={selectedProject.projectLink}
          repoLink={selectedProject.repoLink}
          stack={selectedProject.stack}
          category={selectedProject.category}
        />
      )}
    </section>
  );
};

export default Projects;
