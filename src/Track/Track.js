import React from 'react';

function Track(props){
    const button =()=>{
        if (props.action==='add'){
            return(
                <input type='button' value="+" />
            )
        }else{
            return (
                <input type='button' value="x" />
            )
        }
    };
    return(
        <div key={props.song.id}>
            <h3>Name: {props.song.name}</h3>
            <p>Artist: {props.song.artist} | Album: {props.song.album}</p>
            {button()}
        </div>
    )
}

export default Track;