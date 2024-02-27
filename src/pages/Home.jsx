import React from 'react'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'
import { Box } from '@mui/material'
import { DisplayArea } from './DisplayArea'

export function Home() {


    return (
        <Box sx={{ display: "flex"}}>
            <Sidebar />
            <Topbar/>
            <DisplayArea />
        </Box>

    )
}
