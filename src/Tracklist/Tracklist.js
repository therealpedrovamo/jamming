import React from 'react';
import Track from '../Track/Track';

function TrackList(props){
    return(
        <>
            {
                props.songsArray.map((song)=>{
                    return(
                        <Track song={song} action={props.action}/>
                    )
                })
            }
        </>
    )
}

export default TrackList;