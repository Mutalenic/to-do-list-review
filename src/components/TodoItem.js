import React from 'react';

function TodoItem({ todo, removeTodo, markComplete }) {
  // Handle checkbox change
  const handleCheckboxChange = () => {
    markComplete(todo.id);
  };

  // Handle delete button click
  const handleDeleteClick = () => {
    removeTodo(todo.id);
  };

  // Check if todo object exists
  if (!todo) {
    return null;
  }

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed || false}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <p
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </p>
      <button
        onClick={handleDeleteClick}
        className="text-red-600 hover:text-red-800"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
