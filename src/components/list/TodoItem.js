import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    /*
        componentWillUnmount() {
           const { item } = props;
           alert(`The todo named -> ${item.title}, will be removed!`);
        }
    */
    const {
        onCompleteTodo,
        onRemoveTodo,
        item,
    } = props;

    const {
        id = '',
        title = '',
        completed = false,
    } = item;

    return (
        <div className="list-item">
            <div className="item">
                <input
                    type="checkbox"
                    onChange={() => onCompleteTodo(id)}
                    checked={completed}
                />
                <div className={
                    `item-name ${completed ? 'completed' : ''}`
                }>
                    {title}
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
    item: PropTypes.object.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoItem;
