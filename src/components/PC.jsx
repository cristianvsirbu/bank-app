import { dashboard } from '../assets';
import styles, { layout } from '../style';
import CardAnimation from './CardAnimation';

const PC = () => {
	return (
		<section id="product" className={layout.section}>
			<div className="text-center">
				<CardAnimation interval={300} animationClassName="stats">
					<h2 className={styles.heading2}>And On Your Desktop</h2>
					<p className={`${styles.paragraph}`}>
						Your Dashboard will show all the important details you need to see.
					</p>
					<img src={dashboard} alt="dashboard" className="" />
				</CardAnimation>
			</div>
		</section>
	);
};

export default PC;
