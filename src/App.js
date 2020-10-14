import React, {Component} from 'react';

import './App.css';
import Header from "./components/header/Header";

class App extends Component {

    render() {
        return (
            <div className="app">
                <Header cenas={""} />
                <div className="header">
                    MyTodo list
                </div>
                <div className="overview-wrapper">
                    <div className="list-wrapper">
                        <div className="list">
                            <div className="list-item">
                                <div className="item">
                                    <input type="checkbox" onChange={() => {}}/>
                                    <div className="item-name completed"> Prepare my presentation </div>
                                </div>
                                <button
                                    className="delete-button"
                                    type="button"
                                    onClick={() => {}}
                                >
                                    X
                                </button>
                            </div>
                            <div className="list-item">
                                <div className="item">
                                    <input type="checkbox" onChange={() => {}}/>
                                    <div className="item-name"> Do my presentation </div>
                                </div>
                                <button
                                    className="delete-button"
                                    type="button"
                                    onClick={() => {}}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <button className="input-button" type="button" onClick={() => {}}>
                            Add item
                        </button>
                        <input
                            className="input-text"
                            type="text"
                            name={'text'}
                            onChange={() => {}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
