import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        const { onCompleteTodo, onRemoveTodo, todo, } = this.props;

        const {
            id = '',
            name = '',
            completed = false,
        } = todo;

        return (
            <>
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
            </>
        );
    };
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoItem;
