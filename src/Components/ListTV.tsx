import React, {FC, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// @ts-ignore
import { FixedSizeList,ListChildComponentProps  } from 'react-window';
import {IListTV} from '../type/type'
import {Autocomplete, Avatar, colors, ListItemAvatar, styled, TextField} from "@mui/material";


interface ListTVProps{
    list: IListTV[];
}


const ListTv:FC<ListTVProps> = ({list}) => {
    const [filterArr,setFilterArr] = useState<IListTV[]>(list);

    const [searchValue,setSearchValue] = useState<string>('');


    const search:IListTV[] = filterArr.filter(item => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    const [groupTV,setGroupTV] = useState<string[]>([]);
    // const [activeFilter,setActiveFilter] = useState<string | undefined>(undefined);
    const [listCount,setListCount] = useState<number>(0);

    // Categories
    const [musicTV,setMusicTV] = useState<IListTV[]>([]);
    const [commonTV,setCommonTV] = useState<IListTV[]>([]);
    const [infoTV,setInfoTV] = useState<IListTV[]>([]);
    const [kidsTV,setKidsTV] = useState<IListTV[]>([]);
    const [cognitiveTV,setCognitiveTV] = useState<IListTV[]>([]);
    const [cinemaTV,setCinemaTV] = useState<IListTV[]>([]);
    const [entertainingTV,setEntertainingTV] = useState<IListTV[]>([]);
    const [religiousTV,setReligiousTV] = useState<IListTV[]>([]);
    const [sportsTV,setSportsTV] = useState<IListTV[]>([]);
    const [fashionTV,setFashionTV] = useState<IListTV[]>([]);
    const [adultTV,setAdultTV] = useState<IListTV[]>([]);
    const [shopTV,setShopTV] = useState<IListTV[]>([]);




    useEffect(() => {
        list.map(item =>{
            groupTV.push(item.group.title)
            setGroupTV([...groupTV,item.group.title])

            switch (item.group.title) {
                case 'Музичні':
                    musicTV.push(item)
                    setMusicTV([...musicTV,item])
                    break;
                case 'Загальні':
                    commonTV.push(item)
                    setCommonTV([...commonTV,item])
                    break;
                case 'Інформаційні':
                    infoTV.push(item)
                    setInfoTV([...infoTV,item])
                    break;
                case 'Дитячі':
                    kidsTV.push(item)
                    setKidsTV([...kidsTV,item])
                    break;
                case 'Пізнавальні':
                    cognitiveTV.push(item)
                    setCognitiveTV([...cognitiveTV,item])
                    break;
                case 'Кіно':
                    cinemaTV.push(item)
                    setCinemaTV([...cinemaTV,item])
                    break;
                case 'Розважальні':
                    entertainingTV.push(item)
                    setEntertainingTV([...entertainingTV,item])
                    break;
                case 'Релігійні':
                    religiousTV.push(item)
                    setReligiousTV([...religiousTV,item])
                    break;
                case 'Спортивні':
                    sportsTV.push(item)
                    setSportsTV([...sportsTV,item])
                    break;
                case 'Про моду':
                    fashionTV.push(item)
                    setFashionTV([...fashionTV,item])
                    break;
                case 'Для дорослих':
                    adultTV.push(item)
                    setAdultTV([...adultTV,item])
                    break;
                case 'Телемагазинні':
                    shopTV.push(item)
                    setShopTV([...shopTV,item])
                    break;
            }
        })
    },[])



    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        return (
            // (activeFilter !== undefined)?
            //         (
            //             (search[index].group.title === activeFilter)?
            //                 (
            //                     <ListItem style={style} key={index} component="div" disablePadding>
            //                         <ListItemButton>
            //                             <ListItemText primary={search[index].name}/>
            //                         </ListItemButton>
            //                     </ListItem>
            //                 )
            //                 :false
            //
            //         )
            //     :
            //         (
            //             <ListItem style={style} key={index} component="div" disablePadding>
            //                 <ListItemButton>
            //                     <ListItemText primary={search[index].name}/>
            //                 </ListItemButton>
            //             </ListItem>
            //         )
            //

            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt={search[index].name} src={search[index].tvg.logo} style={{height: 'auto',borderRadius: '0'}}/>
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

    function filterСategor (e:React.MouseEvent<HTMLInputElement>){
        // let count:number = 0;
        // @ts-ignore
        // if (e.target?.textContent.length > 0) setActiveFilter(e.target?.textContent);
        // else setActiveFilter(undefined)

        // @ts-ignore
        // if (e.target?.textContent === 'Музичні'){
        //     setFilterArr(musicTV)
        // }

        switch (e.target?.textContent) {
            case 'Музичні':
                setFilterArr(musicTV)
                break;
            case 'Загальні':
                setFilterArr(commonTV)
                break;
            case 'Інформаційні':
                setFilterArr(infoTV)
                break;
            case 'Дитячі':
                setFilterArr(kidsTV)
                break;
            case 'Пізнавальні':
                setFilterArr(cognitiveTV)
                break;
            case 'Кіно':
                setFilterArr(cinemaTV)
                break;
            case 'Розважальні':
                setFilterArr(entertainingTV)
                break;
            case 'Релігійні':
                setFilterArr(religiousTV)
                break;
            case 'Спортивні':
                setFilterArr(sportsTV)
                break;
            case 'Про моду':
                setFilterArr(fashionTV)
                break;
            case 'Для дорослих':
                setFilterArr(adultTV)
                break;
            case 'Телемагазинні':
                setFilterArr(shopTV)
                break;
            default:
                setFilterArr(list)
                break;
        }
    }

    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    });


    return (
        <div>
            <Box sx={{width: '100%', color: '#295aa8',backgroundColor: '#0D1117'}}>
                <Autocomplete
                    id="free-solo-demo"
                    // @ts-ignore
                    onChange={filterСategor}
                    freeSolo
                    options={[...new Set(groupTV)].map((option) => option)}
                    renderInput={(params) => <TextField {...params} label="Категории"/>}
                />
                <TextField
                    id="demo-helper-text-misaligned-no-helper"
                    label="Поиск"
                    onInput={searchInput}
                    style={{margin: '10px 0'}}
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
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </div>
    );
};

export default ListTv;