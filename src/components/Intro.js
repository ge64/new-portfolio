// src/components/Intro.js
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Intro = () => (
	<Container sx={{ mt: 10, height: '100vg', flexGrow: 1 }}>
		<Box sx={{ height: 'calc(100vh - 64px)' }}>
			<Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{Array.from(Array(6)).map((_, index) => (
					<Grid xs={1} sm={4} md={4} key={index}>
						<Item>xs=2</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	</Container>
);

export default Intro;
