import React from "react";
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component{
    render(){
        return(
        <div className="SearchResults">
          <h2>Results</h2>
          {/* 33 */}
          <TrackList
              tracks={this.props.searchResults}
              onAdd={this.props.onAdd}  /* 43 */
              isRemoval={false}
          />
        </div>
    )
    }
}
export default SearchResults;
