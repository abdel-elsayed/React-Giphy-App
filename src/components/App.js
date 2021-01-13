import React, { Component } from 'react'
import axios from 'axios'
import GifCard from './GifCard.js'
import SearchBar from './SearchBar.js';

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      error: false,
      gifs: []
    }
  }

  componentDidMount(){
    this.fetchTrendingGifs();
 }

 fetchTrendingGifs = () => {
  axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i&limit=9`)
    .then(res => {this.setState({gifs: res.data.data, error:false})})
    .catch(err => this.setState({error:true}))
}

  modifyState = (value) => {
    this.setState({ gifs: value })
    
  }

  render() {
    return (
      <>
      <SearchBar modifyState={this.modifyState} error={this.error}/>
      <GifCard gifs ={this.state.gifs} error ={this.state.error}/>
      </>
    )
  }
}
