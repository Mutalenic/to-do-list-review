import React from 'react';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <p className="text-gray-600">Start building your todo list using Tailwind CSS!</p>
        <a
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 inline-block"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
