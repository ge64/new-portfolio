// src/components/Intro.js
import React from 'react';
import {Button, Container} from '@mui/material';
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
		<Box sx={{height: 'calc(100vh - 64px)'}}>
			<div className="introcontent">
				<h1>Hi there, I'm Gabriel.</h1>
			</div>
			<Grid container spacing={2} columns={2}>
				<Grid item xs={1}>
					<div>
						<div style={{ margin: "120px 0 0 0" }}>
							<h1>A stopped clock may be right twice a day, but a truly broken clock is incomprehensible.</h1>
						</div>
						<div>
							<h2>Maybe you should point and laugh at it some more, huh?</h2>
						</div>
						<div className={"linkButtons"}>
							<Button variant="contained" className={"introLink"} href="#Projects" style={{ backgroundColor: "#e94a31" }}>Projects</Button>
							<Button variant="contained" className={"introLink"} href="https://github.com/ge64" style={{ backgroundColor: "#2aa084" }}>GitHub</Button>
							<Button variant="contained" className={"introLink"} href="https://1drv.ms/b/s!Aq2KzUc-KWhF3xbOirjpY2bq__bD?e=vBymGU" style={{ backgroundColor: "#1479bd" }}>Resume</Button>
						</div>
					</div>
				</Grid>
				<Grid item xs={1}>
					<img src="GEatonIcon.png" alt="Descriptive Alt Text" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
				</Grid>
			</Grid>

		</Box>
	</Container>
);

export default Intro;
