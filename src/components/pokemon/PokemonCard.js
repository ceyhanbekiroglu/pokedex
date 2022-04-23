import React, { Component } from "react"

export default class PokemonCard extends Component {
	state = {
		name: "",
		imageUrl: "",
		pokemonIndex: "",
	}
	render() {
		const { name, url } = this.props
		const pokemonIndex = url.split("/")[url.split("/").length - 2]
		const imageUrl = `https://raw.github.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

		this.setState({
			name,
			imageUrl,
			pokemonIndex,
		})

		return (
			<div className="col-md-3 col-sm-6 mb-5">
				<div className="card">
					<div className="card-header">
						<h1>{this.state.name}</h1>
					</div>
				</div>
			</div>
		)
	}
}
