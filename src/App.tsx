import React, {FC, useState} from 'react';
import {items} from './ListIPTV.json'
import {Grid} from "@mui/material";

import ListTV from "./Components/ListTV";
import Player from "./Components/Player";

import axios from "axios";

const App:FC = () => {
    const [nameTV,setNameTV]= useState<string | null>('');


    function checkName (e:React.MouseEvent<HTMLSpanElement>){
        // @ts-ignore
        if (e.target.classList.contains('MuiListItemText-primary')){
            // @ts-ignore
            setNameTV(e.target.textContent)
        }

    }


    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={6} onClick={checkName}>
                <ListTV list = {items}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <div style={{'margin': '10% 0 0 0'}}>
                    <Player nameTV={nameTV} list={items}/>
                </div>
            </Grid>
        </Grid>
    );
};


export default App;