import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaperInformation(props){
    const { userState } = props
    return(
        <Paper elevation={3}> 
    <Stack>
        <Stack>
            <Typography>
                Repos
            </Typography>
            <Typography>
                {userState.public_repos}
            </Typography>
        </Stack>
        <Stack>
            <Typography>
                Followers
            </Typography>
            <Typography>
                {userState.followers}
            </Typography>
        </Stack>
        <Stack>
            <Typography>
               Following
            </Typography>
            <Typography>
                {userState.following}
            </Typography>
        </Stack>
    </Stack>
        </Paper>
    )
}