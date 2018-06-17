import { createStore, combineReducers, applyMiddleware } from "../../../../../packages/redux";
import { logger } from "../../../../../packages/redux-logger";
import { countReducer, reposReducer } from "../reducers";

const reducer = combineReducers({
	count: countReducer,
	repos: reposReducer,
});

export default function configureStore() {
	// const store = createStore(reducer, {}, applyMiddleware(logger));
	const store = createStore(reducer, applyMiddleware(logger));

	return store;
}
