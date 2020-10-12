import React, {Component} from 'react';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
    }

    handleInputTextChange() {
        //TODO handle the changes on the text input
    };

    handleAddTodo() {
        //TODO add a todo to the TodoList
    };

    handleDeleteTodo() {
        //TODO delete a todo from the TodoList
    };

    handleCompleteTodo() {
        //TODO mark a todo as completed
    };

    render() {
        return (
            <div className="app">
                <div className="header">
                    MyTodo list
                </div>
                <div className="overview-wrapper">
                    <div className="list-wrapper">
                        <div className="list">
                            <div className="list-item">
                                <div className="item">
                                    <input type="checkbox" onChange={this.handleCompleteTodo}/>
                                    <div className="item-name completed"> Prepare my presentation </div>
                                </div>
                                <button
                                    className="delete-button"
                                    type="button"
                                    onClick={this.handleDeleteTodo}
                                >
                                    X
                                </button>
                            </div>
                            <div className="list-item">
                                <div className="item">
                                    <input type="checkbox" onChange={this.handleCompleteTodo}/>
                                    <div className="item-name"> Do my presentation </div>
                                </div>
                                <button
                                    className="delete-button"
                                    type="button"
                                    onClick={this.handleDeleteTodo}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <button className="input-button" type="button" onClick={this.handleAddTodo}>
                            Add item
                        </button>
                        <input
                            className="input-text"
                            type="text"
                            name={'text'}
                            onChange={this.handleInputTextChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
