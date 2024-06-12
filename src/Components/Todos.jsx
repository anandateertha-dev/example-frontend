import React from 'react'
import  { useEffect, useState } from 'react';

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: "GET"
                });
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <>
            <div className="App">
                <h1>Todos Fetched</h1>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.title}</strong> {todo.completed ? "(Completed)" : "(Not Completed)"}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos