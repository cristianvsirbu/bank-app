import styles from "../style"
import { sale, card } from "../assets"

const Hero = () => (
  <section className={` flex justify-center lg:justify-start lg:flex-col
    lg:pb-0
    ${styles.paddingY} 
  `}>
    <div className={`
      flex
      flex-col
      xl:px-0 
      sm:px-16 
      px-6
       
    `}>

      <div className="flex flex-col items-center lg:items-start">
        
        <div className="
        flex  
        items-center
        self-center
        lg:self-start	  
        sm:py-[5px] 
        px-2 
        md:px-4 
        bg-discount-gradient 
        rounded-[25px] 
        sm:rounded-[15px] 
        md:rounded-[10px] 
      ">

          <img
            src={sale}
            alt="discount"
            className="w-[22px] sm:w-[32px]" />
          <p
            className={`
            ${styles.paragraph} 
            ml-2
            text-[11px]
            md:text-[16px]
            lg:text-[18px] 
        `}>
            <span className="text-white font-neue">50% </span>
            DISCOUNT FOR {" "}
            <span className="text-white font-neue"> 1 MONTH</span>
          </p>
        </div>

        <h1
          className="
            flex-1
            font-neue
            font-bold
            text-center
            lg:text-left
            ss:text-[72px]
            text-[50px]
            text-white
        ">
          We Grow <br className="sm:max-md:hidden" /> With You
        </h1>

        <p
          className={`
            ${styles.paragraph} 
            max-w-[600px] 
            md:max-w-[570px] 
            sm:text-[18px] 
            md:text-[20px] 
            lg:text-[26px]
            xl:text-[28px] 
            text-center 
            lg:text-left 
            text-[15px] 
            text-dimWhite
        `}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
        <img
          src={card}
          alt="card"
          className="
            w-[500px] 
            md:w-[550px]  
            mt-8 
            lg:w-[650px] 
            self-center
            shrink
            lg:self-end
            lg:relative
            bottom-[390px]
            xl:bottom-[410px]
            "
        />
      </div>
    </div>
  </section>
)

export default Hero;