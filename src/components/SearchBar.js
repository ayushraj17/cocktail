import React, { useEffect, useState } from "react";
import { fetchByIngredient, setShow2, setShow1 } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Icon,
	Grid,
	Spinner,
	Flex,
} from "@chakra-ui/core";
import DrinkDisplay from "./DrinkDisplay";
import Filter from "./Filter";

function SearchBar() {
	const [query, setQuery] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const data = useSelector((state) => state.ingredients.drinks);

	useEffect(() => {
		async function fetchData() {
			dispatch(fetchByIngredient(`i=${query}`));
		}
		isLoading && fetchData();
		setIsLoading(false);
	}, [query, isLoading, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsLoading(true);
	};

	const renderDrinks = () => {
		if (!data)
			return (
				isLoading && (
					<Flex justify="center" mt={10}>
						<Spinner
							size="xl"
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="primary.400"
						/>
					</Flex>
				)
			);
		return data.map(({ strDrink, strDrinkThumb, idDrink }) => (
			<DrinkDisplay key={idDrink} src={strDrinkThumb} title={strDrink} />
		));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<InputGroup isFullWidth={true}>
					<Input
						placeholder="Enter your Ingredients"
						size="lg"
						variant="filled"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onClick={() => {
							dispatch(setShow1(false));
							dispatch(setShow2(false));
						}}
						w="full"
						_focus="white"
						bg="white"
					/>
					<InputRightElement width="4.5rem">
						<Button type="submit" h="1.75rem" size="lg" p="auto" bg="none">
							<Icon name="search-2" color="primary.400" />
						</Button>
					</InputRightElement>
				</InputGroup>

				<Filter />
			</form>

			<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))">
				{renderDrinks()}
			</Grid>
		</div>
	);
}

export default SearchBar;
