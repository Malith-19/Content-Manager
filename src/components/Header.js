import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';




export default function Header(props){
    return (
        <div>
            <Box sx={{
                backgroundColor:"#D9D9D9"
            }}>
            <Grid container>
                <Grid xs={3} sx={{backgroundColor:"#F03838",color:"white",textAlign:"center"}}>
                    <h1>Dashboard</h1>
                </Grid>

                <Grid xs={7} sx={{textAlign:"right"}}>
                    <h1>Welcome, {props.username}</h1>
                </Grid>

                <Grid xs={2} sx={{paddingLeft:"30px"}}>
                    <Button sx={{align:"right",}} variant="contained">Logout</Button>
                </Grid>
            </Grid>
            </Box>

            
        </div>
    );
}