import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '../../../packages/redux/src/index';

import App from './App';

const store = createStore(() => {});

ReactDOM.render(<App />, document.getElementById('root'));
