import { PLUS_COUNT, MINUS_COUNT } from '../actions/ActionTypes';

const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case PLUS_COUNT:
      return {
        ...state,
        number: state.number + 1,
      };
    case MINUS_COUNT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
