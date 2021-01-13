import React, { Component } from 'react'

export default class GifCard extends Component {
    render() {
        return (
            <div>
                 <div>
            {this.props.error===true ? <div className="error">No Results</div> : this.props.gifs.map( (item,index) => (
                    console.log(item),
                    <div key={index}>
                        <div>
                          <img src={item.images.fixed_height.url} alt ="gif"></img>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}
 {/* <iframe src={item.embed_url} 
                        width="480" height="360" frameBorder="0" class="giphy-embed" 
                        allowFullScreen></iframe><p><a href="https://giphy.com/gifs/l41YzWIbWvOumWat2">via GIPHY</a></p> */}