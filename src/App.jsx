import styles from "./style"
import { Navbar, Hero, Stats, Footer, Clients, Mobile, Testimonials, CTA, PC, Bussiness } from "./components";
const App = () => (
  <div className='bg__gradient w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg__gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
        <Bussiness />
        <Mobile />
        <PC />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)


export default App;