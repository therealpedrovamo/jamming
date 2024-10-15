import React from 'react';

function Track(props){
    //Necessary to make it work
    function addTrack(){
        props.onAdd(props.song);
    };

    function removeTrack(){
        props.onRemove(props.song);
    };

    const button =()=>{
        if (props.action==='add'){
            return(
                <input type='button' value="+" onClick={addTrack}/>
            )
        }else{
            return (
                <input type='button' value="x" onClick={removeTrack}/>
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