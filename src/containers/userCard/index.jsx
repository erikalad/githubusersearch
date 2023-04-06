import { CardMedia, Grid } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";

export default function UserCard(props){
const { userState } = props
console.log(userState)
    return(
        <Grid
       container
        >
            {userState !== undefined &&
            <>
            <Grid item xs={3}>
            <CardMedia 
            component="img"
            image={userState.avatar_url}
            alt="Github User"
            />
            </Grid>
            <Grid item xs={9}>
                <PrincipalInformation userState={userState}/>
            </Grid>
            </>
            }
        
        </Grid>
    )
}