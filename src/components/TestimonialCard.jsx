import { forwardRef } from 'react';
import { quotations } from '../assets';
import CardAnimation from './CardAnimation';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const TestimonialCard = forwardRef(({ content, name, title, img }, ref) => {
  return (
    <CardAnimation interval={500} animationClassName="stats">
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <CardAnimation interval={500} animationClassName="stats">
          <img src={quotations} alt="quotations" className="w-[5rem] h-[5rem] object-contain" />
          <p className="font-neue font-normal text-[18px] leading-[30.8px] text-white my-10">
            {content}
          </p>
        </CardAnimation>
        <div className="flex flex-row">
          <CardAnimation interval={500} animationClassName="animate">
            <img src={img} alt={name} className="w-[72px] h-[72px] rounded-full" />
            <div className="flex flex-col ml-4">
              <CardAnimation interval={500} animationClassName="stats">
                <h4 className="font-neue font-semibold text-[20px] leading-[32px] text-white">
                  {name}
                </h4>
                <p className="font-neue font-normal text-[16px] leading-[24px] text-dimWhite">
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
