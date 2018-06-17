import { createAction } from '../utils/createAction';
import { PLUS_COUNT, MINUS_COUNT } from './ActionTypes';

export const plusCount = createAction(PLUS_COUNT);
export const minusCount = createAction(MINUS_COUNT);
