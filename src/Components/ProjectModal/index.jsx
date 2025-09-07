import React from 'react';
import '../../App.module.css';
import styles from './ProjectModal.module.css';

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  videoSource,
  imageSource,
  projectLink,
  repoLink,
  stack = [],
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>

        <div className={styles.media}>
          {videoSource ? (
            <video
              className={styles.mediaContent}
              src={videoSource}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          ) : (
            <img
              className={styles.mediaContent}
              src={imageSource}
              alt={title}
            />
          )}
        </div>

        <div className={styles.details}>
          <h1 className="title">{title}</h1>

          {description && <p className={styles.description}>{description}</p>}

          {!!stack.length && (
            <div className={styles.techList}>
              {stack.map((t) => (
                <span key={t} className={styles.techPill}>
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className={styles.actions}>
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                Ver demo
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonGhost}`}
              >
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
