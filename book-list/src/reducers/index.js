import { combineReducers } from 'redux';

import books from './books';
import activeBook from './activeBook';

export default combineReducers({
  books,
  activeBook
});
