import React from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo, setFilter } from '../actions/';
// helpers
import getVisibleTodos from '../helpers/getVisibleTodos';
// components
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

// TODO: global var ??
let currentId = 0;

const TodoApp = ({
  todos,
  addTodo,
  toggleTodo,
  visibilityFilter,
  setFilter
}) => (
  <div className="TodoApp">
    <AddTodo
      onClick={
        (input) => {
          currentId += 1;
          addTodo(currentId, input.value);
        }
      }
    />
    <TodoList
      visibleTodos={
        getVisibleTodos(todos, visibilityFilter)
      }
      onTodoClick={id => toggleTodo(id)}
    />
    <Footer
      visibilityFilter={visibilityFilter}
      onClick={filter => setFilter(filter)}
    />
  </div>
);

export default connect(
  // state to props
  ({ todos, visibilityFilter }) => ({ todos, visibilityFilter }),
  // dispatch to props
  dispatch => bindActionCreators({ addTodo, toggleTodo, setFilter }, dispatch)
)(TodoApp); // component
