import React from "react";
import { Box } from "@chakra-ui/core";
import SearchBar from "./SearchBar";
import "../App.css";

function App() {
	return (
		<div>
			<Box mx={[2, 10, 10, 300]} mt={[2, 10]}>
				<SearchBar />
			</Box>
		</div>
	);
}

export default App;
