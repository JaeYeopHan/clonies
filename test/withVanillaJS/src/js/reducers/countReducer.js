import { PLUS_COUNT, MINUS_COUNT } from "../actions/actionType";

const initialState = {
	number: 0,
};

export default function countReducer(state = initialState, action) {
	switch (action.type) {
		case PLUS_COUNT:
			return Object.assign({}, state, {
				number: state.number + 1,
			});
		case MINUS_COUNT:
			return Object.assign({}, state, {
				number: state.number - 1,
			});
		default:
			return state;
	}
}
