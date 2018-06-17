import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
} from '../../../packages/redux/src/index';

import App from './App';
import countReducer from './reducers/countReducer';

const reducer = combineReducers({
  count: countReducer,
});

const store = createStore(reducer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
