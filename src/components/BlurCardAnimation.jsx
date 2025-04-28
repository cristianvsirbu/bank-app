import { useEffect, useRef } from 'react';
import styles from '../style';

const BlurCardAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('safe');
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={elementRef} className={`${styles.heading2} card__blur absolute box-shadow-20`} />
  );
};

export default BlurCardAnimation;
