// Reviews.jsx
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './Reviews.module.css';

const DATA = [
  {
    name: 'Miguel',
    role: 'Empresário',
    date: '2025-08-10',
    rating: 5,
    feedback:
      'O site ficou incrível! Agora nossos clientes conseguem ver horários, serviços e localização de forma clara.',
  },
  {
    name: 'Thiago Pessoa',
    role: 'Empresário',
    date: '2025-07-25',
    rating: 5,
    feedback:
      'O site ficou elegante e transmitiu confiança aos clientes. Recebemos elogios de quem acessou e sentimos aumento no contato de vendas.',
  },
  {
    name: 'Michelle',
    role: 'Engenheira Civil',
    date: '2025-06-18',
    rating: 5,
    feedback:
      'O Luigi conseguiu traduzir minhas ideias técnicas em uma interface clara e funcional. A comunicação foi ótima durante todo o processo.',
  },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const Stars = ({ value }) => (
  <div className={styles.stars} aria-label={`${value} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={`${styles.star} ${i < value ? styles.starFilled : ''}`}
        aria-hidden="true"
      />
    ))}
  </div>
);

// distância circular p/ coverflow
function signedDistance(i, center, n) {
  let d = i - center;
  d = ((d + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);
  if (n % 2 === 0 && d === n / 2) d = -d;
  return d;
}

/** hook simples para contar quantos cards mostrar (5 desktop, 3 tablet) */
function useVisibleCount() {
  const [count, setCount] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 1024px)').matches
      ? 3
      : 5,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 1024px)');
    const onChange = () => setCount(mq.matches ? 3 : 5);

    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);

    onChange();

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return count;
}

/** gap/depth responsivos p/ tablet & mobile */
function useResponsive3D(baseGap = 260, baseDepth = 70) {
  const [vals, setVals] = useState({ gap: baseGap, depth: baseDepth });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mqTablet = window.matchMedia('(max-width: 1024px)');
    const mqMobile = window.matchMedia('(max-width: 768px)');

    const apply = () => {
      if (mqMobile.matches) setVals({ gap: 170, depth: 50 }); // mobile
      else if (mqTablet.matches) setVals({ gap: 210, depth: 60 }); // tablet
      else setVals({ gap: baseGap, depth: baseDepth }); // desktop
    };

    if (mqTablet.addEventListener) {
      mqTablet.addEventListener('change', apply);
      mqMobile.addEventListener('change', apply);
    } else {
      mqTablet.addListener(apply);
      mqMobile.addListener(apply);
    }

    apply();
    return () => {
      if (mqTablet.removeEventListener) {
        mqTablet.removeEventListener('change', apply);
        mqMobile.removeEventListener('change', apply);
      } else {
        mqTablet.removeListener(apply);
        mqMobile.removeListener(apply);
      }
    };
  }, [baseGap, baseDepth]);

  return vals; // { gap, depth }
}

export default function Reviews({
  items = DATA,
  autoplay = true,
  interval = 3500,
  ariaLabel = 'Avaliações de clientes',
  gap = 260, // distância lateral entre cards (px)
  depth = 70, // afastamento em Z
  fadeSide = 0.88, // opacidade dos lados
}) {
  const len = items.length;
  const [index, setIndex] = useState(0);
  const hovering = useRef(false);
  const visibleCount = useVisibleCount(); // 5 desktop, 3 tablet
  const { gap: gapUse, depth: depthUse } = useResponsive3D(gap, depth);

  const next = useCallback(
    () => setIndex((i) => (len ? (i + 1) % len : 0)),
    [len],
  );
  const prev = useCallback(
    () => setIndex((i) => (len ? (i - 1 + len) % len : 0)),
    [len],
  );

  // autoplay loop
  useEffect(() => {
    if (!autoplay || len <= 1) return;
    const id = setInterval(() => !hovering.current && next(), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, len, next]);

  // teclado
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  // swipe
  const startX = useRef(null);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (dx > 40) prev();
    else if (dx < -40) next();
  };

  // calcula quais índices serão renderizados (vizinhos) e as vars de estilo
  const slides = useMemo(() => {
    if (!len) return [];

    // quantos efetivamente mostrar (se tiver poucos itens, mostra todos)
    const show = Math.min(visibleCount, len);

    // índices a renderizar:
    let indices = [];
    if (len <= show) {
      indices = Array.from({ length: len }, (_, k) => k);
    } else {
      const half = Math.floor((show - 1) / 2);
      for (let off = -half; off <= half; off++) {
        indices.push((index + off + len) % len);
      }
    }

    return indices.map((i) => {
      const r = items[i];
      const d = signedDistance(i, index, len);
      const abs = Math.abs(d);
      const isActive = d === 0;

      const x = d * gapUse;
      const z =
        abs === 1
          ? -Math.round(depthUse * 0.9)
          : -Math.round(depthUse * (0.9 + (abs - 1) * 0.6));
      const scale = abs === 1 ? 0.9 : Math.max(0.8, 0.9 - (abs - 1) * 0.1);
      const blur = abs === 1 ? 0.4 : Math.min(1.2, 0.4 + (abs - 1) * 0.4);
      const opacity = Math.max(0.42, fadeSide - Math.max(0, abs - 1) * 0.2);
      const zIndex = 40 - abs;
      const blurFalloff = Math.max(14, 26 - abs * 6);
      const shadowAlpha = Math.max(0, 0.35 - abs * 0.06);

      const vars = {
        '--x': `${x}px`,
        '--z': `${z}px`,
        '--scale': isActive ? '1' : `${scale}`,
        '--opacity': isActive ? '1' : `${opacity}`,
        '--zIndex': isActive ? '100' : `${zIndex}`,
        '--blur': isActive ? '0px' : `${blur}px`,
        '--shadowBlur': `${blurFalloff}px`,
        '--shadowAlpha': `${shadowAlpha}`,
      };

      return { r, i, d, isActive, vars };
    });
  }, [items, len, index, gapUse, depthUse, fadeSide, visibleCount]);

  return (
    <section
      id="reviews"
      className={styles.reviewsContainer}
      aria-label={ariaLabel}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <h2 className="title">Avaliações</h2>

      <div
        className={styles.carouselViewport}
        role="region"
        aria-roledescription="carrossel"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          className={`${styles.navButton} ${styles.navPrev}`}
          onClick={prev}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className={styles.carouselStage}>
          <div className={styles.carouselLane}>
            {slides.map(({ r, i, d, isActive, vars }) => (
              <div
                key={`${r.name}-${i}`}
                className={styles.carouselCardWrap}
                style={vars}
                data-active={isActive ? 'true' : 'false'}
                onClick={() => d !== 0 && setIndex(i)}
                aria-hidden={isActive ? 'false' : 'true'}
              >
                <article className={styles.card}>
                  <header className={styles.header}>
                    <h3 className={styles.name}>{r.name}</h3>
                    {r.role && <span className={styles.role}>{r.role}</span>}
                  </header>
                  <Stars value={r.rating} />
                  <p className={styles.feedbackWithQuotes}>{r.feedback}</p>
                  <time
                    className={`${styles.date} ${styles.dateLast}`}
                    dateTime={r.date}
                  >
                    {formatDate(r.date)}
                  </time>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navNext}`}
          onClick={next}
          aria-label="Próximo"
        >
          ›
        </button>
      </div>

      <div
        className={styles.dots}
        role="tablist"
        aria-label="Selecionar avaliação"
      >
        {items.map((_, i) => {
          const current = i === index;
          return (
            <button
              key={`dot-${i}`}
              role="tab"
              aria-selected={current}
              className={`${styles.dot} ${current ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>
    </section>
  );
}
