import { apple, google, screenshot1, screenshot2 } from '../assets';
import styles, { layout } from '../style';

const Mobile = () => {
  return (
    <section id='product' className={layout.section}>
      <div className={`${layout.sectionImgReverse} flex-col`}>
      </div>
      <div className={`flex-col sm:flex-row mx-auto`}>
        <img src={screenshot1} alt='screenshot1' className='mr-10' />
        <img src={screenshot2} alt='screenshot2' />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Mobile</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>We are in your pocket!</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Mobile;