import React from "react";
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);//60
    }
    //event_handler
    handleNameChange(e){
        const name = e.target.value;
        this.props.onNameChange(name);

    }
    render() {
        return (
            <div className="Playlist">
          <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
          <TrackList
              tracks={this.props.playlistTracks}
              isRemoval={true} // - sign in renderAction()
              onRemove={this.props.onRemove} //51
          /> {/* 39 */}
          <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
    );
    }
}
export default Playlist;
