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
        }
    },
    search(term){
        Spotify.getAccessToken();
        //fetch get
        let urlToSearch=`https://api.spotify.com/v1/search?q=${term}&type=album%2Cartist%2Ctrack&limit=10&offset=5'`;
        fetch(urlToSearch,{
            headers: {
            Authorization: `Bearer ${accessToken}`
          }}).then(response=>{
            if(response.ok){
                return response.json();
            }
            throw new Error('Search failed :(');
        }, networkError => alert(networkError.message)
    ).then(jsonResponse =>{
        alert(jsonResponse);
    });
    }

};

export default Spotify;
