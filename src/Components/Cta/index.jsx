import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import styles from './Cta.module.css';

const CTA = () => {
  return (
    <section className={styles.ctaBox}>
      <p className={styles.ctaTitle}>
        Vamos transformar sua ideia em realidade?
      </p>
      <p className={styles.ctaSub}>
        Entre em contato e comece seu projeto agora!
      </p>
      <Link to="/contact">
        <Button>
          <span>Entrar em contato</span>
        </Button>
      </Link>
    </section>
  );
};

export default CTA;
