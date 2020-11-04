import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = ({list, onRemoveTodo, onCompleteTodo}) => {

    return (
        <div className="list-wrapper">
            <div className="list">
                {
                    list.map(todoItem => (
                        <TodoItem
                            key={todoItem.id}
                            item={todoItem}
                            onCompleteTodo={onCompleteTodo}
                            onRemoveTodo={onRemoveTodo}
                        />
                    ))
                }
            </div>
        </div>
    );

}

TodoList.propTypes = {
    list: PropTypes.array,
    onRemoveTodo: PropTypes.func,
    onCompleteTodo: PropTypes.func,
}

export default TodoList;
