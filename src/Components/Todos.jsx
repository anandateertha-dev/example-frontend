import React from 'react'
import { useEffect, useState } from 'react';

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
            <h1>Video playing</h1>
            <video controls width="600">
                <source src="/3571264-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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