import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilter } from '../actions/';

const FilterLink = ({
  filter,
  currentFilter,
  setFilter,
  children
}) => {
  return (filter === currentFilter) ? (
    <span>
      {children}
    </span>
  ) : (
    <a
      href="#"
      onClick={() => setFilter(filter)}
    >
      {children}
    </a>
  );
}

// const mapStateToProps = ({ filter }) => ({ filter });
const mapDispatchToProps = dispatch => bindActionCreators({ setFilter }, dispatch);

export default connect(null, mapDispatchToProps)(FilterLink);
