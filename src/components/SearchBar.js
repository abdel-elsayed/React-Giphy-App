import React, { Component } from 'react'
import axios from 'axios'

export default class SearchBar extends Component {



fetchSearchGifs = (value) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i`)
      .then(res => {this.props.modifyState(res.data.data)})
      .catch(err => this.setState({error:true}))
}

onChange = (event) => {
    this.fetchSearchGifs(event.target.value)
}


render() {
    return (
        <div>
            <header id ="main-header">Giphy Search</header>
            <form>
                <input type="text" name="search" placeholder="Search..." onChange={this.onChange}></input>
            </form>
        </div>
    )
    }
}
