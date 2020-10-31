import React, {useState, useEffect} from 'react';

import './App.css';
import Header from "./components/header/Header";
import TodoList from "./components/list/TodoList";
import Form from "./components/form/Form";
import {useFetch} from "./components/customHooks/useFetch";

function App() {
    const list = useFetch('https://jsonplaceholder.typicode.com/users/1/todos');
    const [todoList, setTodoList] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        console.log('passing on the useEffect');
        setTodoList(list);
    }, [list]);


    const handleInputChange = inputValue => {
        const lastCharacter = inputValue.charAt(inputValue.length - 1);

        if (lastCharacter === '.') {
            return;
        }

        setTodoTitle(inputValue);
    }

    const handleAddTodo = (todoTitle) => {
        const newTodo = {
            id: Math.random(),
            title: todoTitle,
            completed: false,
        };

        const newTodoList = [
            ...todoList,
            newTodo,
        ];

        setTodoList(newTodoList);
        setTodoTitle('');
    };

    const handleCompleteTodo = (todoId) => {
        const newTodoList = todoList.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        setTodoList(newTodoList);
    };

    const handleRemoveTodo = (todoId) => {
        const newTodoList = todoList
            .filter(({id}) => id !== todoId);
        setTodoList(newTodoList);
    };


    console.log('passing on render');

    return (
        <div className="app">
            <Header>
                {'Refactoring code with Hooks'}
            </Header>

            <div className="overview-wrapper">
                <TodoList
                    onCompleteTodo={handleCompleteTodo}
                    onRemoveTodo={handleRemoveTodo}
                    list={todoList}
                />
                <Form
                    onInputChange={handleInputChange}
                    onAddTodo={handleAddTodo}
                    name={todoTitle}
                />
            </div>
        </div>
    );

}

export default App;
