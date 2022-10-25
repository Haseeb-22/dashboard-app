import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import DashboardRouter from '../Config/Dashboard_Router'
import Dashboard_main from './dashboard_screen/Dashboard_main';
import Email from './dashboard_screen/Email';
import Feedback from './dashboard_screen/Feedback';
import Inbox from './dashboard_screen/Inbox';
import Notifications from './dashboard_screen/Notifications';
import Sales from './dashboard_screen/Sales';
import Data from './dashboard_screen/Data';
import CardRender from './dashboard_screen/CardRender';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            route: "",
            name: "Dashboard",
            icon:()=> <InboxIcon />
          },
          {
            route: "Email",
            name: "Email",
            icon:()=> <InboxIcon />
          },
          {
            route: "Notifications",
            name: "Notifications",
            icon:()=> <InboxIcon />
          },
          {
            route: "Feedback",
            name: "Feedback",
            icon:()=> <InboxIcon />
          },
          {
            route: "Data",
            name: "All Data",
            icon:()=> <InboxIcon />
          },
          {
            route: "Inbox",
            name: "Inbox",
            icon:()=> <InboxIcon />
          },
          {
            route: "Sales",
            name: "Sales",
            icon:()=> <InboxIcon />
          },
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => {
                navigate(text.route)
            }}>
              <ListItemIcon>
                {text.icon()}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Routes>
        <Route path='/' element={<Dashboard_main/>} />
        <Route path='Email' element={<Email/>} />
        <Route path='Feedback' element={<Feedback/>} />
        <Route path='Inbox' element={<Inbox/>} />
        <Route path='Notifications' element={<Notifications/>} />
        <Route path='Sales' element={<Sales/>} />
        <Route path='Data' element={<Data/>} />
        <Route path='CardRender' element={<CardRender/>}/>
      </Routes>


        

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
