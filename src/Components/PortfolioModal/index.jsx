import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Ícone do GitHub
import projeto from '/icons/Link.png'; // Importe a imagem

/* CSS */
import button from '../Button/Button.module.css';
import styles from './PortfolioModal.module.css';

const PortfolioModal = ({
  isOpen,
  onClose,
  title,
  description,
  videoSource,
  projectLink,
  repoLink,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.videoContainer}>
          <video
            src={videoSource}
            className={styles.video}
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>
        <div className={styles.textContainer}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.buttonsContainer}>
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={button.button}
            >
              <img
                src={projeto} // Usando a imagem importada
                alt="Ícone personalizado"
              />
              Visitar Projeto
            </a>
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={button.button}
              >
                <FaGithub />
                Ver Repositório
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
