// src/components/Intro.js
import React from 'react';
import { Container } from '@mui/material';

const Intro = () => (
	<Container sx={{ mt: 8 }}>
		<div className="content">
			<h1>Welcome to My Portfolio</h1>
			<p>This is an introduction to who I am and what I do.</p>
		</div>
	</Container>
);

export default Intro;
