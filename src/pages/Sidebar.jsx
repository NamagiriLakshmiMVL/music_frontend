import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography } from '@mui/material';

export function Sidebar(props) {


    return (
        <>
            <Box sx={{height:"100%", width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,textAlign:"center"}}>
                <nav aria-label="main mailbox folders">
                    <Box sx={{display:"flex",alignItems:"center",textAlign:"center"}}>
                    <Box
                        component="img"
                        sx={{
                            height: { xs: 50, md: 90 },
                            width: { xs: 50, md: 90 },
                        }}
                        src='https://png.pngtree.com/png-vector/20230130/ourmid/pngtree-speakers-vector-art-png-image_6576095.png'
                        alt='SoundBox'
                    />
                    <Typography sx={{fontWeight:"800px"}}>
                        Sound <br/>
                        Box
                    </Typography>
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                               
                                <ListItemText primary="Search" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
              
            </Box>
        </>
    )
}
