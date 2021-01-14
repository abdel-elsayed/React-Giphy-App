import React, { Component } from "react";
import axios from "axios";
import GifCard from "./GifCard.js";
import SearchBar from "./SearchBar.js";
import RandGif from "./RandGif.js";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			error: false,
			gifs: [],
			rand: "",
			limit: 40,
		};
	}

	componentDidMount() {
		this.fetchTrendingGifs();
	}

	// Checks for state change and if the limit has changed then fetches more data
	componentDidUpdate(prevProps, prevState) {
		if (prevState.limit !== this.state.limit) this.fetchTrendingGifs();
	}

	fetchTrendingGifs = () => {
		axios
			.get(
				`http://api.giphy.com/v1/gifs/trending?api_key=lUXSi5Jz1MEbUSDP1zzBLbZW3Dg1ay9i&limit=${this.state.limit}`
			)
			.then((res) => {
				this.setState({ gifs: res.data.data, error: false });
			})
			.catch((err) => this.setState({ error: true }));
	};

	modifyState = (value) => {
		this.setState({ gifs: value });
	};

	modifyRand = (value) => {
		this.setState({ rand: value });
	};

	// Function to load more search results
	loadMore = () => {
		this.setState({
			limit: this.state.limit + 20,
		});
	};

	render() {
		return (
			<div className="App">
				<RandGif modifyState={this.modifyRand} error={this.error} />
				<SearchBar modifyState={this.modifyState} error={this.error} />
				<GifCard
					gifs={this.state.gifs}
					error={this.state.error}
					rand={this.state.rand}
				/>

				<button onClick={this.loadMore}>LOAD MORE</button>
			</div>
		);
	}
}
