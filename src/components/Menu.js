import React from "react";
import { Button, List, ListItem} from "@mui/material";
import { Box } from "@mui/system";
import SaveIcon from '@mui/icons-material/Save';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SendIcon from '@mui/icons-material/Send';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

export default function Menu(){
    return (
        <div>
            <Box xs={3} sx={{backgroundColor:"#B5AEAE"}}>
            <List>
                <ListItem>
                    <Button variant="outlined" endIcon={<SaveIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>Save</Button>
                </ListItem>

                <ListItem>
                    <Button variant="outlined" endIcon={<LockOpenIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>Unlock</Button>
                </ListItem>

                <ListItem>
                    <Button variant="outlined" endIcon={<SendIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>Publish</Button>
                </ListItem>

                <ListItem>
                    <Button variant="outlined" endIcon={<SettingsIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>Setting</Button>
                </ListItem>

                <ListItem>
                    <Button variant="outlined" endIcon={<PageviewIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>View Page</Button>
                </ListItem>

                <ListItem>
                    <Button variant="outlined" endIcon={<ArrowBackIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>Go Back</Button>
                </ListItem>

                <ListItem>
                    <Button variant="outlined" endIcon={<EditIcon/>} sx={{color:"black",backgroundColor:"#E4DCDC",width:"250px"}}>Edit People Cards</Button>
                </ListItem>
            </List>
            </Box>
        </div>
    );
}