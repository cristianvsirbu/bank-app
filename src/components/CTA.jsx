import styles from '../style';
import CardAnimation from './CardAnimation';

const CTA = () => {
  return (
    <CardAnimation interval={600} animationClassName="stats">
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} cta__bg-gradient shadow-30 rounded-30 flex-col rounded-[20px] sm:flex-row`}
      >
        <div className="flex flex-1 flex-col items-center sm:items-start">
          <h2 className={`${styles.heading2} text-center sm:text-start`}>Get Started</h2>
          <p
            className={`${styles.paragraph} mb-8 text-center sm:mb-0 sm:w-[80%] sm:text-start lg:w-[90%]`}
          >
            Experience banking made simple. With our user-friendly interface, competitive rates, and
            dedicated support, managing your finances has never been easier.
          </p>
        </div>

        <div className={`${styles.flexCenter} pb-8 sm:pb-0`}>
          <button className="button__style font-neue px-9 py-3 font-medium text-white">
            Sign Up
          </button>
        </div>
      </section>
    </CardAnimation>
  );
};

export default CTA;
