import React from 'react'

const Mobile = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} flex-col`}>

      </div>
      <div className={`${layout.sectionImg} flex-col`}>

      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}></p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Mobile