
import React, { PureComponent, useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface Props {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
}

class TodoListHoc extends PureComponent<Props> {
    render() {
        const { todos, addTodo, toggleTodo } = this.props;
        return (
            <div>
                <h2>Todo List</h2>
                <AddTodo addTodo={addTodo} />
                <ul>
                    {todos && todos.length > 0 && todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                    ))}
                </ul>
            </div>
        );
    }
}

interface AddTodoProps {
    addTodo: (text: string) => void;
}

class AddTodo extends PureComponent<AddTodoProps> {
    state = {
        text: ''
    };

    handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: event.target.value });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.text.trim() !== '') {
            this.props.addTodo(this.state.text);
            this.setState({ text: '' });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

class TodoItem extends PureComponent<TodoItemProps> {
    handleToggle = () => {
        this.props.toggleTodo(this.props.todo.id);
    };

    render() {
        const { todo } = this.props;
        return (
            <li>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={this.handleToggle}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
            </li>
        );
    }
}

const withTodoState = (WrappedComponent: React.ComponentType<Props>) => {
    return class extends PureComponent<{}, { todos: Todo[] }> {
        state = {
            todos: []
        }
        addTodo = (text: string) => {
            const newTodo: Todo = {
                id: Date.now(),
                text,
                completed: false
            }
            this.setState({ todos: [...this.state.todos, newTodo] })
        }

        toggleTodo = (id: number) => {
            this.setState({
                todos: [...this.state.todos.map((todo: Todo) => {
                    if (id === todo.id) {
                        return ({ ...todo, completed: true })
                    }
                    else return todo
                })]
            })


        }

        render(): React.ReactNode {
            const { todos } = this.state
            return (
                <WrappedComponent todos={todos} addTodo={this.addTodo} toggleTodo={this.toggleTodo} />
            )
        }
    }
}

export default withTodoState(TodoListHoc);
