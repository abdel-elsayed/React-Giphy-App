import React, { Component } from 'react'
import axios from 'axios'

export default class RandGif extends Component {


    randomize = ()=>{
        axios.get("http://api.giphy.com/v1/gifs/random?api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i")
        .then(res => {this.props.modifyRandom(res.data.data.images.original.url); console.log(res)  })
        .catch(err => console.log("Error"))
        console.log("Random was called")
    }


render() {
    //console.log("RandomGif Called")
    return (
        <div>
      <button className="random" onClick = {()=>this.randomize()} type="button">Random</button>
        </div>
    )
    }
}
