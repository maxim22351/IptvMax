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
                (<ReactPlayer url={urlObj[nameTV].catchup.source} playing={true} controls={true} width={'100%'} height={'50%'} />)
            :
                (
                    <h1 style={{textAlign: 'center'}}> 👈 Выберите канал для просмотра</h1>

                    // <ReactPlayer
                    //     url='http://chopin.af-stream.com/1nezalegny-ua/video.m3u8?token=5rcfyyx5'
                    //     playing={true}
                    //     controls={true}
                    //     width={'100%'}
                    //     height={'50%'}
                    // />
                )
    );
};

export default Player;