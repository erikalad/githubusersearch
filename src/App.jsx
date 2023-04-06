import React, { useEffect, useState } from "react";
import {Container } from '@mui/material'
import Searcher from "./componets/Searchbar";

import { gettingUsers } from './services/users'


const App = () => {
  const [userState, setUserState] = useState(inputUser)
  const [inputUser, setInputUser] = useState("octocat")
  const [notFound, setNotFound] = useState(false)


  const gettinUser= async (user)=>{
    const userResponse = await gettingUsers(user)
    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)
    }
    if(userResponse.message === "Not Found"){
      const { octocat } = localStorage;
      setInputUser(octocat)
      setNotFound(true);
    } else {
      setUserState(userResponse)
    }
  }

  console.log(userState)

  useEffect(()=>{
    gettinUser(inputUser)
  },[inputUser])

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