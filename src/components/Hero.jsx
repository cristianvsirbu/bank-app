import styles from '../style';
import { sale, card } from '../assets';
import CardAnimation from './CardAnimation';
import Exchange from './Exchange';

const Hero = () => (
  <section className={`flex flex-col justify-center pt-10 lg:justify-start lg:pb-0`}>
    <div className={`flex flex-col px-6 sm:px-16 lg:h-0 lg:pt-[4rem] lg:pb-[33rem] xl:px-0`}>
      <div className="flex flex-col items-center lg:items-start">
        <div className="bg-discount-gradient shadow-10 rounded-10 flex items-center self-center rounded-[25px] px-2 py-[3px] sm:rounded-[15px] sm:py-[5px] md:rounded-[10px] md:px-4 lg:self-start">
          <span className="discount__gradient-blur absolute h-8 w-8 animate-pulse" />
          <img src={sale} alt="discount" className="w-[22px] sm:w-[32px]" />
          <p
            className={`ml-2 text-[13px] font-semibold text-white/50 md:text-[16px] lg:text-[18px]`}
          >
            <span className="font-neue text-white">50% </span>
            DISCOUNT FOR <span className="font-neue text-white"> 1 YEAR</span>
          </p>
        </div>
        <CardAnimation interval={500} animationClassName="animate">
          <h1 className="font-neue ss:text-[72px] flex-1 text-center text-[50px] font-bold text-white lg:text-left">We Grow With You</h1>

          <p
            className={`${styles.paragraph} max-w-[600px] text-center text-[15px] text-white/50 sm:text-[18px] md:max-w-[421px] md:text-[20px] lg:text-left`}
          >
            With a commitment to excellence and personalized service, we strive to be your financial
            partner for life. Experience seamless banking solutions, expert advice, and a range of
            innovative products tailored to meet your unique needs.
          </p>
        </CardAnimation>
        <CardAnimation interval={500} animationClassName="sidebar">
          <img
            src={card}
            alt="card"
            className="bottom-[390px] mt-8 w-[500px] shrink self-center md:w-[550px] lg:relative lg:bottom-[410px] lg:mt-0 lg:h-[408px] lg:w-[650px] lg:self-end"
          />
        </CardAnimation>
      </div>
    </div>
    <div className={`flex flex-col justify-center`}>
      <Exchange />
    </div>
  </section>
);

export default Hero;
