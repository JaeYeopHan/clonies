// Redux supply createStore api for creating store for effective application state management.
// Developer who will use redux, first of all, create store by this api.
// This api return `store`.
// This `store` support some api for managing state of application.
export function createStore(reducer, state) {

	// This is store for save application state.
	// Get initial state from each reducer.
	// Maybe @param reducer is reducer derived from combineReducer.
	let currentState = reducer(state, {
		type: "@@init"
	});

	// Redux manage function to modify state called listeners.
	// Listeners are added by subscribe api.
	let listeners = [];

	// Return application state managed by redux.
	function getState() {
		return currentState;
	}

	// Developer using redux can modify state by dispatch api.
	// Developer pass object called action.
	// Passed action is determine reducer's case.
	function dispatch(action) {
		currentState = reducer(currentState, action);
		listeners.forEach(l => l());
	}

	// Developer using redux can `watch` changed state by using this api.
	// @param listener is just function.
	// These listeners are executed when called dispatch.
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
