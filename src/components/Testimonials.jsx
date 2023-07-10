import { feedback } from "../constants"
import styles from "../style"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex justify-between sm:mb-16 mb-6 relative z-[1]">
        <div className="w-full md:mt-0  mt-6 text-center">
          <h2 className={`${styles.heading2}`}>Testimonials</h2>
          <p className={`${styles.paragraph}`}>What our users are saying about us.</p>	
        </div>
      </div>
      <div className="flex flex-wrap md:justify-start justify-center feedback-container relative z-1">
        {feedback.map((card) => (
          <TestimonialCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials