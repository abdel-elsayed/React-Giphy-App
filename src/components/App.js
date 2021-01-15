import React, { Component } from "react";
import axios from "axios";
import GifCard from "./GifCard.js";
import SearchBar from "./SearchBar.js";
import RandGif from "./RandGif.js";
import "../App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			error: false,
			gifs: [],
			rand: "",
			limit: 10,
			load: 8,
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
		this.setState({
			gifs: value,
			rand: "",
			limit: 10,
		});
	};

	modifyRand = (value) => {
		this.setState({
			rand: value,
		});
	};

	// Function to load more search results
	loadMore = () => {
		this.setState({
			limit: this.state.limit + this.state.load,
		});
	};

	render() {
		return (
			<div>
				<header className="header">
					<h1>Giphy Search</h1>
					<div className="searchBar">
						<SearchBar modifyState={this.modifyState} error={this.error} />
						<div className="right">
							<RandGif modifyState={this.modifyRand} error={this.error} />
						</div>
					</div>
				</header>
				
				<GifCard
					gifs={this.state.gifs}
					error={this.state.error}
					rand={this.state.rand}
				/>

				{ this.state.limit + this.state.load <= 50 && this.state.rand === "" ?
					<button className="button" onClick={this.loadMore}>More Giphys</button> : null
				}
			</div>
		);
	}
}
