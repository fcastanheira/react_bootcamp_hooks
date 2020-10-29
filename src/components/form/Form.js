import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    render() {
        const {
            onInputChange,
            onAddTodo,
            name,
        } = this.props;

        return (
            <div className="form">
                <button
                    className="input-button"
                    type="button"
                    onClick={() => onAddTodo(name)}
                >
                    { 'Add Todo' }
                </button>
                <input
                    className="input-text"
                    type="text"
                    name={'text'}
                    onChange={(event) => onInputChange(event.target.value)}
                    value={name}
                />
            </div>
        );
    }
}

Form.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default Form;
