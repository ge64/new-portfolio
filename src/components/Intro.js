// src/components/Intro.js
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

const Intro = () => (
	<Container sx={{ mt: 10, height: '100vg' }}>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<div className="content">
				<h1>Welcome to My Portfolio</h1>
				<p>This is an introduction to who I am and what I do.</p>
			</div>
		</Box>
	</Container>
);

export default Intro;
