import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useInView } from 'react-intersection-observer';
import {Avatar, Fade} from '@mui/material';
import ScrollFade from './components/ScrollFade';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Intro from './components/Intro';
import Tools from './components/Tools';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';


import './App.css';

function App() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Comfortaa',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif'
            ].join(','),
        },
    });

    return (
        <div className="App">
	    <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <Toolbar variant="dense">
                        <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                        <Avatar
                            src="GEatonIcon.png"
                            sx={{ width: 56, height: 56, mr: 1 }}
                            alt="ApolloIcon"
                        />
                        <Typography variant="h6" color="inherit" component="div">
                            G. Eaton
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <ScrollFade><Intro /></ScrollFade>
                <ScrollFade><Tools /></ScrollFade>
                <ScrollFade><Projects /></ScrollFade>
                <ScrollFade><AboutMe /></ScrollFade>
            </div>
        </ThemeProvider>
        </div>
    );
}

export default App;
