import React, {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';
import NewPlaylist from './NewPlaylist/NewPlaylist';

//The App. Here we render the relevant HTML. This is the root.
function App() {
  //1. We need to check how to pass data from the root component to the child components. Check if the playlists are shown.
  let tracks=[
    {
      name: 'The Spins',
      artist: 'Mac Miller, Empire of The Sun',
      album: 'K.I.D.S',
      id: 1,
      uri: 'sfas'
    },
    {
      name: 'Sit Next to Me',
      artist: 'Foster The People',
      album: 'Sacred Hearts Club',
      id: 2,
      uri: 'sdasd'
    },
    {
      name: 'Around The World',
      artist: 'Daft Punk',
      album: 'Homework',
      id: 3,
      uri: 'sgfs'
    },
    {
      name: 'One More Time',
      artist: 'Daft Punk',
      album: 'Discovery',
      id: 4,
      uri: 'faefa'
    },
    {
      name: 'Digital Love',
      artist: 'Daft Punk',
      album: 'Discovery',
      id: 5,
      uri: 'popop'
    }
  ];
  /*
  let playlistSongos=[
    {
      name: 'Around The World',
      artist: 'Daft Punk',
      album: 'Homework',
      id: 3,
      uri: 'sgfs'
    },
    {
      name: 'One More Time',
      artist: 'Daft Punk',
      album: 'Discovery',
      id: 4,
      uri: 'faefa'
    },
    {
      name: 'Digital Love',
      artist: 'Daft Punk',
      album: 'Discovery',
      id: 5,
      uri: 'popop'
    }

  ];*/

  const [searchResults,setSearchResults]=useState(tracks);
  const [playlistSongs,setPlaylistSongs]=useState(playlistSongos);
  const [playlistName,setPlaylistName]=useState("");

  //Add
  function onAdd(){
    
  }

  //Save
  function onSave(){
    const uris=playlistSongos.map((song)=>song.uri);
    setPlaylistName("");
    setPlaylistSongs([]);
    alert(uris);
  }

  //Playlist name
  function onChangePlaylistName(e){
    setPlaylistName(e.target.value);
  }

  //0. Check how everything is being rendered.
  return (
    <>
      <h1>Jammming</h1>
      < SearchBar />
      < Results arrayOfResults={searchResults}/>
      < NewPlaylist playlistSongs={playlistSongs} onSave={onSave} playlistName={playlistName} onChange={onChangePlaylistName}/>
    </>
  );
}

export default App;
