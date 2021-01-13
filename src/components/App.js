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
    this.gifs = this.modifyState.bind(this)
  }
  componentDidMount(){
    this.fetchTrendingGifs(this.state.zipCode)
 }

 fetchTrendingGifs = () => {
  axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i`)
    .then(res => {this.setState({gifs: res.data.data, error:false}); console.log(this.state.gifs[0].url)})
    .catch(err => this.setState({error:true}))
}


  modifyState(value){
    this.setState({ gifs: value })
  }

  render() {
    return (
      <>
      <SearchBar modifyState={this.modifyState} />
      <GifCard gifs ={this.state.gifs} error ={this.state.error}/>
      </>
    )
  }
}
