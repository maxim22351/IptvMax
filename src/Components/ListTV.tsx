import React, {FC, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// @ts-ignore
import { FixedSizeList,ListChildComponentProps  } from 'react-window';
import {IListTV} from '../type/type'
import {TextField} from "@mui/material";


interface ListTVProps{
    list: IListTV[];
}


const ListTv:FC<ListTVProps> = ({list}) => {


    const [groupTV,setGroupTV] = useState<string[]>([]);
    const [searchValue,setSearchValue] = useState<string>('');

    const search:IListTV[] = list.filter(item => {
        return item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    })



    useEffect(()=>{
        list.map(item =>{
            groupTV.push(item.group.title)
            setGroupTV([...groupTV,item.group.title])
        })
    },[])



    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;


        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={search[index].name}/>
                </ListItemButton>
            </ListItem>
        );
    }


    function searchInput (e:React.MouseEvent<HTMLInputElement>){
        // @ts-ignore
        setSearchValue(e.target.value)

    }



    return (
        <div>
            <Box sx={{width: '100%'}}>
                <TextField id="demo-helper-text-misaligned-no-helper" label="Поиск" onInput={searchInput}/>
            </Box>
            <Box
                sx={{ width: '100%', height: 400, maxWidth: 360, backgroundColor: 'background.paper'}}
            >
                <FixedSizeList
                    height={400}
                    width={360}
                    itemSize={46}
                    itemCount={search.length}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </div>
    );
};

export default ListTv;