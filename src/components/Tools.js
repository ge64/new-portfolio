// src/components/Tools.js
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';


const techStacks = [
	{ name: 'NextJS', image: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658045310/nextjs_l7vxuz.svg' },
	{ name: 'Reactjs', image: '/path-to-nodejs-image.png' },
	{ name: 'Javascript', image: '/path-to-nodejs-image.png' },
	{ name: 'Typescript', image: '/path-to-nodejs-image.png' },
	{ name: 'Tailwind CSS', image: '/path-to-nodejs-image.png' },
	{ name: 'SCSS', image: '/path-to-nodejs-image.png' },
	{ name: 'MySQL', image: '/path-to-nodejs-image.png' },
	{ name: 'SQLite', image: '/path-to-nodejs-image.png' },
	{ name: 'MS SQL', image: '/path-to-nodejs-image.png' },
	{ name: 'PostgreSQL', image: '/path-to-nodejs-image.png' },
	// Add other technology stacks here...
];


const Tools = () => (
	<Container>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<div className="content">
				<h1>Tools I use</h1>
				<p>Here's a list of technologies I'm familiar with and have used before.</p>
				<Grid container spacing={2}>
					{techStacks.map((tech, index) => (
						<Grid item xs={6} sm={2.4} key={index}>
							<Card>
								<CardMedia
									component="img"
									height="60"
									width="60"
									image={tech.image}
									alt={tech.name}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{tech.name}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</Box>
	</Container>
);

export default Tools;
