/**
 * Util function for composing functions.
 * @param {...Function} fns The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions from right to left.
 */
export function compose(...fns) {
	if (fns.length === 0) {
		return arg => arg;
	}

	if (fns.length === 1) {
		return fns[0];
	}

	return fns.reduce((funcA, funcB) => (...args) => funcA(funcB(...args)));
}
