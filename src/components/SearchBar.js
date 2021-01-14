import React, { Component } from 'react'
import axios from 'axios'

export default class SearchBar extends Component {
    fetchSearchGifs = (value) => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i`)
        .then(res => {this.props.modifyState(res.data.data)})
        .catch(err => this.setState({error:true}))
    }

    handleSubmit = (event) => {
        
        //console.log(event.target.searchField.value)
        this.fetchSearchGifs(event.target.searchField.value)
         event.preventDefault();
}


    render() {
        return (
           
          <form  onSubmit={this.handleSubmit}>
              <input type="text" name="searchField"></input>
                <button type="submit">Do the thing</button>
            </form>
        
        )
    }
}
