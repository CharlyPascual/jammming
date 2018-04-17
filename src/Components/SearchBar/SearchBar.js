import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:''};
        this.search = this.search.bind(this);//70
        this.handleTermChange = this.handleTermChange.bind(this);//72

    }

    //71
    handleTermChange(e){
        this.setState({term: e.target.value});
        console.log('to search: ',e.target.value);
    }
    //69
    search(){
        this.props.onSearch(this.state.term);
    }

    render(){
        return (
            <div className="SearchBar">
                 {/* //73 */}
              <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
              <a onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}
export default SearchBar;
