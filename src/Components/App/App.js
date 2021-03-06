import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                // { id:1, name: "a", artist: "b", album: "c" },
                // { name: "d", artist: "e", album: "f" }
            ],
            playlistName: '',
            playlistTracks: [
                // {id:1, name: "z", artist: "x", album: "y" },
                // {id:2, name: "r", artist: "s", album: "t" }
            ],

        };
        //42 ojo
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this); //50
        this.updatePlaylistName = this.updatePlaylistName.bind(this); //58
        this.savePlaylist = this.savePlaylist.bind(this); //64
        this.search = this.search.bind(this); //68
    }
    //67 create a method that updates the searchResult from Spotify API
    //88 Update the state of searchResults with the value resolved from Spotify.search()'s promise.


    search(term){
        console.log(term);
        // Spotify.getAccessToken();
        //const accessToken = Spotify.getAccessToken();
        console.log('the access token is:v2',Spotify.getAccessToken());
        //console.log('the access token is:v2 ', accessToken);
        Spotify.search(term).then(searchResults =>{
            this.setState({searchResults: searchResults});
        });
    }

    //63 Track property named "uri" Spotify uses this field to reference tracks in the Spotify library
    savePlaylist(){
        //TODO Generates an array of uri values called trackURIs from the playlistTracks property.In a later step, you will pass the trackURIs array and playlistName to a method that will save the user's playlist to their account.

    }

    //57 Updatinig the name of my playlists
    updatePlaylistName(newName){
        this.setState({ playlistName: newName });
        console.log('my new name ',newName);
        }

    //49
    removeTrack(track){
        let newTracks = this.state.playlistTracks.map(track => track);
        //console.log('newtracks' ,newTracks);
         if(this.state.playlistTracks.find(savedTrack =>
             savedTrack.id === track.id)){
                 newTracks.pop(track); //ojo
                 this.setState({ playlistTracks: newTracks });
        }
    }
    // 41  So we want to store the state of playlistTracks temporarily in another variable inside of the addTracks function : let newTracks = this.state.playlistTracks.map(track => track);
    addTrack(track){
        let newTracks = this.state.playlistTracks.map(track => track);
        //console.log('newtracks' ,newTracks);
         if(this.state.playlistTracks.find(savedTrack =>
             savedTrack.id === track.id)){
            return ;
             ////Check <a> + </a> from onClick in Track Component
             // savedTrack.id !== track.id)){
             // return console.log(track);
         }else{
             console.log('ID not found, adding track');
             newTracks.push(track);
             this.setState({ playlistTracks: newTracks });
         }
    }

    render() {
        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                     <SearchBar onSearch={this.search}/> {/*68 */}
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults} //32
                            onAdd={this.addTrack} //42
                        />
                        {/* Pass the tracks to the PlayList.js + <Tracklist */}
                        <Playlist
                            // playlistName={this.state.playlistName}
                            onNameChange={this.updatePlaylistName} //58bis
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
