// src/components/Projects.js
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

const Projects = () => (
	<Container>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<div className="content">
				<h1>Projects I've built</h1>
				<p>Here's a list of projects I've done before.</p>
			</div>
		</Box>
	</Container>
);

export default Projects;
