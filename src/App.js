import React, { Component } from "react";
import Abc from "./Abc";
import Mod from "./Mod";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Abc />
				<Mod />
			</div>
		);
	}
}

export default App;
