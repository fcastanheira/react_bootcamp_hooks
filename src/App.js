import React, {useState, useEffect} from 'react';

import './App.css';
import Header from "./components/header/Header";
import TodoList from "./components/list/TodoList";
import Form from "./components/form/Form";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoName, setTodoName] = useState('');

    useEffect(() => {
        console.log('passing on the Did Mount');
        // async fetch()
        setTimeout(() => {
            setTodoList([
                {
                    id: Math.random(),
                    name: 'Prepare my presentation',
                    completed: true,
                },
                {
                    id: Math.random(),
                    name: 'Do my presentation',
                    completed: false,
                },
            ])
        }, 3000);
    }, []);


    const handleInputChange = inputValue => {
        const lastCharacter = inputValue.charAt(inputValue.length - 1);

        if (lastCharacter === '.') {
            return;
        }

        setTodoName(inputValue);
    }

    const handleAddTodo = (todoName) => {
        const newTodo = {
            id: Math.random(),
            name: todoName,
            completed: false,
        };

        const newTodoList = [
            ...todoList,
            newTodo,
        ];

        setTodoList(newTodoList);
        setTodoName('');
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
                {'My title passed as Children'}
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
                    name={todoName}
                />
            </div>
        </div>
    );

}

export default App;
