import React, { Component } from "react";

export default class GifCard extends Component {
	getStyleGrid = () => {
        return {
			background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",

            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridGap: "10px",
            justifyContent: "space-between",
		};
    };
    
    getStyleItem = () => {
        return {
            minWidth: "200px",
            maxWidth: "400px",
            minHeight: "200px",
            width: "auto",
            height: "auto",
            justifySelf: "center",
        }
    }

	render() {
		return (
			<div style={this.getStyleGrid()}>
				{this.props.error === true ? (
					<div className="error">No Results</div>
				) : this.props.rand !== "" ? (
					<img src={this.props.rand} alt="gif"></img>
				) : (
					this.props.gifs.map((item, index) => (
						<div key={index} style={this.getStyleItem()}>
							<img src={item.images.fixed_height.url} alt="gif"></img>
						</div>
					))
				)}
			</div>
		);
	}
}
