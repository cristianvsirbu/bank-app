import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CardAnimation = ({ children, interval, animationClassName }) => {
	const elementsRef = useRef([]);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const targetElement = entry.target;
					const index = elementsRef.current.indexOf(targetElement);
					const animationDelay = index * interval;

					const animateElement = () => {
						targetElement.classList.add(animationClassName);
						observer.unobserve(targetElement);
					};

					if (!targetElement.classList.contains(animationClassName)) {
						setTimeout(animateElement, animationDelay);
					}
				}
			});
		});

		if (isReady && elementsRef.current.length > 0) {
			elementsRef.current.forEach((element) => {
				observer.observe(element);
			});
		}

		return () => {
			observer.disconnect();
		};
	}, [isReady, animationClassName, interval]);

	useEffect(() => {
		window.addEventListener('load', () => {
			setIsReady(true);
		});

		return () => {
			window.removeEventListener('load', () => {
				setIsReady(true);
			});
		};
	}, []);

	useEffect(() => {
		if (isReady && elementsRef.current.length > 0) {
			elementsRef.current.forEach((element) => {
				element.style.opacity = 0;
			});
		}
	}, [isReady]);

	return React.Children.map(children, (child, index) =>
		React.cloneElement(child, {
			ref: (el) => (elementsRef.current[index] = el),
		}),
	);
};

CardAnimation.propTypes = {
	children: PropTypes.node.isRequired,
	interval: PropTypes.number.isRequired,
	animationClassName: PropTypes.string.isRequired,
};

export default CardAnimation;
