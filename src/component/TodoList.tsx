import React, { Component, useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

interface State {
  todos: Todo[];
  newTodoText: string;
}

const TodoList = () => {

  const initState:State = {
      todos: [],
      newTodoText: ''
  }
  const [toDoState, setToDoState] = useState(initState)



 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setToDoState(prevState=>({...prevState, newTodoText: event.target.value}))
  }

  const addTodo = () => {
    const { newTodoText, todos } = toDoState;
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText
      };
      setToDoState({
        todos: [...todos, newTodo],
        newTodoText: ''
      });
    }
  }

  const { todos, newTodoText } = toDoState;

    return (
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          className='border border-2 border-slate-500'
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
export default TodoList;
