import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded p-8">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
