import React from "react";
import './Playlist.css';
import TrackList from '../TrackList/TrackList';



class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
          <input defaultValue={this.props.playlistName}/>
          <TrackList
              tracks={this.props.playlistTracks}
              isRemoval={true} // - sign in renderAction()
          /> {/* 39 */}
          <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
    );
    }
}
export default Playlist;
