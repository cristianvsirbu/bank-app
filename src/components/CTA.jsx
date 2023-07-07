import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Get Started</h2>
        <p className={styles.paragraph}>Paragraph</p>
      </div>

      <div className={`${styles.flexCenter}`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA;