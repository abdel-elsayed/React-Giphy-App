import React, { Component } from 'react'
import axios from 'axios'
import GifCard from './GifCard.js'
import SearchBar from './SearchBar.js';
import RandGif from "./RandGif.js";

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
      error: false,
      gifs: [],
      rand: ""
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
  modifyRandom = (value)=>{
    this.setState({rand: value})
}



  render() {
    return (
      
      <>
      <RandGif rand= {this.state.rand} modifyRandom={this.modifyRandom} error={this.error}/>
      <SearchBar modifyState={this.modifyState} error={this.error}/>

      <GifCard gifs ={this.state.gifs} error ={this.state.error} rand = {this.state.rand} />


      


      </>
    )
  }
}
