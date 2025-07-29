"use client";
import React, { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ClientComponent = (props: { todos: Todo[] }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Client Component</h1>
      <p className="text-lg mb-4">
        Count: <span className="font-semibold">{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Increment
      </button>
      <div className="mt-6 space-y-4">
        {props.todos.map((todo) => (
          <div
            key={todo.id}
            className="p-4 border rounded shadow-sm bg-white hover:shadow-md transition"
          >
            <h1 className="text-lg font-semibold">{todo.title}</h1>
            <p
              className={`text-sm mt-2 ${
                todo.completed ? "text-green-600" : "text-red-600"
              }`}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientComponent;
