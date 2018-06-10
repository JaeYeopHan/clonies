const ERROR_PARAMETER = `Need one more reducer`;

/**
 * Merge reducers and return reducer combined
 * @param {Object<Reducer>} reducers {key: value}
 * @return {Reducer} combinedReducer
 * @example
 * const rootReducer = combineReducers({
 * 	repos: reposReducer,
 * 	count: countReducer,
 * })
 */
export function combineReducers(reducers) {
	const reducerKeys = Object.keys(reducers);

	if (reducerKeys.length === 0) {
		throw new Error(ERROR_PARAMETER);
	}

	// Finally return reducer combined.
	return function combinedReducer(state = {}, action) {
		let hasChanged = false;
		const nextState = {};

		reducerKeys.forEach(key => {
			const reducer = reducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);

			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		});

		return hasChanged ? nextState : state;
	}
}
