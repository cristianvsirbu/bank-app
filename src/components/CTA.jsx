import styles from "../style";


const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col cta__bg-gradient rounded-[20px] box-shadow `}>
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Get Started</h2>
        <p className={styles.paragraph}>Paragraph</p>
      </div>

      <div className={`${styles.flexCenter}`}>
        <button className="button__style px-9 py-3 font-neue font-medium text-white">Sign Up</button>
      </div>
    </section>
  )
}

export default CTA;