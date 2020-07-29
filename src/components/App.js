import React from "react";
import { Box } from "@chakra-ui/core";
import SearchBar from "./SearchBar";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import "../App.css";

function App() {
	return (
		<div className="App">
			<Box mx={[2, 10, 10, 300]} pt={[2, 10]}>
				<div className="heading">Cocktail</div>
				<SearchBar />
				<ScrollUpButton />
			</Box>
		</div>
	);
}

export default App;
