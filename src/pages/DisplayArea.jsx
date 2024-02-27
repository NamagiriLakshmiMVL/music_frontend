import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box } from '@mui/material';


export function DisplayArea(props) {
    const [play, setPlay] = React.useState(false)

    return (
        <div>
            <Button onMouseOver={()=>setPlay(!play)} >
                <Card sx={{ maxWidth: 200, height: 300 }}>
                    <Box
                        component="img"
                        sx={{
                            height: { xs: 50, md: 120 },
                            width: { xs: 50, md: 120 },


                        }}
                        src="https://files.prokerala.com/news/photos/imgs/1024/singer-sid-sriram-on-what-he-likes-to-do-best-1391732.jpg"
                        alt='SoundBox'
                    />

                    <Typography gutterBottom variant="h5" component="div">
                        Hits of Sid Sriram
                    </Typography>
                    <Button size="small"> <Fab color="primary" aria-label="add">
                        <PlayArrowIcon fontSize='large' />
                    </Fab></Button>
                    {/* {play == true && <Button size="small"> <Fab color="primary" aria-label="add">
                        <PlayArrowIcon fontSize='large' />
                    </Fab></Button>} */}

                </Card>
            </Button>

        </div>
    )
}
