import React from 'react';

const AddTodo = ({
  onClick
}) => {
  let input;
  return (
    <div>
      <input
        type="text"
        ref={node => input = node}
      />
      <button
        onClick={() => {
          onClick(input);
          input.value = '';
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default AddTodo;
