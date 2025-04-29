import styles from '../style';
import CardAnimation from './CardAnimation';

const CTA = () => {
  return (
    <CardAnimation interval={600} animationClassName="stats">
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col cta__bg-gradient rounded-[20px] box-shadow-30`}
      >
        <div className="flex  flex-1 flex-col items-center sm:items-start">
          <h2 className={`${styles.heading2} text-center sm:text-start`}>Get Started</h2>
          <p
            className={`${styles.paragraph} sm:w-[80%] lg:w-[90%] mb-8 sm:mb-0 text-center sm:text-start`}
          >
            Experience banking made simple. With our user-friendly interface, competitive rates, and
            dedicated support, managing your finances has never been easier.
          </p>
        </div>

        <div className={`${styles.flexCenter} pb-8 sm:pb-0`}>
          <button className="button__style px-9 py-3 font-neue font-medium text-white">
            Sign Up
          </button>
        </div>
      </section>
    </CardAnimation>
  );
};

export default CTA;
