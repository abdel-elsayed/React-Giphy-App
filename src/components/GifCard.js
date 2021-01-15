import React, { Component } from "react";

export default class GifCard extends Component {
	getStyleContainer = () => {
        return {
			display: "flex",
			flexFlow: "row wrap",
			justifyContent: "space-between",
			margin: "10px 5%",
		};
    };
    
    getStyleItems = () => {
        return {
            width: "auto",
            height: "auto",
        }
    }

	render() {
		return (
			<div style={this.getStyleContainer()}>
				{this.props.error === true ? (
					<div className="error">No Results</div>
				) : this.props.rand !== "" ? (
					<img src={this.props.rand} alt="gif" className="center"></img>
				) : (
					this.props.gifs.map((item, index) => (
						<div key={index} style={this.getStyleItems()}>
							<img src={item.images.fixed_height.url} alt="gif"></img>
						</div>
					))
				)}
			</div>
		);
	}
}
