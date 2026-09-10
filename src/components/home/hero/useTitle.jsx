import { useEffect, useState } from 'react';

export const Phase = {
  typing: 'typing',
  idle: 'idle',
  deleting: 'deleting',
};

const usePrefersReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
};

const useTitle = (titles) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typedTitle, setTypedTitle] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.typing);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedTitle(titles[0]);
      setSelectedIndex(0);
      setPhase(Phase.idle);
      return undefined;
    }

    const selectedTitle = titles[selectedIndex];
    let timeout;

    if (phase === Phase.typing) {
      if (typedTitle === selectedTitle) {
        timeout = window.setTimeout(() => setPhase(Phase.idle), 950);
      } else {
        timeout = window.setTimeout(
          () => setTypedTitle(selectedTitle.slice(0, typedTitle.length + 1)),
          74
        );
      }
    } else if (phase === Phase.idle) {
      timeout = window.setTimeout(() => setPhase(Phase.deleting), 1150);
    } else if (typedTitle.length > 0) {
      timeout = window.setTimeout(
        () => setTypedTitle(selectedTitle.slice(0, typedTitle.length - 1)),
        34
      );
    } else {
      setSelectedIndex((index) => (index + 1) % titles.length);
      setPhase(Phase.typing);
    }

    return () => window.clearTimeout(timeout);
  }, [phase, prefersReducedMotion, selectedIndex, titles, typedTitle]);

  return {
    phase,
    typedTitle,
  };
};

export default useTitle;
