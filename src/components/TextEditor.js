import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import UploadIcon from '@mui/icons-material/Upload';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import SourceIcon from '@mui/icons-material/Source';

export default function TextEditor(props){
    return (
        <div>
            <h1>Edit Main Content</h1>
            <Box sx={{backgroundColor:"#D9D9D9"}}>
                <h1>{props.topic}</h1>
                <br></br>
                <h2>Editable Section</h2>

                <Box sx={{backgroundColor:"#EBE6E6"}}>
                        <Button endIcon={<FormatBoldIcon/>} />
                        <Button endIcon={<FormatItalicIcon/>} />
                        <Button endIcon={<InsertLinkIcon/>}/>
                        <Button endIcon={<LinkOffIcon/>} />
                        <Button endIcon={<UploadIcon/>} />
                        <Button endIcon={<ImageIcon/>} />
                        <Button endIcon={<YouTubeIcon/>} />
                        <Button endIcon={<FormatListNumberedIcon/>} />
                        <Button endIcon={<FormatListBulletedIcon/>} />
                        <Button endIcon={<BackupTableIcon/>}/>
                        <Button startIcon={<SourceIcon/>}>Source</Button>
                </Box>
                <TextField varient="standard" multiline rows={25} sx={{width:"100%",backgroundColor:"white",fontWeight:"bold"}}/>

                
            </Box>
            
        </div>
    );
}