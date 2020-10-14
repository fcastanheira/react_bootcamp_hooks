import React, {Component} from 'react';

import './App.css';
import Header from "./components/header/Header";
import TodoList from "./components/list/TodoList";
import Form from "./components/form/Form";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoName: '',
            todoList: [],
        };

        console.log('passing on the constructor');
    }


    componentDidMount() {
        console.log('passing on the Did Mount');
        // async fetch()
        setTimeout(() => {
            this.setState({
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
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // auto save feature
    }

    handleTodoInputTextChange = inputValue => {
        this.setState({ todoName: inputValue});
    };

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
                    MyTodo List Children {todoList.length}
                    <button>Header button</button>
                </Header>

                <div className="overview-wrapper">
                    <TodoList
                        onCompleteTodo={this.handleCompleteTodo}
                        onRemoveTodo={this.handleRemoveTodo}
                        todoList={todoList}
                    />
                    <Form
                        onInputChange={this.handleTodoInputTextChange}
                        onAddTodo={this.handleAddTodo}
                        inputValue={todoName}
                        buttonText="Add Todo"
                    />
                </div>
            </div>
        );
    }
}

export default App;
