import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='bluestar' className='sm:w-[10rem] sm:h-[2.75rem] w-[9rem] h-[2.63rem]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`
              font-neue
              font-bold
              cursor-pointer
              text-[16px]
              md:text-[18px]
              lg:text-[20px]
             text-white
             hover:text-secondary
              mr-6
              md:mr-10
              ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>

        ))}
        <button className='button__style w-[6rem] h-[2.5rem] font-neue font-bold text-white'>Sign Up</button>
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-5 bg-black-gradient-2 absolute top-20 right-5 mx-2 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`
              font-neue
              font-normal
              cursor-pointer
              text-[20px]
             text-white
              mb-3`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
              </li>
            ))}
          <button className='button__style w-[6rem] h-[2.5rem] font-neue font-bold text-white'>Sign Up</button>
        </ul>
      </div>
    </div>
    </nav >
  )
}

export default Navbar