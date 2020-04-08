import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList'

//from api docs: GET https://www.googleapis.com/youtube/v3/search

class App extends Component {
  state = { videos: [] }

  handleFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    //console.log(response)
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
