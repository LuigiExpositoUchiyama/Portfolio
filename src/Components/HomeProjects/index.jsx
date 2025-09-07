import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../Components/Button';
import ProjectModal from '../../Components/ProjectModal';
import styles from './HomeProjects.module.css';
import '../../App.module.css';

const HomeProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
    ],
    [],
  );

  return (
    <section className={styles.projectsHomeContainer}>
      <div className={styles.headerRow}>
        <h2 className="title">Projetos</h2>
        <Link to="/projects">
          <Button>
            <div className={styles.projectButton}>
              <span>+ Projetos</span>
              <FaArrowRight className={styles.arrowIcon} />
            </div>
          </Button>
        </Link>
      </div>

      <div className={styles.projectsIntro}>
        <p>Já pensou em ter um projeto para você ou sua empresa?</p>
        <p>
          Inspire-se com alguns projetos que desenvolvi para clientes e também
          em estudos.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div
            key={p.title}
            className={styles.card}
            onClick={() => openModal(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') openModal(p);
            }}
            aria-label={`Abrir detalhes do projeto ${p.title}`}
          >
            <div className={styles.media}>
              <span
                className={`${styles.badge} ${styles['cat-' + p.category]}`}
                aria-hidden="true"
              >
                {p.category === 'cliente' ? 'Cliente' : 'Estudo'}
              </span>

              <img
                src={p.imageSource}
                alt={p.title}
                className={styles.thumb}
                loading="lazy"
              />
              <div className={styles.mediaOverlay}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
            </div>

            <div className={styles.cardBody}>
              {/* stack antes da descrição */}
              <div className={styles.pills}>
                {p.stack?.slice(0, 3).map((s) => (
                  <span key={s} className={styles.pill}>
                    {s}
                  </span>
                ))}
              </div>
              <p className={styles.cardDesc}>{p.description}</p>
            </div>

            <div className={styles.cardActions}>
              <button type="button" className={styles.actionBtn}>
                Veja mais
              </button>
            </div>
          </div>
        ))}
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

export default HomeProjects;
