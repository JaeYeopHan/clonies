import { PLUS_COUNT, MINUS_COUNT } from "./actionType";

export const plusCount = payload => ({
	type: PLUS_COUNT,
	payload,
});

export const minusCount = payload => ({
	type: MINUS_COUNT,
	payload,
});
