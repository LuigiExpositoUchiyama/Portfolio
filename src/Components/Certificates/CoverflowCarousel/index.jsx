import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './CoverflowCarousel.module.css';

const GAP = 22;

function getColumns(width, itemCount) {
  const desired = width <= 700 ? 1 : width <= 1050 ? 2 : 3;
  return Math.min(desired, Math.max(itemCount, 1));
}

export default function CoverflowCarousel({
  items = [],
  startIndex = 0,
  autoplay = false,
  interval = 4500,
  ariaLabel = 'Carrossel',
  className = '',
}) {
  const [visibleItems, setVisibleItems] = useState(() =>
    getColumns(typeof window === 'undefined' ? 1200 : window.innerWidth, items.length),
  );
  const [index, setIndex] = useState(startIndex);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const maxIndex = Math.max(0, items.length - visibleItems);

  const goTo = useCallback(
    (nextIndex) => {
      setIndex(((nextIndex % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1));
    },
    [maxIndex],
  );

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const updateColumns = () => {
      const columns = getColumns(window.innerWidth, items.length);
      setVisibleItems(columns);
      setIndex((current) => Math.min(current, Math.max(0, items.length - columns)));
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [items.length]);

  useEffect(() => {
    if (!autoplay || paused || maxIndex === 0) return undefined;
    const timer = window.setInterval(() => setIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    ), interval);
    return () => window.clearInterval(timer);
  }, [autoplay, interval, maxIndex, paused]);

  if (!items.length) return null;

  const offsetPercentage = (index * 100) / visibleItems;
  const offsetGap = (index * GAP) / visibleItems;

  return (
    <section
      className={`${styles.carousel} ${className}`}
      aria-label={ariaLabel}
      aria-roledescription="carrossel"
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
      {maxIndex > 0 && (
        <div className={styles.toolbar}>
          <p className={styles.status} aria-live="polite">
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            <span>/</span>
            {String(maxIndex + 1).padStart(2, '0')}
          </p>

          <div className={styles.controls}>
            <button type="button" onClick={previous} aria-label="Certificado anterior">
              <FaArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={next} aria-label="Próximo certificado">
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            '--visible-items': visibleItems,
            '--item-width': `calc((100% - ${(visibleItems - 1) * GAP}px) / ${visibleItems})`,
            transform: `translateX(calc(-${offsetPercentage}% - ${offsetGap}px))`,
          }}
        >
          {items.map((item, itemIndex) => (
            <article className={styles.card} key={`${item.title}-${itemIndex}`}>
              <a
                className={styles.imageLink}
                href={item.link || undefined}
                target={item.link ? '_blank' : undefined}
                rel={item.link ? 'noopener noreferrer' : undefined}
                tabIndex={itemIndex >= index && itemIndex < index + visibleItems ? 0 : -1}
              >
                <img src={item.img} alt={`Certificado ${item.title}`} />
                <span className={styles.openIcon} aria-hidden="true">
                  <FaExternalLinkAlt />
                </span>
              </a>

              <div className={styles.cardContent}>
                <span>Certificado</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className={styles.pagination} aria-label="Selecionar posição">
          {Array.from({ length: maxIndex + 1 }, (_, dotIndex) => (
            <button
              type="button"
              key={dotIndex}
              className={dotIndex === index ? styles.activeDot : ''}
              aria-label={`Ir para a posição ${dotIndex + 1}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              onClick={() => goTo(dotIndex)}
            />
          ))}
        </div>
      )}
    </section>
  );
}