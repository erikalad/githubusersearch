import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function PrincipalInformation(props){
    const {userState} = props
    console.log(userState);
  
    return(
        <Fragment>
            <Stack>
            <Typography>{userState.name}</Typography>
            <Typography>{userState.created_at}</Typography>
            </Stack>
            <Typography>{userState.login}</Typography>
        </Fragment>
    )
}