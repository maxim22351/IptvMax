import React, {FC, useState} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// @ts-ignore
import { FixedSizeList,ListChildComponentProps  } from 'react-window';
import {ITV} from '../type/type'
import {Autocomplete, Avatar, ListItemAvatar,  TextField} from "@mui/material";
import { makeStyles } from '@mui/styles';


interface ListTVProps{
    list: ITV[];
}


const ListTv:FC<ListTVProps> = ({list}) => {
    const [filterArr,setFilterArr] = useState<ITV[]>(list);

    const [searchValue,setSearchValue] = useState<string>('');

    const search:ITV[] = filterArr.filter(item => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    const [listCount,setListCount] = useState<number>(0);



    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt={search[index].name} src={search[index].logo} style={{height: 'auto',borderRadius: '0'}}/>
                    </ListItemAvatar>
                    <ListItemText primary={search[index].name}/>
                </ListItemButton>
            </ListItem>
        );
    }


    function searchInput (e:React.MouseEvent<HTMLInputElement>){
        // @ts-ignore
        setSearchValue(e.target.value)
    }


    const useStyles = makeStyles({
        root: {
            "&::-webkit-scrollbar": {
                width: '10px',

            },
            "&::-webkit-scrollbar-track": {
                boxShadow: 'inset 0 0 5px #367bef',
                borderRadius: '10px'
            },
            "&::-webkit-scrollbar-thumb": {
                background: '#367bef',
                borderRadius: '10px'
            },

        },
    });

    // @ts-ignore
    const classes = useStyles();

    return (
        <div>
            <Box sx={{width: '100%', color: '#295aa8',backgroundColor: '#0D1117'}}>
                <Autocomplete
                    id="free-solo-demo"
                    // @ts-ignore
                    freeSolo
                    options={list.map((option) => option.groupTV)}
                    renderInput={(params) => <TextField
                        {...params} label="Категории"
                        sx = {{
                            '& label.Mui-focused': {
                                color: '#295aa8',
                                borderColor: '#367bef'
                            },
                            '& .MuiInput-underline:after': {
                                borderColor: '#367bef',
                                color: '#fff'
                            },
                            '& .MuiInputLabel-root':{
                                color: '#fff'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#295aa8',
                                    color: '#fff'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#295aa8',
                                    color: '#fff'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#295aa8',
                                    color: '#fff'
                                },
                            },
                            '& .MuiOutlinedInput-input':{
                                color: '#fff',
                                borderColor: '#295aa8'
                            }
                        }}

                    />}
                />
                <TextField
                    id="demo-helper-text-misaligned-no-helper"
                    label="Поиск"
                    onInput={searchInput}
                    style={{margin: '10px 0'}}
                    sx = {{
                        '& label.Mui-focused': {
                            color: '#295aa8',
                            borderColor: '#367bef'
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: '#295aa8',
                            color: '#fff'
                        },
                        '& .MuiInputLabel-root':{
                            color: '#fff'
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#295aa8',
                                color: '#fff'
                            },
                            '&:hover fieldset': {
                                borderColor: '#295aa8',
                                color: '#fff'
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#295aa8',
                                color: '#fff'
                            },
                        },
                        '& .MuiOutlinedInput-input':{
                            color: '#fff',
                            borderColor: '#295aa8'
                        }
                    }}

                />

            </Box>
            <Box
                sx={{ width: '100%', height: '100%', maxWidth: 360, backgroundColor: '#0D1117', color: '#295aa8'}}
            >
                <FixedSizeList
                    height={550}
                    width={360}
                    itemSize={46}
                    itemCount={(listCount === 0)? search.length : listCount}
                    overscanCount={5}
                    className={classes.root}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </div>
    );
};

export default ListTv;