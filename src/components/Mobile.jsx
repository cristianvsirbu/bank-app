import { apple, google, screenshot1, screenshot2 } from '../assets';
import styles, { layout } from '../style';

const Mobile = () => {
  return (
    <section id='product' className={`${layout.section}`}>

      <div className={`${layout.sectionImg} flex-col sm:flex-row sm:justify-evenly`}>
        <img src={screenshot1} alt='screenshot1' className='w-full sm:max-w-[250px] md:max-w-[200px] lg:max-w-[250px]' />
        <img src={screenshot2} alt='screenshot2' className='w-full sm:max-w-[250px] md:max-w-[200px] lg:max-w-[250px]' />
      </div>
      <div className={`flex-1 flex-col flex items-center md:items-start md:ml-5`}>
        <h2 className={`${styles.heading2} text-center md:text-start mt-5 md:mt-0`}>We Are In Your Pocket</h2>
        <p className={`${styles.paragraph} text-center md:text-start`}>Introducing our cutting-edge banking app, designed to revolutionize the way you manage your finances. Our app provides a seamless and secure platform that puts the power of banking right at your fingertips. With intuitive features and a user-friendly interface, you can effortlessly navigate through your accounts, check your balances, make payments, transfer funds, and even set personalized savings goals.</p>
        <div className='flex mt-5'>
          <img src={apple} alt="apple" className='' />
          <img src={google} alt="google" className='' />
        </div>
      </div>

    </section>
  )
}

export default Mobile;