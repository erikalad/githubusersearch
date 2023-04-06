import React, { useEffect, useState } from "react";
import {Container } from '@mui/material'
import Searcher from "./components/SearchBar";

import { gettingUsers } from './services/users'
import UserCard from "./containers/userCard";


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
    <UserCard userState={userState}/>
    </Container>
  )
};

export default App;