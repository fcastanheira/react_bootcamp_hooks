import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component{

    state = {
        todoList: [
            {
                id: Math.random(),
                name: 'Prepare my presentation',
                completed: true,
            },
            {
                id: Math.random(),
                name: 'Do my presentation',
                completed: false,
            },
        ],
    };

    handleCompleteTodo = (todoId) => {
        const newTodoList = this.state.todoList.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({ todoList: newTodoList });
    };

    handleRemoveTodo = (todoId) => {
        const newTodoList = this.state.todoList
            .filter(({ id }) => id !== todoId);

        this.setState({ todoList: newTodoList });
    };

    render() {
        return (
            <div className="list-wrapper">
                <div className="list">
                    {
                        this.state.todoList.map(todoItem => (
                            <TodoItem
                                key={todoItem.id}
                                item={todoItem}
                                onCompleteTodo={this.handleCompleteTodo}
                                onRemoveTodo={this.handleRemoveTodo}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;
