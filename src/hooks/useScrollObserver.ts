import { useEffect, useRef, useState } from 'react';

interface Props {
  defaultValue: string;
}

export const useScrollView = ({ defaultValue }: Props) => {
  const [view, setView] = useState<string>(defaultValue);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (defaultValue === view) return;
    setView(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setView(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return {
    currentView: view,
    onChangeView: setView,
    sectionRefs,
  };
};
