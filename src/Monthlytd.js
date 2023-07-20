import React, { useReducer } from "react";
import "./Todo.css";

const initialState = {
  todos: [
    { id: 1, text: 'To-Do 1' },
    { id: 2, text: 'To-Do 2' },
    { id: 3, text: 'To-Do 3' }
  ]
};

// Redüktör fonksiyonumuz
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};


function Monthlytd() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    const todoText = prompt('Add New:');
    if (todoText) {
      dispatch({ type: 'ADD_TODO', payload: todoText });
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div>
      <h1 className="td-text"> Daily To-Do List</h1>
      <div className="td-container">
        <button className="an-button" onClick={handleAddTodo}>Add New</button>
        {state.todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Monthlytd;


