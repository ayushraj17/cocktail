import React from "react";
import { RadioGroup, Radio, Flex, Spinner, Text } from "@chakra-ui/core";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchByCategory } from "../actions";
import DrinkDisplay from "./DrinkDisplay";
import { Grid } from "@chakra-ui/core";

function Category() {
	const [category, setCategory] = React.useState([]);
	const [categoryValue, setCategoryValue] = React.useState("");
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const data = useSelector((state) => state.ingredients.drinks);

	React.useEffect(() => {
		async function fetchData() {
			dispatch(fetchByCategory(categoryValue));
		}

		isLoading && fetchData();
		setIsLoading(false);
	}, [dispatch, categoryValue, isLoading]);

	React.useEffect(() => {
		async function fetchData() {
			Axios("https://the-cocktail-db.p.rapidapi.com/list.php?c=list", {
				method: "GET",
				headers: {
					"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
					"x-rapidapi-key":
						"43718c4767mshf60857d9cb84eefp150575jsnc06d011e9e2d",
				},
			})
				.then((response) => {
					setCategory(response.data.drinks);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		fetchData();
	}, []);

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
			<RadioGroup
				isInline
				spacing={["10"]}
				onChange={(e) => {
					setCategoryValue(e.target.value);
					setIsLoading(true);
				}}
				value={categoryValue}
			>
				{category.map(({ strCategory }, i) => (
					<Radio
						key={i}
						value={strCategory}
						variantColor="customPink.500"
						size="md"
						minW="180px"
					>
						<Text color="customPink.500">{strCategory}</Text>
					</Radio>
				))}
			</RadioGroup>

			{/* <Flex justify="center">
					<Button mt={2} type="submit">
						<Icon name="search-2" />
					</Button>
				</Flex> */}
			<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))">
				{renderDrinks()}
			</Grid>
		</div>
	);
}

export default Category;
