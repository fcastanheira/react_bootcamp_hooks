import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: ''
    };

    handleInputChange = inputValue => {
        const lastCharacter = inputValue.charAt(inputValue.length - 1);

        if ( lastCharacter === '.') {
            return;
        }

        this.setState({ name: inputValue });
    }

    handleAddTodo = (todoName) => {
        const newTodo = {
            id: Math.random(),
            name: todoName,
            completed: false,
        };

        // add the new TodoItem to the list
    };

    render() {
        const { name } = this.state;

        return (
            <div className="form">
                <button
                    className="input-button"
                    type="button"
                    onClick={() => this.handleAddTodo(name)}
                >
                    { 'Add Todo' }
                </button>
                <input
                    className="input-text"
                    type="text"
                    name={'text'}
                    onChange={(event) => this.handleInputChange(event.target.value)}
                    value={name}
                />
            </div>
        );
    }
}

export default Form;
