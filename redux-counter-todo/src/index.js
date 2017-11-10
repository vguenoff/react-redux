import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reducers from './reducers/';

import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <div className="container">
      <Counter />
      <hr />
      <TodoApp />
    </div>
  </Provider>,
  document.getElementById('root')
);
