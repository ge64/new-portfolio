// src/components/AboutMe.js
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

const AboutMe = () => (
	<Container>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<div className="content">
				<h1>Hi there, I'm Gabriel</h1>
				<p>I'm a web and mobile developer looking for more experience.</p>
			</div>
		</Box>
	</Container>
);

export default AboutMe;
