import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';
import styles from './CoverflowCarousel.module.css';

export default function CoverflowCarousel({
  items = [],
  startIndex = 0,
  autoplay = false,
  interval = 3500,
  ariaLabel = 'Carrossel',

  cardWidth = 300,
  imageHeight = 170,
  stageHeight = 240,
  spacing = 70,
  angle = 14,
  scaleStep = 0.1,
  minScale = 0.7,
  visibleRange = 2,

  navDistance = 12,
  navSize = 32,
  navFont = 18,
  navOpacity = 0.75,
  navHoverOpacity = 1,
  navAutoHide = false,

  breakpoints = [],
  className = '',
}) {
  const len = items.length;
  const clamp = useCallback((i) => (len ? ((i % len) + len) % len : 0), [len]);
  const [index, setIndex] = useState(() => clamp(startIndex));

  const baseCfg = useMemo(
    () => ({
      cardWidth,
      imageHeight,
      stageHeight,
      spacing,
      angle,
      scaleStep,
      minScale,
      visibleRange,
      navDistance,
      navSize,
      navFont,
      navOpacity,
      navHoverOpacity,
      navAutoHide,
    }),
    [
      cardWidth,
      imageHeight,
      stageHeight,
      spacing,
      angle,
      scaleStep,
      minScale,
      visibleRange,
      navDistance,
      navSize,
      navFont,
      navOpacity,
      navHoverOpacity,
      navAutoHide,
    ],
  );

  const sortedBreakpoints = useMemo(
    () => [...(breakpoints || [])].sort((a, b) => a.maxWidth - b.maxWidth),
    [breakpoints],
  );

  const resolveCfg = useCallback(
    (w) => {
      const match = sortedBreakpoints.find((b) => w <= b.maxWidth);
      return match ? { ...baseCfg, ...match.overrides } : baseCfg;
    },
    [sortedBreakpoints, baseCfg],
  );

  const [cfg, setCfg] = useState(() =>
    typeof window !== 'undefined' ? resolveCfg(window.innerWidth) : baseCfg,
  );

  useEffect(() => {
    const update = () => setCfg(resolveCfg(window.innerWidth));
    let t = null;
    const onResize = () => {
      if (t) clearTimeout(t);
      t = setTimeout(update, 100);
    };
    update();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (t) clearTimeout(t);
    };
  }, [resolveCfg]);

  const timer = useRef(null);
  const hovering = useRef(false);

  useEffect(() => {
    if (!autoplay || len <= 1) return;
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      if (!hovering.current) setIndex((i) => clamp(i + 1));
    }, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [autoplay, interval, len, clamp]);

  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);

  const rootVars = {
    '--cf-stage-height': `${cfg.stageHeight}px`,
    '--cf-img-height': `${cfg.imageHeight}px`,
    '--cf-card-width': `${cfg.cardWidth}px`,
    '--cf-nav-distance': `${cfg.navDistance}px`,
    '--cf-nav-size': `${cfg.navSize}px`,
    '--cf-nav-font': `${cfg.navFont}px`,
    '--cf-nav-opacity': cfg.navOpacity,
    '--cf-nav-opacity-hover': cfg.navHoverOpacity,
  };

  if (len === 0) {
    return (
      <div
        className={[styles.coverflow, className].join(' ')}
        role="region"
        aria-label={ariaLabel}
        style={rootVars}
      />
    );
  }

  return (
    <div
      className={[
        styles.coverflow,
        cfg.navAutoHide ? styles.navAutoHide : '',
        className,
      ].join(' ')}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      style={rootVars}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }}
    >
      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={prev}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={next}
        aria-label="Próximo"
      >
        ›
      </button>

      <div className={styles.stage}>
        {items.map((item, i) => {
          const raw = i - index;
          const half = Math.floor(len / 2);
          const pos = raw > half ? raw - len : raw < -half ? raw + len : raw;

          const translateX = pos * cfg.spacing;
          const rotateY = -pos * cfg.angle;
          const scale = Math.max(
            cfg.minScale,
            1 - Math.abs(pos) * cfg.scaleStep,
          );
          const far = Math.abs(pos) > cfg.visibleRange;

          return (
            <a
              key={`${item.title || 'slide'}-${i}`}
              href={item.link || '#'}
              target={item.link ? '_blank' : undefined}
              rel={item.link ? 'noopener noreferrer' : undefined}
              className={styles.card}
              style={{
                width: cfg.cardWidth,
                zIndex: 100 - Math.abs(pos),
                transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: far ? 0 : 1,
                pointerEvents: far ? 'none' : 'auto',
              }}
              aria-label={item.title || `Slide ${i + 1}`}
              onClick={(e) => {
                if (pos !== 0) {
                  e.preventDefault();
                  setIndex(i);
                }
              }}
            >
              <img src={item.img} alt={item.title || 'Imagem do certificado'} />
              {item.title && <p className={styles.caption}>{item.title}</p>}
            </a>
          );
        })}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Selecionar slide">
        {items.map((_, i) => (
          <button
            key={`dot-${i}`}
            role="tab"
            aria-selected={i === index}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
