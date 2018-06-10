import { createStore } from "../../../../packages/redux";
import { plusCount, minusCount } from "./action.js/countAction";
import { countReducer } from "./reducers";

const store = createStore(countReducer);

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

	numberElm.innerText = count;
}

(() => {
	store.subscribe(() => render(store.getState()));
	attachEvent();
	render(store.getState());
})();
