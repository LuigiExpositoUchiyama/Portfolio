import React, { useEffect, useMemo, useState } from 'react';
import ProjectList from '../../Components/Projects/ProjectList';
import ProjectModal from '../../Components/Projects/ProjectModal';
import projects from '../../Data/projects';
import styles from './Projects.module.css';
import '../../App.module.css';

const typeOptions = [
  { key: 'todos', label: 'Todos os projetos' },
  { key: 'cliente', label: 'Projetos de cliente' },
  { key: 'estudo', label: 'Projetos de estudo' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [typeFilter, setTypeFilter] = useState('todos');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('recentes');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (typeFilter !== 'todos') {
      result = result.filter((project) => project.category === typeFilter);
    }

    if (search.trim()) {
      const query = search.trim().toLocaleLowerCase('pt-BR');
      result = result.filter((project) =>
        [project.title, project.description, project.detailedDescription]
          .some((text) => text.toLocaleLowerCase('pt-BR').includes(query)),
      );
    }

    return result.sort((a, b) =>
      sort === 'recentes'
        ? (b.year || 0) - (a.year || 0)
        : a.title.localeCompare(b.title, 'pt-BR'),
    );
  }, [typeFilter, search, sort]);

  return (
    <section>
      <div className={styles.projectsContainer}>
        <div className={styles.controls}>
          <div className={styles.chipsRow} role="group" aria-label="Filtro de tipo">
            {typeOptions.map(({ key, label }) => (
              <button
                type="button"
                key={key}
                className={`${styles.chip} ${typeFilter === key ? styles.chipActive : ''}`}
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
              type="search"
              placeholder="Buscar projeto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Buscar projeto"
            />
            <div className={styles.select}>
              <select
                className={styles.sort}
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Ordenar projetos"
              >
                <option value="recentes">Mais recentes</option>
                <option value="alfabetica">A–Z</option>
              </select>
            </div>
          </div>
        </div>

        <ProjectList
          projects={filteredProjects}
          onProjectSelect={setSelectedProject}
          emptyMessage="Nenhum projeto encontrado com esses filtros."
          animate
        />
      </div>

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

export default Projects;