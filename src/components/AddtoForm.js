import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return; // Prevent adding empty todos

    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-1 rounded-l py-2 px-4"
        placeholder="Enter a new todo..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
