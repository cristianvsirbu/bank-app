import { feedback } from '../constants';
import styles from '../style';
import CardAnimation from './CardAnimation';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
    >
      <div className="relative z-[1] mb-6 flex w-full justify-between sm:mb-16">
        <div className="mt-6 w-full text-center md:mt-0">
          <CardAnimation interval={300} animationClassName="stats">
            <h2 className={`${styles.heading2}`}>Testimonials</h2>
            <p className={`${styles.paragraph}`}>What our users are saying about us.</p>
          </CardAnimation>
        </div>
      </div>
      <div className="feedback-container relative z-1 flex flex-wrap justify-center md:justify-start">
        {feedback.map((card) => (
          <CardAnimation key={card.id} interval={300} animationClassName="stats">
            <TestimonialCard key={card.id} {...card} />
          </CardAnimation>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
