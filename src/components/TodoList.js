import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add todo item
  const addTodo = () => {
    if (newTodo.trim() === '') return; // Prevent adding empty todos

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo('');
  };

  // Remove todo item
  const removeTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // Mark todo item as completed
  const markComplete = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      {/* Todo list header */}
      <h2>Todo List</h2>

      {/* Todo input form */}
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 rounded-l py-2 px-4"
          placeholder="Enter a new todo..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
        >
          Add
        </button>
      </div>

      {/* Todo list items */}
      {todos.length === 0 ? (
        <p>No todos yet. Add some!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            markComplete={markComplete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
