import React from 'react';
import './Track.css';
class Track extends React.Component{
    constructor(props){
        super();
        this.addTrack = this.addTrack.bind(this);//46
        this.removeTrack = this.removeTrack.bind(this); //54
    }

    renderAction() {
    if (this.props.isRemoval) {
      return (
        <a className="Track-action" onClick={this.removeTrack}>
          -
        </a>
      )
    }
    return (
      <a className="Track-action" onClick={this.addTrack}>
        +
      </a>
    )
  }

    removeTrack(track){
        // TODO: Create a .removeTrack() method in the Track component. Use it to remove this.props.track from the playlist.
        this.props.onRemove(this.props.track);
        console.log('run onClick -')
    }

    addTrack(){
         this.props.onAdd(this.props.track);
         console.log('run onClick +');
     }

    render(){
        return (
            <div className="Track">
                <div className="Track-information">
                    {/* 35 */}
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}
                    </p>
                </div>
                {/* 47 onClick*/}
                {/* <a className='Track-action' onClick={this.addTrack}>{this.renderAction()}</a> */}
                {this.renderAction()}
            </div>
        )
    }
}
export default Track;
