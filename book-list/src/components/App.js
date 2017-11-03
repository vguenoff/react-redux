import React, { Component } from 'react';
import './App.css';

import BookList from '../containers/BookLIst';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
