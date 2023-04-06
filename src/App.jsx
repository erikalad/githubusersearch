import React, { useEffect, useState } from "react";
import {Container } from '@mui/material'
import Searcher from "./componets/Searchbar";

import { gettingUsers } from './services/users'


const App = () => {
  const [userStater, userState] = useState("octocat")
  const [inputUser, setInputUser] = useState(userStater)
 
  const gettinUser= async (user)=>{
    const userResponse = await gettingUsers(user)
    console.log(userResponse)
  }

  useEffect(()=>{
    gettinUser(inputUser)
  },[])

  return(
    <Container sx={{
      background:"whitesmoke",
      width:"80vh",
      height:"500px",
      borderRadius:"16px",
      marginTop:"40px",
      display:"flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
    <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
    </Container>
  )
};

export default App;