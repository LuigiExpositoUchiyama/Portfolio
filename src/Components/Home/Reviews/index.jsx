import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import styles from './Reviews.module.css';

const reviews = [
  {
    name: 'Miguel',
    role: 'Empresário',
    date: '2025-08-10',
    rating: 5,
    feedback: 'Além de criar um site incrível, que apresenta nossos serviços, horários e localização de forma clara, o Luigi também desenvolveu um sistema completo para a gestão do lava-rápido, facilitando muito a nossa rotina.',
  },
  {
    name: 'Thiago Pessoa',
    role: 'Empresário',
    date: '2025-07-25',
    rating: 5,
    feedback: 'O site ficou elegante e transmitiu confiança aos clientes. Recebemos elogios de quem acessou e sentimos aumento no contato de vendas.',
  },
  {
    name: 'Michelle',
    role: 'Engenheira Civil',
    date: '2025-06-18',
    rating: 5,
    feedback: 'O Luigi conseguiu traduzir minhas ideias técnicas em uma interface clara e funcional. A comunicação foi ótima durante todo o processo.',
  },
];

const formatDate = (date) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

function Stars({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < rating ? styles.starFilled : styles.starEmpty}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Reviews({
  items = reviews,
  autoplay = true,
  interval = 5000,
  ariaLabel = 'Avaliações de clientes',
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const total = items.length;

  const goTo = useCallback(
    (nextIndex) => setIndex(((nextIndex % total) + total) % total),
    [total],
  );

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!autoplay || paused || total <= 1) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, interval);
    return () => window.clearInterval(timer);
  }, [autoplay, interval, paused, total]);

  if (!total) return null;

  const review = items[index];

  return (
    <section id="reviews" className={styles.reviewsContainer} aria-label={ariaLabel}>
      <div className={styles.headingRow}>
        <div>
          <h2 className="title">Avaliações</h2>
          <p className={styles.eyebrow}>O que dizem sobre meu trabalho</p>
        </div>

        <div className={styles.controls}>
          <button type="button" onClick={previous} aria-label="Avaliação anterior">
            <FaArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={next} aria-label="Próxima avaliação">
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carrossel"
        aria-live="polite"
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') previous();
          if (event.key === 'ArrowRight') next();
        }}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 45) distance > 0 ? next() : previous();
          touchStart.current = null;
        }}
      >
        <article className={styles.card} key={`${review.name}-${index}`}>
          <div className={styles.quoteArea}>
            <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />
            <Stars rating={review.rating} />
            <blockquote>{review.feedback}</blockquote>
          </div>

          <footer className={styles.authorArea}>
            <div className={styles.avatar} aria-hidden="true">
              {review.name.charAt(0)}
            </div>
            <div className={styles.authorDetails}>
              <h3>{review.name}</h3>
              <p>{review.role}</p>
            </div>
            <time dateTime={review.date}>{formatDate(review.date)}</time>
          </footer>
        </article>
      </div>

      <div className={styles.pagination} aria-label="Selecionar avaliação">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <div className={styles.progress}>
          {items.map((item, itemIndex) => (
            <button
              type="button"
              key={item.name}
              className={itemIndex === index ? styles.activeDot : ''}
              aria-label={`Exibir avaliação de ${item.name}`}
              aria-current={itemIndex === index ? 'true' : undefined}
              onClick={() => goTo(itemIndex)}
            />
          ))}
        </div>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    </section>
  );
}