import styles from '../style'
import PinAnimation from './PinAnimation'
import BlurCardAnimation from './CardAnimation'
// eslint-disable-next-line react/prop-types

const Bussiness = () => {
  return (
    <section id="features" >
      <div className="mt-10">
        <div className="flex flex-col items-center">
          <h2 className={`${styles.heading2} text-center leading-relaxed flex flex-col justify-center items-center whitespace-nowrap`}>
            Your Money Are <br /><BlurCardAnimation/><PinAnimation /> 
            With Us  
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] text-center`}>
            Your peace of mind matters to us. Our bank is committed to protecting your assets through robust security protocols and proactive fraud prevention measures.
        </p>
          </div>
      </div>

    </section>
  )
}

export default Bussiness