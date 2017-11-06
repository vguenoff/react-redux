import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux';
import createStore from './createStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </div>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
