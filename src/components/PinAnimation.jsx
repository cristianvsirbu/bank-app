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
                    window.removeEventListener('scroll', handleScroll); // Remove the event listener after the animation starts

                    setTimeout(() => {
                        setTransformedWord('*afe');
                    }, 3000); // Adjust the timeout before the animation starts (in milliseconds)

                    setTimeout(() => {
                        setTransformedWord('**fe');
                    }, 3500); // Adjust the delay between each step (in milliseconds)

                    setTimeout(() => {
                        setTransformedWord('***e');
                    }, 4000); // Adjust the delay between each step (in milliseconds)

                    setTimeout(() => {
                        setTransformedWord('****');
                    }, 4500); // Adjust the delay between each step (in milliseconds)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <h2 ref={wordRef} className={`${styles.heading2} text-center leading-relaxed flex flex-col justify-center items-center whitespace-nowrap`}><BlurCardAnimation />{transformedWord}</h2>;
};

export default PinAnimation;
