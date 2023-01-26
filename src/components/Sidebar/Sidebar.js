import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid, IconButton } from '@mui/material';
import { Close, Home, SportsEsports } from '@mui/icons-material';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const Sidebar = () => {
  const [openDrawer, setopenDrawer] = useState(false)
  const [optionsMenu, setoptionsMenu] = useState([
    { label: 'Home', icon: Home },
    {
      label: 'Productos', icon: SportsEsports,
      subMenu: [{ label: 'Listado de productos' }],
      showSubmenu: false
    }])

  const handleChangeSubmenu = (position) => {
    optionsMenu[position].showSubmenu = !optionsMenu[position].showSubmenu
    setoptionsMenu([...optionsMenu])
  }

  const createSubmenu = (submenuOption, openSubmenu) => {
    return (<>
      <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {submenuOption.map(itemSubmenu =>
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemText primary={itemSubmenu.label} />
            </ListItemButton>
          )}
        </List>
      </Collapse>
    </>)
  }
  return (
    <>
      <IconButton onClick={() => setopenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
      >
        <Grid container>
          <Grid item md={12} xs={12} style={{ display: 'flex', justifyContent: 'flex-end', padding: '2px' }}>
            <IconButton
              onClick={() => setopenDrawer(false)}>
              <Close />
            </IconButton>
          </Grid>
          <Grid item md={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }} >
            <Grid style={{ minHeight: '10vh', minWidth: '10vh', maxHeight: '10vh', maxWidth: '10vh' }}>
              <Avatar src='https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' alt='LA' style={{ width: '100%', height: '100%' }} />
            </Grid>
          </Grid>
          <Grid item md={12} xs={12} >
            <List>
              {optionsMenu.map((optionMenu, index) =>
                <>
                  <ListItem key={optionMenu.label}>
                    <ListItemButton
                      onClick={optionMenu.subMenu ? () => handleChangeSubmenu(index) : () => console.log("redirect")}>
                      {optionMenu.icon &&
                        <ListItemIcon>
                          <optionMenu.icon />
                        </ListItemIcon>
                      }
                      <ListItemText primary={optionMenu.label} />
                      {optionMenu.subMenu &&
                        <>
                          {optionMenu.showSubmenu ? <ExpandLess /> : <ExpandMore />}
                        </>
                      }
                    </ListItemButton>
                  </ListItem>
                  {optionMenu.subMenu && createSubmenu(optionMenu.subMenu, optionMenu.showSubmenu)}
                </>
              )}

            </List>
          </Grid>
        </Grid>

      </Drawer>
    </>
  )
}
