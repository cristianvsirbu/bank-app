import { apple, google, screenshot1, screenshot2 } from '../assets';
import styles, { layout } from '../style';
import CardAnimation from './CardAnimation';

const Mobile = () => {
  return (
    <section id="mobile" className={`${layout.section}`}>
      <div className={`${layout.sectionImg} flex-col sm:flex-row sm:justify-evenly`}>
        <CardAnimation interval={500} animationClassName="stats">
          <img
            src={screenshot1}
            alt="screenshot1"
            className="screenshots mb-10 h-[590px] w-[270px] sm:mb-0 md:max-lg:h-[432px] md:max-lg:w-[200px]"
          />
          <img
            src={screenshot2}
            alt="screenshot2"
            className="screenshots h-[590px] w-[270px] md:max-lg:h-[432px] md:max-lg:w-[200px]"
          />
        </CardAnimation>
      </div>
      <div className={`flex flex-1 flex-col items-center md:ml-5 md:items-start`}>
        <CardAnimation interval={500} animationClassName="animate">
          <h2 className={`${styles.heading2} mt-5 text-center md:mt-0 md:text-start`}>
            We Are In Your Pocket
          </h2>
          <p className={`${styles.paragraph} md: text-center text-[1rem] md:text-start`}>
            Introducing our cutting-edge banking app, designed to revolutionize the way you manage
            your finances. Our app provides a seamless and secure platform that puts the power of
            banking right at your fingertips. With intuitive features and a user-friendly interface,
            you can effortlessly navigate through your accounts, check your balances, make payments,
            transfer funds, and even set personalized savings goals.
          </p>
        </CardAnimation>
        <div className="mt-5 flex w-full flex-col justify-center sm:flex-row md:justify-start">
          <CardAnimation interval={500} animationClassName="stats">
            <img
              src={apple}
              alt="apple"
              className="stores mr-0 mb-10 sm:mr-10 sm:mb-0 sm:h-[4rem]"
            />
            <img src={google} alt="google" className="stores sm:h-[4rem]" />
          </CardAnimation>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
