//Spotify.js
////////////
const client_id = '52e3936023404280a694f64dfdabeef1'; // My client id
const redirect_uri = 'http://localhost:3000/'; // My redirect uri
let accessToken;
//just for test
//const token = 'https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123';
const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        if ((window.location.href.match(/access_token=([^&]*)/)) && (window.location.href.match(/expires_in=([^&]*)/))) {
            const accessTokenTmp = window.location.href.match(/access_token=([^&]*)/);
            const expiresInTmp = window.location.href.match(/expires_in=([^&]*)/);
            //Access Token
            let accessToken = accessTokenTmp[1];
            //Expires
            let expiresIn = Number(expiresInTmp[1]);
            //Test
            console.log('the access token is: ', accessToken);
            console.log('expires in: ', expiresIn, ' seg.');

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');;
            return (accessToken, expiresIn);
        } else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            window.location = redirect;
        }
    }
};
//test the module
//Spotify.getAccessToken();
export default Spotify
