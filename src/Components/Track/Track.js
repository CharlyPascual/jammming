import React from 'react';
import './Track.css';
class Track extends React.Component{
    constructor(props){
        super();
        this.addTrack = this.addTrack.bind(this);//46
    }

    renderAction(){ //// TODO: mirar esta funcion
        console.log(this.props.isRemoval);
        if(!this.props.isRemoval){
            //this.props.isRemoval = true;
            return '+';
        }else {
            return '-';
        }
    }

    removeTrack(track){
        // TODO: Create a .removeTrack() method in the Track component. Use it to remove this.props.track from the playlist.
    }

    addTrack(){
         this.props.onAdd(this.props.track);
         console.log('run onClick');
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
                <a className='Track-action' onClick={this.addTrack}>{this.renderAction()}</a>
            </div>
        )
    }
}
export default Track;
