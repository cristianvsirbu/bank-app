import React, { useEffect, useRef } from 'react';

interface CardAnimationProps {
  children: React.ReactNode;
  interval: number;
  animationClassName: string;
}

const CardAnimation = ({ children, interval, animationClassName }: CardAnimationProps) => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const index = elementsRef.current.indexOf(target);
          const delay = index * interval;

          setTimeout(() => {
            target.classList.add(animationClassName);
            observer.unobserve(target);
          }, delay);
        }
      });
    });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [interval, animationClassName]);

  return (
    <>
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child) && typeof child.type === 'string') {
          return React.cloneElement(child, {
            style: { opacity: 0, ...(child.props.style || {}) },
            ref: (el: HTMLElement | null) => {
              if (el) {
                elementsRef.current[i] = el;
              }
            },
          } as any); 
        }
        return child;
      })}
    </>
  );
};

export default CardAnimation;
