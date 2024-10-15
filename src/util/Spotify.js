const clientId='14a5671eaade4e649188355fd371b436';
const redirectUri='http://localhost:3000/';
const responseType='token';
const scope='playlist-modify-public';
let accessToken;

const Spotify={
    getAccessToken(){
        //Copy and paste from Spotify's documentation
        if(accessToken){
            return accessToken;
        }else{
            let url = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`;
            accessToken=window.location.href.match(/access_token=([^&]*)/)[1];
            return accessToken;
        }
    },

    search(term){
        const accessToken=Spotify.getAccessToken();
        let urlToFetch=`https://api.spotify.com/v1/search?q=${term}&type=album%2Cartist%2Ctrack&limit=5`;
        
    }

};

export default Spotify;
