import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.ctaBox}>
      <p className={styles.ctaTitle}>Vamos começar o seu projeto?</p>
      <p className={styles.ctaSub}>
        Fale comigo e receba um plano e orçamento.
      </p>
      <Link to="/contact">
        <Button>
          <span>Falar comigo</span>
        </Button>
      </Link>
    </section>
  );
};

export default CTA;
