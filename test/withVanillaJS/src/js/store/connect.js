export function getNumber(store) {
	const state = store.getState();
	const { count } = state;
	const { number } = count;

	return number;
}
