import { apple, google, screenshot1, screenshot2 } from '../assets';
import styles, { layout } from '../style';
import CardAnimation from './CardAnimation';

const Mobile = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionImg} flex-col sm:flex-row sm:justify-evenly`}>
        <CardAnimation interval={500} animationClassName='stats'>
          <img src={screenshot1} alt='screenshot1' className='w-full sm:max-w-[250px] md:max-w-[200px] lg:max-w-[250px] 
        screenshots
        mb-10
        sm:mb-0' />
          <img src={screenshot2} alt='screenshot2' className='w-full sm:max-w-[250px] md:max-w-[200px] lg:max-w-[250px] screenshots' />
        </CardAnimation>
      </div>
      <div className={`flex-1 flex-col flex items-center md:items-start md:ml-5`}>
        <CardAnimation interval={500} animationClassName='animate'>
          <h2 className={`${styles.heading2} text-center md:text-start mt-5 md:mt-0`}>We Are In Your Pocket</h2>
          <p className={`${styles.paragraph} text-center md:text-start md: text-[1rem]`}>
            Introducing our cutting-edge banking app, designed to revolutionize the way you manage your finances. Our app provides a seamless and secure platform that puts the power of banking right at your fingertips. With intuitive features and a user-friendly interface, you can effortlessly navigate through your accounts, check your balances, make payments, transfer funds, and even set personalized savings goals.
          </p>
        </CardAnimation>
        <div className='flex mt-5 w-full justify-center md:justify-start flex-col sm:flex-row'>
          <CardAnimation interval={500} animationClassName='stats'>
            <img src={apple} alt="apple" className='sm:mr-10 mr-0 mb-10 sm:mb-0 sm:h-[4rem] stores' />
            <img src={google} alt="google" className='sm:h-[4rem] stores' />
          </CardAnimation>
        </div>
      </div>

    </section>
  )
}

export default Mobile;