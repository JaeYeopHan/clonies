import { compose } from "./compose";

/**
 * Each middleware will be given the `dispatch` and `getState` api as named arguments.
 * `applyMiddleware` function is high order function that recieve function argument named createStore.
 * @param {...Function} middlewares Middleware for enhancing redux.
 * @returns {Function} A store enhancer applying the middleware.
 */
export function applyMiddleware(...middlewares) {
	// This api will be passed enhancer to createStore api of redux.
	// Executed from `return enhancer(createStore)(reducer, preloadedState);`
	// So, args[0] === reducer and args[1] === preloadedState
	return createStore => (...args) => {
		const store = createStore(...args);

		let dispatch;

		// Middleware API supported from redux
		const middlewareAPI = {
			getState: store.getState,
			dispatch: (...args) => dispatch(...args),
		};

		// Array of function applied middleware
		const chain = middlewares.map(middleware => middleware(middlewareAPI));

		// Wrapping dispatch of store as high order function
		dispatch = compose(...chain)(store.dispatch);

		return Object.assign({}, store, {
			dispatch,
		});
		// Like this:
		// return {
		// 	...store,
		// 	dispatch,
		// }
	};
}
