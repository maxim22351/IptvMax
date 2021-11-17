import React, {FC, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// @ts-ignore
import { FixedSizeList } from 'react-window';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import {IListTV} from '../type/type'


interface ListTVProps{
    list: IListTV[];
}


const ListTv:FC<ListTVProps> = ({list}) => {


    const [groupTV,setGroupTV] = useState<string[]>([]);

    useEffect(()=>{
        list.map(item =>{
            groupTV.push(item.group.title)
            setGroupTV([...groupTV,item.group.title])
        })
    },[])


    function renderRow(props: { index: number; style: any; }) {
        const { index, style } = props;


        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={list[index].name} data-url={list[index].url}/>
                </ListItemButton>
            </ListItem>
        );
    }

    function TabPanel(props: any) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index:number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    };



    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {
                            [...new Set(groupTV)].map((item,index) => (
                                <Tab label={item} {...a11yProps(index)} key={index * 5 + item}/>
                            ))
                        }
                    </Tabs>
                </Box>
                {
                    [...new Set(groupTV)].map((item,index) => (
                        <TabPanel value={value} index={index} key={index * 5 + item}>
                            {item}
                            <Box
                                sx={{ width: '100%', height: 400, maxWidth: 360, backgroundColor: 'background.paper' }}
                            >
                                <FixedSizeList
                                    height={400}
                                    width={360}
                                    itemSize={46}
                                    itemCount={list.length}
                                    overscanCount={5}
                                >
                                    {renderRow}
                                </FixedSizeList>
                            </Box>
                        </TabPanel>
                    ))
                }
            </Box>

        </div>
    );
};

export default ListTv;