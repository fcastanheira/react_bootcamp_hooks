import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo, onCompleteTodo, }) => {

    return (
      <div className="list-wrapper">
          <div className="list">
              {
                 todoList.map(todo => (
                     <div className="list-item" key={todo.id}>
                         <TodoItem
                             todo={todo}
                             onCompleteTodo={onCompleteTodo}
                             onRemoveTodo={onRemoveTodo}
                         />
                     </div>
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
