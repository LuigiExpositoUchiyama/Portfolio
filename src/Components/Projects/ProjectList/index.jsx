import React from 'react';
import styles from './ProjectList.module.css';

export default function ProjectList({
  projects,
  onProjectSelect,
  emptyMessage = 'Nenhum projeto encontrado.',
  animate = false,
}) {
  if (!projects.length) {
    return <p className={styles.emptyState}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <article
          key={project.title}
          className={`${styles.card} ${animate ? styles.animatedCard : ''}`}
          style={animate ? { animationDelay: `${Math.min(index * 0.1, 0.6)}s` } : undefined}
          onClick={() => onProjectSelect(project)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onProjectSelect(project);
            }
          }}
          aria-label={`Abrir detalhes do projeto ${project.title}`}
        >
          <div className={styles.media}>
            <span className={`${styles.badge} ${styles[`category-${project.category}`]}`}>
              {project.category === 'cliente' ? 'Cliente' : 'Estudo'}
            </span>

            <img
              src={project.imageSource}
              alt={project.title}
              className={styles.thumbnail}
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
              <h3>{project.title}</h3>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.pills}>
              {project.stack?.slice(0, 4).map((technology) => (
                <span key={technology} className={styles.pill}>{technology}</span>
              ))}
            </div>
            <p>{project.description}</p>
          </div>

          <div className={styles.cardActions}>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onProjectSelect(project);
              }}
              aria-label={`Ver mais sobre ${project.title}`}
            >
              Veja mais
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}