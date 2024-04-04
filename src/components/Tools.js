// src/components/Tools.js
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

const Tools = () => (
	<Container>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<div className="content">
				<h1>Tools I use</h1>
				<p>Here's a list of technologies I'm familiar with and have used before.</p>
			</div>
		</Box>
	</Container>
);

export default Tools;
