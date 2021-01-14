import React, { Component } from 'react'
import axios from 'axios'

export default class RandGif extends Component {

//{this.setState({rand: res.data.data.images.original.url}); console.log("Random")})

  fetchRandGif = () =>{
    axios.get(`https://api.giphy.com/v1/gifs/random?&limit=1&api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i`)
    .then(res => {this.props.modifyState(res.data.data.images.original.url); console.log(res.data.data.images.original.url)})
    .catch(err => console.log("Error"))
  }

render() {
    return (
        <div>
            <button onClick={this.fetchRandGif}>Generate Random GIPHY</button>
        </div>
    )
    }
}
