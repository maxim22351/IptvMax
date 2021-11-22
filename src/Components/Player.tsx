import React, {FC} from 'react';
import ReactPlayer from "react-player";
import {IListTV} from '../type/type'

interface PlayerProps{
    nameTV: string | null,
    list: IListTV[];
}


const Player:FC<PlayerProps> = ({nameTV,list}) => {

    const urlObj = list.reduce((accum:Record<string, IListTV>, item) => {
        accum[item['name']] = item;
        return accum;
    }, {});


    return (
        (nameTV)?
                (<ReactPlayer url={urlObj[nameTV].url} playing={true} controls={true} width='100%' />)
            :
                (
                    <h1>Выберите канал для просмотра</h1>
                )
    );
};

export default Player;