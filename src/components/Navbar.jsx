import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="navbar flex w-full items-center justify-between py-6">
			<img src={logo} alt="bluestar" className="h-[2.63rem] w-[9rem] sm:h-[2.91rem] sm:w-[10rem]" />
			<ul className="hidden flex-1 list-none items-center justify-end sm:flex">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-neue hover:text-secondary mr-6 cursor-pointer text-[16px] font-bold text-white md:mr-10 md:text-[18px] lg:text-[20px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
				<button className="button__style font-neue hover:button__gradient-blur h-[2.5rem] w-[6rem] font-bold text-white">
					Sign Up
				</button>
			</ul>
			<div className="flex flex-1 items-center justify-end sm:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="h-[34px] w-[34px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient-2 sidebar absolute top-20 right-5 z-10 mx-2 my-2 min-w-[140px] rounded-xl p-5`}
				>
					<ul className="flex flex-1 list-none flex-col items-center justify-end">
						{navLinks.map((nav) => (
							<li
								key={nav.id}
								className={`font-neue mb-3 cursor-pointer text-[20px] font-normal text-white`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
						<button className="button__style font-neue h-[2.5rem] w-[6rem] font-bold text-white">
							Sign Up
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
