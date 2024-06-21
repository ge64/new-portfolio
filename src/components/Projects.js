// src/components/Projects.js
import React from 'react';
import {Button, Container} from '@mui/material';
import { Box } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";

const Projects = () => (
	<Container>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<div className="content">
				<h1>Projects I've built</h1>
				<p>Here's a list of projects I've done before.</p>
				<Grid container spacing={2} columns={1}>
					<Grid item xs={3}>
						<div>

						</div>
						<div>
							<h2>Project 2</h2>
						</div>
						<div>
							<h2>Project 3</h2>
						</div>
					</Grid>
				</Grid>
			</div>
		</Box>
	</Container>
);

export default Projects;
