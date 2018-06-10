import { createStore, combineReducers } from "../../../../packages/redux";
import { plusCount, minusCount } from "./action.js/countAction";
import { countReducer, reposReducer } from "./reducers";

const reducer = combineReducers({
	count: countReducer,
	reposReducer,
});
const store = createStore(reducer);

const numberElm = document.getElementById("number");

function attachEvent() {
	document.getElementById("plus").addEventListener("click", () => {
		store.dispatch(plusCount());
	});
	document.getElementById("minus").addEventListener("click", () => {
		store.dispatch(minusCount());
	});
}

function render(state) {
	const { count } = state;

	numberElm.innerText = count.count;
}

(() => {
	store.subscribe(() => render(store.getState()));
	attachEvent();
	render(store.getState());
})();
