import React from "react";
import TrackList from "../Tracklist/Tracklist";

function NewPlaylist(props){
    return(
        <>
            <input type='text' placeholder='New playlist' value={props.playlistName} onChange={props.onChange}/>
            <TrackList songsArray={props.playlistSongs} action='remove'/>
            <input type='button' value='Save' onClick={props.onSave}/>
        </>
    )
}

export default NewPlaylist;