import React, { Component } from "react"
import PokemonCard from "./PokemonCard"
import axios from "axios"

export default class PokemonList extends Component {
	state = {
		url: "https://pokeapi.co/api/v2/pokemon/",
		pokemon: null,
	}
	async componentDidMount() {
		const res = await axios.get(this.state.url)
		this.setState({ pokemon: res.data["results"] })
	}
	render() {
		return (
			<React.Fragment>
				{this.state.pokemon ? (
					<div className="row">
						{this.state.pokemon.map((pokemon, index) => (
							<PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
						))}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</React.Fragment>
		)
	}
}
