import React, { Component } from 'react'
import axios from 'axios'
export default class GifCard extends Component {
    constructor(){
        super()
        this.state ={
       gifCards: []
       //searched
        }
    }

    getCards(e){
        // e.preventDefault();
        // //let gotCard = (e.target.zipcode.value)
        let key = "lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i"
        // fetch (" http://api.giphy.com/v1/gifs/search?q= " + e + "&api_key=YOUR_API_KEY" +key)
        //   .then(response => console.log(response.json()))
        //  // console.log(response.json())
        //   .then (res => this.setState({gifCards: [...res] }))
        //   .catch (error => console.log(error))


  //axios.get(" http://api.giphy.com/v1/gifs/search?q= " + e + "&api_key=YOUR_API_KEY" +key)
  axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i`)
    .then(res => {this.setState({gifCards: res.data.data, error:false}); console.log(this.state.gifCards[0].url)})
    .catch(err => this.setState({error:true}))

    
        }
    render() {
        return (
            <div>
            {this.props.error===true ? <div className="error">No Results</div> : this.props.gifCards.map( (item,index) => (
                console.log(item),
                <div key={index}>
                    <div>
                      <img src={item.images.fixed_height.url} alt ="gif"></img>
                    </div>
                </div>
            ))}
           
            
                 <h2 id ="header">Please Search a gif :p</h2>
        <form className = "gifReturn" onSubmit = {(e)=> this.getCards(e)}>
          <input id="gif" name="gif" type="text" />
          <input id= "submit" name = "submit" type = "submit"/>

        </form>
    
        <img src=  {this.state.gifCards.map(item => <p> URL: {item.url} </p> )} alt="gif"/>
            </div>
        )
    }
}
