import { useEffect, useState } from 'react';
import { clients } from '../constants';
import styles from '../style';
import CardAnimation from './CardAnimation';
import { sponsor, sponsor_mobile } from '../assets';
const Clients = () => {
	const [imageSource, setImageSource] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			const newImageSource = window.innerWidth > 767 ? sponsor : sponsor_mobile;
			setImageSource(newImageSource);
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (!imageSource) {
		return null;
	}

	return (
		<section id="clients" className={`${styles.flexCenter} flex flex-col`}>
			<CardAnimation interval={300} animationClassName="stats">
				<h2 className={`${styles.heading2} mb-10 text-center`}>Our Partners:</h2>
			</CardAnimation>
			<div className={`${styles.flexCenter} my-10 flex-col flex-wrap md:flex-row`}>
				<CardAnimation interval={400} animationClassName="stats">
					{clients.map((client) => (
						<div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
							<img
								src={client.logo}
								alt="client"
								className="shadow-20 rounded-20 mb-8 h-[70%] w-[70%] object-contain"
							/>
						</div>
					))}
				</CardAnimation>
			</div>
			<CardAnimation interval={300} animationClassName="stats">
				<div className="mt-10">
					<h2 className={`${styles.heading2} mt-10 text-center`}>We are now sponsoring:</h2>
					<a href="https://project-mars-serverless.vercel.app/" target="_blank" rel="noreferrer">
						<img src={imageSource} alt="screenshot1" className="w-full" />
					</a>
				</div>
			</CardAnimation>
		</section>
	);
};

export default Clients;
