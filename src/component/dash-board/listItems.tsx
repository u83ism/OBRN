import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
    </ListItemButton>
    <ListItemButton href="/info.html">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Info" />
    </ListItemButton>
    <ListItemButton href="/event.html">
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="InterView" />
    </ListItemButton>
  </React.Fragment>
);

