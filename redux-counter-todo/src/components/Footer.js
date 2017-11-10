import React from 'react';

import FilterLink from './FilterLink';

const Footer = ({
  visibilityFilter,
  onClick
}) => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter="SHOW_ALL"
        onClick={filter => onClick(filter)}
        currentFilter={visibilityFilter}
      >
        Show All
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_ACTIVE"
        onClick={filter => onClick(filter)}
        currentFilter={visibilityFilter}
      >
        Show Active
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_COMPLETED"
        onClick={filter => onClick(filter)}
        currentFilter={visibilityFilter}
      >
        Show Completed
      </FilterLink>
    </p>
  );
};

export default Footer;
