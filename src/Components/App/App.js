import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                { id:1, name: "a", artist: "b", album: "c" },
                { name: "d", artist: "e", album: "f" }
            ],
            playlistName: 'Tralara',
            playlistTracks: [
                {id:1, name: "z", artist: "x", album: "y" },
                {id:2, name: "r", artist: "s", album: "t" }
            ],

        };
        //42 ojo
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this); //50
        this.updatePlaylistName = this.updatePlaylistName.bind(this); //58
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
             console.log('ID not found, adding...');
             newTracks.push(track);
             this.setState({ playlistTracks: newTracks });
         }
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
    //57 Updatinig the name of my playlists
    updatePlaylistName(newName){
        this.setState({ playlistName: newName });
        console.log('my new name ',newName);
    }

    render() {
        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        {/* 32 */}
                        <SearchResults
                            searchResults={this.state.searchResults}
                            onAdd={this.addTrack} //42
                        />
                        {/* Pass the tracks to the PlayList.js + <Tracklist */}
                        <Playlist
                            // playlistName={this.state.playlistName}
                            onNameChange={this.updatePlaylistName} //58bis
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
