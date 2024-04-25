



import React, { useCallback, useEffect, useState } from 'react';

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

const TodoListHoc = ({ todos, addTodo, toggleTodo }: Props) => {

    return (
        <div>
            <h2>Tod List</h2>
           
            <AddTodo addTodo={addTodo} />
            <ul>
                {todos && todos.length > 0 && todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
}

interface AddTodoProps {
    addTodo: (text: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
    const [text, setText] = useState('')

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
    const handleToggle = () => {
        toggleTodo(todo.id);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </li>
    );
}

const withTodoState = (WrappedComponent: React.ComponentType<Props>) => {
    return () => {
        const [todos, setTodos] = useState<Todo[]>([])

        const addTodo = useCallback((text: string) => {
            const newTodo: Todo = {
                id: Date.now(),
                text,
                completed: false
            }
            setTodos(prev => [...prev, newTodo])
        }, [])


        const toggleTodo = useCallback((id: number) => {
            // const tempTodos = [...todos.map(todo=>({...todo}))] 
            // console.log(tempTodos);
            // console.log(id);

            // const toDo = tempTodos.filter(todo=>todo.id === id)
            // console.log(toDo)
            // toDo.completed = !toDo.completed
            // console.log(toDo);

            setTodos([...todos.map((todo: Todo) =>

            ({
                ...todo,
                completed: id === todo.id ? !todo.completed : todo.completed

            })
            )])

        }, [todos])

        useEffect(() => { console.log(todos) }, [todos])

        return (
            <WrappedComponent todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />
        )
    }
}

export default withTodoState(TodoListHoc);
