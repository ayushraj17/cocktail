import React from "react";
import { RadioGroup, Radio, Flex, Spinner, Grid, Text } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchByAlcohol } from "../actions";
import DrinkDisplay from "./DrinkDisplay";

function Alcoholic() {
	const [alcoholValue, setAlcoholValue] = React.useState("");
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const data = useSelector((state) => state.ingredients.drinks);

	React.useEffect(() => {
		async function fetchData() {
			dispatch(fetchByAlcohol(alcoholValue));
		}

		isLoading && fetchData();
		setIsLoading(false);
	}, [dispatch, alcoholValue, isLoading]);

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
			<Flex
				justify="center"
				align="center"
				direction={["row", "row"]}
				borderWidth="md"
				borderColor="primary.400"
			>
				<RadioGroup
					isInline
					spacing={["16", "8"]}
					onChange={(e) => {
						setAlcoholValue(e.target.value);
						setIsLoading(true);
					}}
					// value={alcoholValue}
					variantColor="red"
				>
					<Radio value="Alcoholic" variantColor="red" size="md">
						<Text color="#fc85ae">Alcoholic</Text>
					</Radio>
					<Radio variantColor="blue" value="Non alcoholic" size="md">
						<Text color="#fc85ae">Non alcoholic</Text>
					</Radio>
					<Radio variantColor="green" value="Optional alcohol" size="md">
						<Text color="#fc85ae">Optional alcohol</Text>
					</Radio>
				</RadioGroup>
				{/* <Button mx={10} type="submit">
						<Icon name="search-2" />
					</Button> */}
			</Flex>

			<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))">
				{renderDrinks()}
			</Grid>
		</div>
	);
}

export default Alcoholic;
