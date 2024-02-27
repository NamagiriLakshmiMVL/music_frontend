import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Box, Button, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
export function SongDetails({ rows, audioElem, isplaying, setIsplaying, currentsong }) {
    const PlayPause = () => {
        setIsplaying(!isplaying)

    }
    const style = {
        display: "flex",
        justifyContent:"space-evenly",
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        height: "100px"
    };

    const style3 = {
        width: "0px",
        height: "100%",
        backgroundColor: "rgb(24, 128, 3)",
        borderRadius: "30px"

    }

    const style1 = {
        width: "40%"
    }

    const style2 = {
        minWidth: "40%",
        backgroundColor: "rgba(119, 119, 119, 0.781)",
        height: "5px",
        borderRadius: "30px",
        cursor: "pointer",
    }
    return (
        <>
            <TableContainer aria-label="simple table" >
                <Table sx={{ width: "70%", border: "1px solid white" }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Track</TableCell>
                            <TableCell align="right">buttons</TableCell>
                            <TableCell align="right">Song</TableCell>
                            <TableCell align="right">Artist</TableCell>
                            <TableCell align="right">Date Added</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((rows) => (
                            <TableRow
                                key={rows.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right" > <Box
                                    component="img"
                                    sx={{
                                        height: { xs: 60, md: 60 },
                                        width: { xs: 70, md: 70 },
                                    }}
                                    src={rows.img_src}
                                    alt={rows.title}
                                /></TableCell>
                                <TableCell align="right"><Button ><SkipPreviousIcon /></Button>
                                    {isplaying ? <Button onClick={PlayPause}><PauseIcon /></Button> :
                                        <Button><PlayArrowIcon onClick={PlayPause} /></Button>}
                                    <Button ><SkipNextIcon /></Button></TableCell>
                                <TableCell align="right">{rows.title}</TableCell>
                                <TableCell align="right">{rows.artist}</TableCell>
                                <TableCell align="right">{rows.updatedAt}</TableCell>
                               
                                    <Box sx={style}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: { xs: 60, md: 60 },
                                                width: { xs: 70, md: 70 },
                                            }}
                                            src={rows.img_src}
                                            alt={rows.title}>
                                        </Box>
                                        <Box>
                                            <Typography>{rows.title}</Typography>
                                            <Typography>{rows.artist}</Typography>
                                        </Box>
                                        <Box sx={style1}>
                                            <Box sx={style2} >
                                                 <Box sx={style3} style={{ "width": `${currentsong.progress + "%"}` }}></Box>
                                            </Box> 
                                        </Box>
                                        <Box>
                                            <Button ><SkipPreviousIcon /></Button>
                                            {isplaying ? <Button onClick={PlayPause}><PauseIcon /></Button> :
                                                <Button><PlayArrowIcon onClick={PlayPause} /></Button>}
                                            <Button ><SkipNextIcon /></Button>
                                        </Box>

                                    </Box>
                               



                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer>



        </>

    )
}
