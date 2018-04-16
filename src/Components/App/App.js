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
                {id:1, name: "z", artist: "x", album: "y" }
            ]
        };
        //42 ojo
        this.addTrack = this.addTrack.bind(this);
    }
    // 41 si el id ya existe no hagas nada
    addTrack(track){
         if(this.state.playlistTracks.find(savedTrack =>
             savedTrack.id === track.id)){
            return console.log('Yep: ' + track);
             ////Check <a> + </a> from onClick in Track Component
             // savedTrack.id !== track.id)){
             // return console.log(track);
         }else{
             return console.log('Nop: ' + track);
         }
    }

    removeTrack(track){

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
                            playlistName={this.state.playlistName}
                            playlistTracks={this.state.playlistTracks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
