import styles from "./style"
import { Navbar, Hero, Stats, TestimonialCard, Footer, Clients, Button, Mobile, Testimonials, CTA, PC, Bussiness } from "./components";
const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness />
          <Mobile />
          <PC />
          <Testimonials />
          <Clients />
          <CTA />
        <Footer />
        <TestimonialCard />
        <Button />
        </div>
      </div>
    </div>
  )


export default App;