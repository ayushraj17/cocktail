// import cocktail from "../apis/cocktail";
import axios from "axios";

export const fetchByIngredient = (query) => async (dispatch) => {
	const response = await axios(
		`https://the-cocktail-db.p.rapidapi.com/filter.php?${query}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
				"x-rapidapi-key": "43718c4767mshf60857d9cb84eefp150575jsnc06d011e9e2d",
			},
		}
	);

	dispatch({ type: "FETCH_IND", payload: response.data });
};
export const fetchByCategory = (query) => async (dispatch) => {
	const response = await axios(
		`https://the-cocktail-db.p.rapidapi.com/filter.php?c=${query}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
				"x-rapidapi-key": "43718c4767mshf60857d9cb84eefp150575jsnc06d011e9e2d",
			},
		}
	);

	dispatch({ type: "FETCH_CAT", payload: response.data });
};
export const fetchByAlcohol = (query) => async (dispatch) => {
	const response = await axios(
		`https://the-cocktail-db.p.rapidapi.com/filter.php?a=${query}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
				"x-rapidapi-key": "43718c4767mshf60857d9cb84eefp150575jsnc06d011e9e2d",
			},
		}
	);

	dispatch({ type: "FETCH_AL", payload: response.data });
};

export const setShow1 = (value) => {
	return {
		type: "SHOW_1",
		payload: value,
	};
};
export const setShow2 = (value) => {
	return {
		type: "SHOW_2",
		payload: value,
	};
};
