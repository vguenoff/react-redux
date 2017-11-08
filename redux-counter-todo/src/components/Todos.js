import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo } from '../actions/';

import getVisibleTodos from '../helpers/getVisibleTodos';

import FilterLink from './FilterLink';
import TodoList from './TodoList';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.currentId = 0;
  }
  onAddTodo = () => {
    this.currentId += 1;
    this.props.addTodo(this.currentId, this.input.value);
    this.input.value = '';
  }
  render() {
    const { todos, toggleTodo, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div className="Todos">
        <input
          type="text"
          ref={node => this.input = node}
        />
        <button onClick={() => this.onAddTodo()}>
          Add todo
        </button>
        <TodoList
          visibleTodos={visibleTodos}
          onTodoClick={id => toggleTodo(id)}
        />
        <p>
          Show:
          {' '}
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
          >
            Show All
          </FilterLink>
          {' '}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
          >
            Show Active
          </FilterLink>
          {' '}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
          >
            Show Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({ todos, visibilityFilter });
const mapDispatchToProps = dispatch => bindActionCreators({ addTodo, toggleTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
