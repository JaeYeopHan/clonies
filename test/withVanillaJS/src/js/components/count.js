import { $ } from "../utils/dom";
import { getNumber } from "../store";

export default class Count {
	constructor(store) {
		this.store = store;
		this.$number = $("#number");
	}

	/**
	 * @private
	 * Update value of element following dispatched action
	 */
	_updateState() {
		this.$number.innerText = getNumber(this.store);
	}

	subscribe() {
		this.store.subscribe(() => this._updateState());
	}
}
