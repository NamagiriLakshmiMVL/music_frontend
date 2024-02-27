import React from 'react'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import {Box} from "@mui/material"
import { deepOrange, deepPurple } from '@mui/material/colors';

export function Topbar(props) {
    

    return (
       
            <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Avatar sx={{ bgcolor: deepOrange[500] }}>OP</Avatar>
            </Box>
       
    )
}
