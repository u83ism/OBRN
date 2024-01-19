import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';

type Routing = "root" | "info" | "event"
type Display = {
  icon: JSX.Element,
  text: string
}

type RountingAndDisplayMap = {
  [key in Routing]: Display
}

export const NavigationDisplay = (): JSX.Element => {
  const routingAndDisplayMap: RountingAndDisplayMap = {
    root: {
      icon: <DashboardIcon />,
      text: "トップ"
    },
    info: {
      icon: <InfoIcon />,
      text: "インフォメーション",
    },
    event: {
      icon: <EventIcon />,
      text: "企画"
    }
  }

  return (
    <React.Fragment>
      <ListItem disablePadding>
        <ListItemButton href="/">
          <ListItemIcon>
            {routingAndDisplayMap.root.icon}
          </ListItemIcon>
          <ListItemText primary={routingAndDisplayMap.root.text} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton href="/information">
          <ListItemIcon>
            {routingAndDisplayMap.info.icon}
          </ListItemIcon>
          <ListItemText primary={routingAndDisplayMap.info.text} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton href="/event.html" target="_blank">
          <ListItemIcon>
            {routingAndDisplayMap.event.icon}
          </ListItemIcon>
          <ListItemText primary={routingAndDisplayMap.event.text} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  )
};

