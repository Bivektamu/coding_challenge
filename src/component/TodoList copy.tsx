import React, { Component } from 'react';

interface Todo {
  id: number;
  text: string;
}

interface State {
  todos: Todo[];
  newTodoText: string;
}

class TodoList extends Component<{}, State> {

  constructor(props: {}) {
    // useState
    super(props);
    this.state = {
      todos: [],
      newTodoText: ''
    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

// handle change on input
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ newTodoText: event.target.value });
  }

  // add function
  addTodo() {
    const { newTodoText, todos } = this.state;
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText
      };
      this.setState({
        todos: [...todos, newTodo],
        newTodoText: ''
      });
    }
  }

  render() {
    const { todos, newTodoText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={this.handleInputChange}
          className='border border-2 border-slate-500'
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
