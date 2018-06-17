import { $ } from "../utils/dom";
import { plusCount, minusCount } from "../actions/countAction";
import { Count } from "../components";

export default class CounterController {
	constructor(store, root) {
		this.store = store;
		this.$root = $(root);

		this.$root.addEventListener("click", e => this._onClick(e));
	}

	init() {
		const count = new Count(this.store);

		count.subscribe();
	}

	_onClick({ target }) {
		const action = target.getAttribute("data-action");

		switch (action) {
			case "plus.count":
				return this.store.dispatch(plusCount());
			case "minus.count":
				return this.store.dispatch(minusCount());
			default:
				return this;
		}
	}
}
