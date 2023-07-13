import styles from '../style'
import PinAnimation from './PinAnimation'


// eslint-disable-next-line react/prop-types

const Bussiness = () => {
  return (
    <section>
      <div className="my-[4rem]">
        <div className="flex flex-col items-center">
          <h2 className={`${styles.heading2} text-center leading-relaxed flex flex-col justify-center items-center whitespace-nowrap`}>
            Your Money Are <br />
          </h2>
          <PinAnimation />
          <h2 className={`${styles.heading2} text-center leading-relaxed flex flex-col justify-center items-center whitespace-nowrap`}>
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