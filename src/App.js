import React, {Component} from 'react';

import './App.css';
import Header from "./components/header/Header";
import TodoList from "./components/list/TodoList";
import Form from "./components/form/Form";

class App extends Component {

    render() {

        return (
            <div className="app">
                <Header>
                    { 'My title passed as Children' }
                </Header>
                <div className="overview-wrapper">
                    <TodoList />
                    <Form />
                </div>
            </div>
        );
    }
}

export default App;
