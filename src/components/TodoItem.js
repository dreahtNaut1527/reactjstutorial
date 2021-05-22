import React from 'react'

// CSS Styles
import styles from './TodoItem.modules.css'

// Class based component
class TodoItem extends React.Component {
    // declaring a state(variables)
    state = {
        editing: false
    }

    // Methods
    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdatedDone = (event) => {
        if(event.key === 'Enter') {
            this.setState({ editing: false })
        }
    }

    // End of Methods
    render() {
        // render variables 
        let viewMode = {}
        let editMode = {}

        if(this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        const completeStyle = {
            fontStyle: 'italic',
            color: '#595959',
            opacity: 0.4,
            textDecoration: 'line-through'
        }

        const { completed, id, title } = this.props.todo

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox" 
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                    </button>
                    <span style={completed ? completeStyle : null}>
                        {title}
                    </span>
                </div>
                <input 
                    type="text" 
                    style={editMode} 
                    className={styles.textInput} 
                    value={title}
                    onChange={e => this.props.setUpdate(e.target.value, id)}
                    onKeyDown={this.handleUpdatedDone}
                />
            </li>
        )
    }
}

// Function based component
// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem