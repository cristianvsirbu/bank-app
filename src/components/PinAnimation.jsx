import { useEffect, useState, useRef } from 'react';
import styles from '../style';
import BlurCardAnimation from './BlurCardAnimation';

const PinAnimation = () => {
  const [transformedWord, setTransformedWord] = useState('Safe');
  const wordRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = wordRef.current;

      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          // Remove the event listener after the animation starts
          window.removeEventListener('scroll', handleScroll);

          setTimeout(() => {
            setTransformedWord('*afe');
          }, 3000);

          setTimeout(() => {
            setTransformedWord('**fe');
          }, 3500);

          setTimeout(() => {
            setTransformedWord('***e');
          }, 4000);

          setTimeout(() => {
            setTransformedWord('****');
          }, 4500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <h2
      ref={wordRef}
      className={`${styles.heading2} flex flex-col items-center justify-center text-center leading-relaxed whitespace-nowrap`}
    >
      <BlurCardAnimation />
      {transformedWord}
    </h2>
  );
};

export default PinAnimation;
