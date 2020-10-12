import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    render() {
        const {
            inputValue,
            onAddTodo,
            onInputChange,
            buttonText,
        } = this.props;

        return (
            <div className="form">
                <button
                    className="input-button"
                    type="button"
                    onClick={() => onAddTodo(inputValue)}
                >
                    {buttonText}
                </button>
                <input
                    className="input-text"
                    type="text"
                    name={'text'}
                    onChange={({ target }) => onInputChange(target.value)}
                    value={inputValue}
                />
            </div>
        );
    }
}

Form.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}

export default Form;
