import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectBook from '../actions/';

const BookList = ({ books, selectBook }) => (
  <ul className="list-group col-sm-4">
    {
      books.map(book => (
        <li
          key={book.title}
          className="list-group-item"
        >
          <input
            type="submit"
            value={book.title}
            onClick={() => selectBook(book)}
          />
        </li>
      ))
    }
  </ul>
);

const mapStateToProps = ({ books }) => ({ books });
const mapDispatchToProps = dispatch => bindActionCreators({ selectBook }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
