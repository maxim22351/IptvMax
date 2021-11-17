import React, {FC} from 'react';
import ReactPlayer from "react-player";
import {IListTV} from '../type/type'

interface PlayerProps{
    nameTV: string,
    list: IListTV[];
};

interface urlObjTS {
    item: string
}


const Player:FC<PlayerProps> = ({nameTV,list}) => {

    const urlObj = list.reduce((accum, item) => {
        accum[item['name']] = item;
        return accum;
    }, {});



    return (
        (nameTV.length > 0)?
                (<ReactPlayer url={urlObj[nameTV].url} playing={true} controls={true}/>)
            :
                (<h1>Выберите канал для просмотра</h1>)
    );
};

export default Player;