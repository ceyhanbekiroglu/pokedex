import React, { Component } from "react"
import styled from "styled-components"

const Sprite = styled.img`
	width: 5em,
	height: 5em,
	display: none,
	`

export default class PokemonCard extends Component {
	state = {
		name: "",
		imageUrl: "",
		pokemonIndex: "",
	}
	componentDidMount() {
		const { name, url } = this.props
		const pokemonIndex = url.split("/")[url.split("/").length - 2]
		const imageUrl = `https://raw.github.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

		this.setState({
			name,
			imageUrl,
			pokemonIndex,
		})
	}

	render() {
		return (
			<div className="col-md-3 col-sm-6 mb-5">
				<div className="card">
					<h5 className="card-header">{this.state.pokemonIndex}</h5>

					{this.state.imageLoading ? () : null}
					<Sprite
						className="card-image-top rounded mx-auto mt-2"
						src={this.state.imageUrl}
						stle={
							this.state.tooManyRequests ? { display: "none" } :
							this.state.imageLoading ? { display: "block" } :
						}
					/>
					{this.state.toManyRequests ? (
						<h6 className="mx-auto">
							<span className="badge badge-danger mt-2">Too many requests</span>
						</h6>
					) : null}
		
					<div className="card-body mx-auto">
						<h6 className="card-title">
							{this.state.name
								.toLocaleLowerCase()
								.split(" ")
								.map(
									(letter) =>
										letter.charAt(0).toUpperCase() + letter.substring(1)
								)
								.join("")}
						</h6>
					</div>
				</div>
			</div>
		)
	}
}
