import { combineReducers } from "redux";

const fetchInd = (state = [], action) => {
	switch (action.type) {
		case "FETCH_IND":
			return action.payload;
		case "FETCH_AL":
			return action.payload;
		case "FETCH_CAT":
			return action.payload;

		default:
			return state;
	}
};

const show1 = (state = false, action) => {
	switch (action.type) {
		case "SHOW_1":
			return action.payload;
		default:
			return state;
	}
};
const show2 = (state = false, action) => {
	switch (action.type) {
		case "SHOW_2":
			return action.payload;

		default:
			return state;
	}
};

export default combineReducers({
	ingredients: fetchInd,
	show1,
	show2,
});
