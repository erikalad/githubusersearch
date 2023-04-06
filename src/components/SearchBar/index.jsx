import { IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './../../App.css'

export default function Searcher(props){
    const{setInputUser,mode} = props
    console.log(mode)

    const [valueInput, setvalueInput]  = useState("")

     const handleSubmit = () =>{
    setInputUser(valueInput)
    
    } 

    const onSearchValueChange = (event) =>{
      let inputValue = event.target.value
      setvalueInput(inputValue) 
    
    }

   
   

    return(
        
        <Stack
        direction= "row" 
        sx={{
            marginTop:"30px",
            width:"80%"
        }}>
            {mode ?   
            <TextField
            id="outlined-basic" 
            label="Github User" 
            variant="outlined"
            placeholder="Octocat"
            size="small"
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
                width:"90%",
                color:"white"
            }}
            />
            :
            <>
            <TextField
            className="texto"
            id="outlined-basic" 
            label="Github User" 
            variant="outlined"
            placeholder="Octocat"
            size="small"
           
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
                width:"90%",
                color:"white"
            }}
            />
            <IconButton
            onClick={handleSubmit} 
            size="small"
             sx={{
             left:"-45px",
 
             }}>
             <SearchIcon/>
             </IconButton>
            
            </>
            }
          
        
        </Stack>
       
    )
}