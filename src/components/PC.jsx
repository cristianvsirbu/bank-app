import { dashboard } from '../assets';
import styles, { layout } from '../style';

const PC = () => {
  return (
    <section id='product' className={layout.section}>
      <div className='text-center'>
        <h2 className={styles.heading2}>And On Your Desktop</h2>
        <p className={`${styles.paragraph}`}>Your Dashboard will show all the important details you need to see.</p>
        <img src={dashboard} alt='dashboard' className='' />
      </div>
    </section>
  )
}

export default PC;



