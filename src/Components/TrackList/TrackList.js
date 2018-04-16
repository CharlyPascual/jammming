import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <Track
                        key={track.id}
                        track={track}
                        onAdd={this.props.onAdd} //44
                        isRemoval={this.props.isRemoval} //añadido en 48
                    />;
                })}
            </div>
        );
    }
}
export default TrackList;
