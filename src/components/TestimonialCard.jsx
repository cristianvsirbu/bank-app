import { quotations } from '../assets'



const TestimonialCard= ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card '>
      <img src={quotations} alt='quotations' className='w-[5rem] h-[5rem] object-contain' />
      <p className='font-neue font-normal text-[18px] leading-[30.8px] text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[72px] h-[72px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-neue font semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-neue font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard