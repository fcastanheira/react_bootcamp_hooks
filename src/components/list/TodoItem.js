import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ onCompleteTodo, onRemoveTodo, todo, }) => {

    const {
        id = '',
        name = '',
        completed = false,
    } = todo;

    return (
        <div className="list-item" >
            <div className="item">
                <input
                    type="checkbox"
                    onChange={() => onCompleteTodo(id)}
                    checked={completed}
                />
                <div className={
                    `item-name ${completed ? 'completed' : ''}`
                }>
                    {name}
                </div>
            </div>
            <button
                className="delete-button"
                type="button"
                onClick={() => onRemoveTodo(id)}
            >
                X
            </button>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoItem;
