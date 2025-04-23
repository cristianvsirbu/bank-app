import { forwardRef } from 'react';
import { quotations } from '../assets';
import CardAnimation from './CardAnimation';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const TestimonialCard = forwardRef(({ content, name, title, img }, ref) => {
	return (
		<CardAnimation interval={500} animationClassName="stats">
			<div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
				<CardAnimation interval={500} animationClassName="stats">
					<img src={quotations} alt="quotations" className="h-[5rem] w-[5rem] object-contain" />
					<p className="font-neue my-10 text-[18px] leading-[30.8px] font-normal text-white">
						{content}
					</p>
				</CardAnimation>
				<div className="flex flex-row">
					<CardAnimation interval={500} animationClassName="animate">
						<img src={img} alt={name} className="h-[72px] w-[72px] rounded-full" />
						<div className="ml-4 flex flex-col">
							<CardAnimation interval={500} animationClassName="stats">
								<h4 className="font-neue font semibold text-[20px] leading-[32px] text-white">
									{name}
								</h4>
								<p className="font-neue text-[16px] leading-[24px] font-normal text-white/50">
									{title}
								</p>
							</CardAnimation>
						</div>
					</CardAnimation>
				</div>
			</div>
		</CardAnimation>
	);
});

TestimonialCard.displayName = 'TestimonialCard';
TestimonialCard.propTypes = {
	content: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default TestimonialCard;
