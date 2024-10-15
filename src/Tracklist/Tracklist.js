import React from 'react';
import Track from '../Track/Track.js';

function TrackList(props){
    return(
        <>
            {
                props.songsArray.map((song)=>{
                    return(
                        <Track song={song} action={props.action} onAdd={props.onAdd} onRemove={props.onRemove}/>
                    )
                })
            }
        </>
    )
}

export default TrackList;