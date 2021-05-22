import React from 'react'

// Components
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    render() {
        return (
            // Get the data from parent using props
            <ul>
                {this.props.todos.map(todo => (
                    // 
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                        setUpdate={this.props.setUpdate}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList