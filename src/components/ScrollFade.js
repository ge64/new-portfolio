// src/components/ScrollFade.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from '@mui/material';

const ScrollFade = ({ children, ...rest }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '-100px 0px',
	});

	return (
		<Fade in={inView} timeout={1000}>
			<div ref={ref} {...rest}>
				{children}
			</div>
		</Fade>
	);
};

export default ScrollFade;
