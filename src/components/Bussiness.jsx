import styles from '../style';
import PinAnimation from './PinAnimation';

// eslint-disable-next-line react/prop-types

const Business = () => {
  return (
    <section>
      <div className="my-[4rem]">
        <div className="flex flex-col items-center">
          <h2
            className={`${styles.heading2} flex flex-col items-center justify-center text-center leading-relaxed whitespace-nowrap`}
          >
            Your Money Is <br />
          </h2>
          <PinAnimation />
          <h2
            className={`${styles.heading2} flex flex-col items-center justify-center text-center leading-relaxed whitespace-nowrap`}
          >
            With Us
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] text-center`}>
            Your peace of mind matters to us. Our bank is committed to protecting your assets
            through robust security protocols and proactive fraud prevention measures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Business;
