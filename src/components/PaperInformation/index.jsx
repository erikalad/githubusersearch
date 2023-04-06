import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaperInformation(props){
    const { userState } = props
    return(
        <Paper elevation={3}> 
    <Stack 
    spacing={3} 
    direction="row"
    sx={{justifyContent:"space-evenly", margin:"20px"}}
    >
        <Stack>
            <Typography variant="h5">
                Repos
            </Typography>
            <Typography variant="h6">
                {userState.public_repos}
            </Typography>
        </Stack>
        <Stack>
            <Typography variant="h5">
                Followers
            </Typography>
            <Typography variant="h6">
                {userState.followers}
            </Typography>
        </Stack>
        <Stack>
            <Typography variant="h5">
               Following
            </Typography>
            <Typography variant="h6">
                {userState.following}
            </Typography>
        </Stack>
    </Stack>
        </Paper>
    )
}