let accessToken;
//Define query parameters.
const clientId='14a5671eaade4e649188355fd371b436';
const redirectUri='http://localhost:3000/';
const responseType='token';
const scope='playlist-modify-public';

const Spotify={
    getAccessToken(){
        //For Implicit Grant Flow we need the client id, response-type and redirect_uri.
        let url=`https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;
        //Open the url
        window.open(url,"_self");
    },
    handleRedirect(){
        if(!accessToken && window.location.href.includes('access_token=')){
            accessToken=window.location.href.match(/access_token=([^&]*)/)[1];
        }else if(!accessToken && !window.location.href.includes('access_token')){
            Spotify.getAccessToken();
        }
    },
    search(term){
        let urlToSearch=`https://api.spotify.com/v1/search?q=${term}&type=track&limit=5&offset=5`;
        //fetch uses return to get the result of the promise
        return fetch(urlToSearch, { //sends request
            //We use the headers as stated in the Spotify API documentation
            headers: {
            Authorization: `Bearer ${accessToken}`
          }}).then(response=>{
            //Converts response to JSON or JS Object Notation
            if(response.ok){
                return response.json();
            }
            //Handles error
            throw new Error ('Search failed');
            }, networkError => console.log(networkError.message)
            //Handle success
        ).then(jsonResponse =>{
            if (!jsonResponse.tracks) {
                return [];
              }
              //It returns a new array of an object composed by id, name, artist, album and uri. 
            return jsonResponse.tracks.items.map(track => ({ //In tracks, item is an array of tracks objects, that why we use the .map here
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
              }));
        })
    }

};

export default Spotify;
