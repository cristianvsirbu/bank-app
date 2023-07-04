import styles from "../style"
import { sale, card } from "../assets"

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 items-center lg:items-start lg:self-start`}>
      <div className="flex flex-row self-center lg:self-start items-center py-[1px] sm:py-[5px] px-2 md:px-4 bg-discount-gradient rounded-[25px] sm:rounded-[15px] md:rounded-[10px] mb-2 ">
        <img src={sale} alt="discount" className="w-[22px] sm:w-[32px]" />
        <p className={`${styles.paragraph} ml-2 text-[13px] sm:text-[14px]`}>
          <span className="text-white font-neue">50% </span>
          DISCOUNT FOR {" "}
          <span className="text-white font-neue"> 1 MONTH</span>
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="flex-1 font-neue font-bold self-center lg:self-start ss:text-[72px] text-[50px] text-white ss:leading-[100px] leading-[65px]">
          We Grow <br className="sm:hidden xl:block" /> With You
        </h1>
        
        <p className={`${styles.paragraph} max-w-[600px] md:max-w-[620px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-center md:text-left text-[15px] text-white`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        
      </div>
      <div className="flex self-center lg:self-end lg:relative top-[-245px] xl:top-[-350px]">
        <img src={card} alt="card" className="w-[500px]  mt-8 lg:mt-0 lg:w-[590px] xl:w-[600px]"/>
      </div>

    </div>
  </section>
)

export default Hero;