import { useEffect, useState } from 'react';

export const Phase = {
  typing: 'TYPING',
  idle: 'IDLE',
  deleting: 'DELETING',
};

const useTitle = (titles = []) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.typing);

  useEffect(() => {
    switch (phase) {
      // ? TYPING PHASE
      case Phase.typing: {
        const nextTitle = titles[selectedIndex].title.slice(
          0,
          typedTitle.length + 1
        );

        if (nextTitle === typedTitle) {
          setPhase(Phase.idle);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedTitle(nextTitle);
        }, 120);

        return () => clearInterval(timeout);
      }

      //? DELETEING PHASE
      case Phase.deleting: {
        if (!typedTitle) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(titles[nextIndex] ? nextIndex : 0);
          setPhase(Phase.typing);
        }

        const nextRemaining = titles[selectedIndex].title.slice(
          0,
          typedTitle.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedTitle(nextRemaining);
        }, 50);

        return () => clearInterval(timeout);
      }

      //? IDLE and DEFAULT case
      case Phase.idle:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.deleting);
        }, 1000);

        return () => clearInterval(timeout);
    }
  }, [titles, typedTitle, phase, selectedIndex]);

  return { typedTitle, selectedTitle: titles[selectedIndex], phase };
};

export default useTitle;
