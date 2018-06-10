import { PLUS_COUNT, MINUS_COUNT } from "../action.js/actionType";

const initialState = {
	count: 0,
};

export const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLUS_COUNT:
			return Object.assign({}, state, {
				count: state.count + 1,
			});
		case MINUS_COUNT:
			return Object.assign({}, state, {
				count: state.count - 1,
			});
		default:
			return state;
	}
};
