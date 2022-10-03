import { Box } from '@mui/material';
import { Stack } from "@mui/system";
import React from "react";
import TextField from '@mui/material/TextField';
import UploadIcon from '@mui/icons-material/Upload';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';


export default function Slide(){
    return(
        <div>
            <Box sx={{backgroundColor:"#D9D9D9"}}>
                <Stack sx={{paddingLeft:"2%"}}>
                    <h2>Slide 1</h2>

                    <p>Image*</p>
                    <Box sx={{backgroundColor:"white",}}>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                                <Button><UploadIcon/></Button>
                                <Button><ImageIcon/></Button>
                                
                            </Box>
                        <TextField varient="standard" sx={{width:"100%"}}/>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                            <br></br>
                            <br/>
                        </Box>
                    </Box>
                    
                    <p>Image Alternative Text*</p>
                    <Box sx={{backgroundColor:"white",}}>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                                <br></br>
                                <br/>
                            </Box>
                        <TextField varient="standard" sx={{width:"100%"}}/>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                            <br></br>
                            <br/>
                        </Box>
                    </Box>

                    <p>Title*</p>
                    <Box sx={{backgroundColor:"white",}}>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                                <br></br>
                                <br/>
                            </Box>
                        <TextField varient="standard" sx={{width:"100%"}}/>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                            <br></br>
                            <br/>
                        </Box>
                    </Box>

                    <p>Title Link</p>
                    <Box sx={{backgroundColor:"white",}}>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                                <br></br>
                                <br/>
                            </Box>
                        <TextField varient="standard" sx={{width:"100%"}}/>
                        <Box sx={{backgroundColor:"#EBE6E6"}}>
                            <br></br>
                            <br/>
                        </Box>
                    </Box>
                    

                </Stack>
            </Box>
        </div>
    );
}