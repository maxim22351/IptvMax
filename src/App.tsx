import React, {FC, useEffect, useState} from 'react';

import {Grid} from "@mui/material";

import ListTV from "./Components/ListTV";
import Player from "./Components/Player";

import axios from "axios";
import {IItems, IListTV} from "./type/type";

import {items} from './ListIPTV.json'


const App:FC = () => {


    const [nameTV,setNameTV]= useState<string | null>('');
    const [listTV,setListTV] = useState<IListTV[]>([]);



    useEffect(()=>{
        // getListTV();
        setListTV(items);


    },[])

    async function getListTV() {
        try {
            const response = await axios.get<IItems>('https://m-furman.online/');
            // @ts-ignore
            await setListTV(response.data.items)

        } catch (error) {
            console.error(error);
        }
    }

    console.log(listTV)


    function checkName (e:React.MouseEvent<HTMLSpanElement>){
        // @ts-ignore
        if (e.target.classList.contains('MuiListItemText-primary')){
            // @ts-ignore
            setNameTV(e.target.textContent)
        }

    }







    // if (listTV.length < 0) return <ReactLoading color={'purple'} width={'30%'} type={'balls'} />;

    return (
        <Grid container spacing={5}>
            <Grid item xs={12} md={3} onClick={checkName}>
                {(listTV.length > 0)? <ListTV list = {listTV}/> : false}
            </Grid>
            <Grid item xs={12} md={9}>
                <div style={{'margin': '5% 0 0 0'}}>
                    <Player nameTV={nameTV} list={listTV}/>
                </div>
            </Grid>

        </Grid>
    );
};


export default App;