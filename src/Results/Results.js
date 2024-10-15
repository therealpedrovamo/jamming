import React from "react";
import TrackList from "../Tracklist/Tracklist";

function Results(props){
    return(
        <>
            <h2>Results</h2>
            <TrackList songsArray={props.arrayOfResults} action='add'/>
        </>
    )
}

export default Results;
