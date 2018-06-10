import { FETCH_SUCCESS } from "../action.js/actionType";

const initialState = {
	repos: [],
};

// Temporary reducer
export const reposReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SUCCESS:
			return state;
		default:
			return state;
	}
};
