import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onRemoveTodo, onCompleteTodo, }) => {

    return (
        <div className="list-wrapper">
            <div className="list">
                {
                    todoList.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
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
    todoList: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
}

export default TodoList;
