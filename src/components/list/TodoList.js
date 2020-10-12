import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class TodoList extends Component{

    render() {
        const {
            todoList,
            onRemoveTodo,
            onCompleteTodo,
        } = this.props;

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
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onCompleteTodo: PropTypes.func.isRequired,
}

export default TodoList;
