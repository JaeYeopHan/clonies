// Redux supply createStore api for creating store for effective application state management.
// Developer who will use redux, first of all, create store by this api.
// This api return `store` or enhanced `store`.
// This `store` support some api for managing state of application.
export function createStore(reducer, preloadedState, enhancer) {

	// * [Prevent Code]
	// If developer using redux, pass directly enhancer without preloadState,
	// assign preloadState to enhancer and change preloadState to undefined.
	if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
		enhancer = preloadedState;
		preloadedState = undefined;
	}

	// * [Prevent Code]
	// If developer using redux, pass enhancer function to createStore api,
	// return value applied enhancer function.
	if (typeof enhancer !== 'undefined' && typeof enhancer === 'function') {
		return enhancer(createStore)(reducer, preloadedState);
	}

	// * [Prevent Code]
	// reducer parameter must be function type.
	if (typeof reducer !== 'function') {
		throw new Error('Parameter reducer must function type');
	}

	// This is store for save application state.
	// Get initial state from each reducer.
	// Maybe @param reducer is reducer derived from combineReducer.
	let currentState = reducer(preloadedState, {
		type: "@@init"
	});

	// Redux manage function to modify state called listeners.
	// Listeners are added by subscribe api.
	let listeners = [];

	/**
	 * * [API function]
	 * Return application state managed by redux.
	 */
	function getState() {
		return currentState;
	}

	/**
	 * * [API function]
	 * Developer using redux can modify state by dispatch api.
	 * Developer pass object called action.
	 * Passed action is determine reducer's case.
	 * @param {Action} action Action object
	 */
	function dispatch(action) {
		currentState = reducer(currentState, action);
		listeners.forEach(l => l());
	}

	/**
	 * * [API function]
	 * Developer using redux can `watch` changed state by using this api.
	 * These listeners are executed when called dispatch.
	 * @param {Function} listener
	 * @returns {Function} This is function for unsubscribing.
	 */
	function subscribe(listener) {
		listeners.push(listener);

		return () => {
			listeners = listeners.filter(l => l !== listener);
		}
	}

	return {
		dispatch,
		getState,
		subscribe,
	}
}
