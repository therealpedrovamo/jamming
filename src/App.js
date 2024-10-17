import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import Results from './Results/Results.js';
import NewPlaylist from './NewPlaylist/NewPlaylist.js';
import Spotify from './util/Spotify.js';

//The App. Here we render the relevant HTML. This is the root.
function App() {
  //1. We need to check how to pass data from the root component to the child components. Check if the playlists are shown.
    /*let tracks=[
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

  const [searchResults,setSearchResults]=useState([]);
  const [playlistSongs,setPlaylistSongs]=useState([]);
  const [playlistName,setPlaylistName]=useState("");
  const[searchedTerm,setSearchedTerm]=useState("");

  //Add
  function onAdd(song){
    if((playlistSongs.some((addedSong)=> addedSong.id===song.id))===false){
      setPlaylistSongs((prev)=>[...prev,song]);
    }
  };

  //Remove
  function onRemove(song){
    setPlaylistSongs((prev)=>prev.splice(prev.indexOf(song),1));
  }

  //Save
  function onSave(){
    const uris=playlistSongs.map((song)=>song.uri);
    setPlaylistName("");
    setPlaylistSongs([]);
    Spotify.save(playlistName,uris);
  };

  //Playlist name
  function onChangePlaylistName(e){
    setPlaylistName(e.target.value);
  };

  //Search
  function onSearch(){
    Spotify.search(searchedTerm).then(setSearchResults);
  };

  //OnChangeSearchedTerm
  function onChangeSearchedTerm(e){
    setSearchedTerm(e.target.value);
  };

  useEffect(()=>{
    Spotify.handleRedirect();
  },[]);

  //0. Check how everything is being rendered.
  return (
    <>
      <h1>Jammming</h1>
      < SearchBar onSearch={onSearch} onChange={onChangeSearchedTerm} searchedTerm={searchedTerm}/>
      < Results arrayOfResults={searchResults} onAdd={onAdd}/>
      < NewPlaylist playlistSongs={playlistSongs} onSave={onSave} playlistName={playlistName} onChange={onChangePlaylistName} onRemove={onRemove}/>
    </>
  );
};

export default App;
