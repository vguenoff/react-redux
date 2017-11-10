import React from 'react';

const FilterLink = ({
  filter,
  currentFilter,
  onClick,
  children
}) => {
  return (filter === currentFilter) ? (
    <span>
      {children}
    </span>
  ) : (
    <a
      href="#"
      onClick={() => onClick(filter)}
    >
      {children}
    </a>
  );
};

export default FilterLink;
