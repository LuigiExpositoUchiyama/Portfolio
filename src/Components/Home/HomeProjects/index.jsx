import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../Button';
import ProjectList from '../../Projects/ProjectList';
import ProjectModal from '../../Projects/ProjectModal';
import projects from '../../../Data/projects';
import styles from './HomeProjects.module.css';
import '../../../App.module.css';

const HomeProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.slice(0, 3);

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

      <ProjectList
        projects={featuredProjects}
        onProjectSelect={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal
          isOpen
          onClose={() => setSelectedProject(null)}
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