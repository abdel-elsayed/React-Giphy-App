import React, { Component } from 'react'
import axios from 'axios'

export default class GifCard extends Component {
    randomize = ()=>{
        axios.get("http://api.giphy.com/v1/gifs/random?api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i")
        .then(res => {this.setState({rand: res.data.data.images.original.url}); console.log("Random")})
        .catch(err => console.log("Error"))
        console.log("Random was called")
    }




    render() {

        return (
            
            <div>
                
                     {this.props.error===true ? <div className="error">No Results</div> : this.props.gifs.map( (item,index) => (
                    <div key={index}>
                        <div>
                          <img src={item.images.fixed_height.url} alt ="gif"></img>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
 