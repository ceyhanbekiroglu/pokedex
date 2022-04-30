import React, { Component } from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"
import NavBar from "./components/layout/NavBar"
import Dashboard from "./components/layout/Dashboard"
import Pokemon from "./components/pokemon/Pokemon"

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div className="container">
						<Routes>
							<Route exact path="/" element={<Dashboard />} />
							<Route
								exact
								path="/pokemon/:pokemonIndex"
								element={<Pokemon />}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		)
	}
}

export default App
