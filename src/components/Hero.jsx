import styles from "../style"
import { sale, card } from "../assets"
import CardAnimation from "./CardAnimation"
import Exchange from "./Exchange";


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
        py-[3px]	  
        sm:py-[5px] 
        px-2 
        md:px-4 
        bg-discount-gradient 
        rounded-[25px] 
        sm:rounded-[15px] 
        md:rounded-[10px] 
        box-shadow-10
      ">

          <span className="discount__gradient-blur w-8 h-8 absolute animate-pulse" />
            <img
              src={sale}
              alt="discount"
              className="w-[22px] sm:w-[32px]" />
          
          <p
            className={`
            text-dimWhite
            ml-2
            font-semibold
            text-[13px]
            md:text-[16px]
            lg:text-[18px] 
        `}>
            <span className="text-white font-neue">50% </span>
            DISCOUNT FOR {" "}
            <span className="text-white font-neue"> 1 YEAR</span>
          </p>
        </div>
<CardAnimation interval={500} animationClassName="animate">
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
          We Grow <br className="sm:max-lg:hidden" /> With You
        </h1>

        <p
          className={`
            ${styles.paragraph} 
            max-w-[600px] 
            md:max-w-[421px] 
            text-[15px] 
            sm:text-[18px] 
            md:text-[20px]            
            text-center 
            lg:text-left 
            text-dimWhite
        `}>
          With a commitment to excellence and personalized service, we strive to be your financial partner for life. Experience seamless banking solutions, expert advice, and a range of innovative products tailored to meet your unique needs.
        </p>
</CardAnimation>
        <CardAnimation interval={500} animationClassName="sidebar">
        <img
          src={card}
          alt="card"
          className="
            w-[500px]
            md:w-[550px] 
            lg:w-[650px]
            lg:h-[408px] 
            mt-8 
            lg:mt-0
            self-center
            shrink
            lg:self-end
            lg:relative
            bottom-[390px]
            lg:bottom-[410px]
           "
          />
</CardAnimation>
      </div>
      <Exchange />
    </div>
  </section>
)

export default Hero;
