import React, {Component} from 'react';

import './App.css';
import Header from "./components/header/Header";
import TodoList from "./components/list/TodoList";
import Form from "./components/form/Form";

class App extends Component {

    state = {
        todoName: '',
        todoList: [
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
        ],
    };

    handleInputChange = inputValue => {
        const lastCharacter = inputValue.charAt(inputValue.length - 1);

        if ( lastCharacter === '.') {
            return;
        }

        this.setState({ todoName: inputValue });
    }

    handleAddTodo = (todoName) => {
        const newTodo = {
            id: Math.random(),
            name: todoName,
            completed: false,
        };

        const newTodoList = [
            ...this.state.todoList,
            newTodo,
        ];

        this.setState({
            todoList: newTodoList,
            todoName: '',
        });
    };

    handleCompleteTodo = (todoId) => {
        const newTodoList = this.state.todoList.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({ todoList: newTodoList });
    };

    handleRemoveTodo = (todoId) => {
        const newTodoList = this.state.todoList
            .filter(({ id }) => id !== todoId);

        this.setState({ todoList: newTodoList });
    };

    render() {
        const { todoName, todoList, } = this.state;

        return (
            <div className="app">
                <Header>
                    { 'My title passed as Children' }
                </Header>

                <div className="overview-wrapper">
                    <TodoList
                        onCompleteTodo={this.handleCompleteTodo}
                        onRemoveTodo={this.handleRemoveTodo}
                        list={todoList}
                    />
                    <Form
                        onInputChange={this.handleInputChange}
                        onAddTodo={this.handleAddTodo}
                        name={todoName}
                    />
                </div>
            </div>
        );
    }
}

export default App;
