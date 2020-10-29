import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    render() {
        const {
            onCompleteTodo,
            onRemoveTodo,
            item,
        } = this.props;

        const {
            id = '',
            name = '',
            completed = false,
        } = item;

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
    };
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoItem;
