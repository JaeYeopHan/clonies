/**
 * Dom selecting function like JQuery
 * @param {string} selector CSS selector for selecting dom element
 */
export function $(selector) {
	return document.querySelector(selector);
}
