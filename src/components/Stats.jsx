import { users_dark, trust_dark, transactions_dark } from '../assets';
import CardAnimation from './CardAnimation';

const Stats = () => {
	return (
		<div className="flex grow-0 flex-col justify-between space-y-10 sm:flex-row sm:space-y-0">
			<CardAnimation interval={500} animationClassName="animate">
				<img src={users_dark} alt="users" className="shadow-50 rounded-50 sm:w-[30%]" />
				<img src={trust_dark} alt="trust" className="shadow-50 rounded-50 sm:w-[30%]" />
				<img
					src={transactions_dark}
					alt="transactions"
					className="shadow-50 rounded-50 sm:w-[30%]"
				/>
			</CardAnimation>
		</div>
	);
};

export default Stats;
