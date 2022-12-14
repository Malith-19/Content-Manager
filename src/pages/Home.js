import React from 'react'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Slide from '../components/Slide';
import { Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Stack } from "@mui/system";
import TextEditor from '../components/TextEditor';



export default function Homepage(props){
  const isSlides = props.isSlides;

  if(isSlides){
    return(
      <div>
        <Header username="user"/>
        <Grid container>

          <Grid xs={3}>
            <Menu/>
          </Grid>

          <Grid xs={9}>
            <Stack sx={{paddingLeft:"5%"}}>
                <TextEditor topic="Education"/>
            </Stack>
            
          </Grid>
        </Grid>

        <Footer/>
    </div>
    );
  }else{
    return(
      <div>
        <Header username="user"/>
        <Grid container>

          <Grid xs={3}>
            <Menu/>
          </Grid>

          <Grid xs={9}>
            <Stack sx={{paddingLeft:"5%"}}>
                <h1>Home Slides</h1>
                <p><Checkbox sx={{padding:"0%"}}/> Randomized starting slides</p>
                <Slide/>

            </Stack>
            
          </Grid>
        </Grid>

        <Footer/>
    </div>
    );
  }
}


