//Spotify.js
////////////
const client_id = '52e3936023404280a694f64dfdabeef1'; // My client id
const redirect_uri = 'http://localhost:3000/'; // My redirect uri
//just for test
// const token = 'https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123';

const Spotify = {
    getAccessToken(){
        const token = 'https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123';
        // TODO: Check if the user's access token is already set. If it is, return the value saved to access token.

        if((token.match(/access_token=([^&]*)/)) && (token.match(/expires_in=([^&]*)/)) ){
            //console.log(accessToken.toString());
            const accessTokenTmp = token.match(/access_token=([^&]*)/);
            const expiresInTmp = token.match(/expires_in=([^&]*)/);
            const accessToken = accessTokenTmp[1].toString();
            const expiresIn = parseInt(expiresInTmp[1].toString());
            console.log('the access token is: ',accessToken);
            console.log('expres in: ',expiresIn);
            //const expiresIn = ;
            return (accessToken, expiresIn) ;
        }else {
            console.log('no hay token');
        }
    }
};
//Spotify.getAccessToken(token);
export default Spotify




// // if(token == ' '){
// //     return console.log('no hay token ', token);
// // }else {
//     fetch(`https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=52e3936023404280a694f64dfdabeef1&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email&response_type=token&state=123`).then(response => {
//             if (response.ok) {
//             return response;
//                 //console.log(window.location.href);
//             }
//             throw new Error('Request failed!');
//         }, networkError => {
//       console.log(networkError.message);
//   }).then(response => console.log('Request OK ',response));
// //}
// }



// // if(token == ' '){
// //     return console.log('no hay token ', token);
// // }else {
//     fetch("https://accounts.spotify.com/authorize?client_id=52e3936023404280a694f64dfdabeef1&redirect_uri=http:%2F%2Flocalhost:3000/%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123").then(response => {
//         if (response.ok) {
//        return response.json();
//       }
//       throw new Error('Request failed!');
//     }, networkError => {
//       console.log(networkError.message);
//   }).then(jsonResponse => console.log(jsonResponse));
// //}
