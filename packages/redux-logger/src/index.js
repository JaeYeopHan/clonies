/**
 * Redux Logger Middleware that print console.log with action type and currentState of redux.
 * @param {Object} middlewareAPI {getState, dispatch} Object supported from applyMiddleware api of redux.
 * @returns {Function}
 */
export function logger(middlewareAPI) {
	const {
		getState
	} = middlewareAPI;

	return next => action => {
		// When applied middleware, dispatch of store executed in here.
		// `next` function is dispatch or other middleware function!
		// If this middleware function is last, next is store.dispatch.
		const actionObject = next(action);

		// This code is all of logger module.
		console.log(`[DISPATCH] ${action.type}: `, getState());

		return actionObject;
	};
}
