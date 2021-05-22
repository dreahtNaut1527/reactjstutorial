import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


// Components
import NavBar from './NavBar'
import Header from './Header'
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import About from '../functionBased/About'
import NotMatch from '../functionBased/NotMatch'

// Class named TodoContainer
class TodoContainer extends React.Component {
    // declaring a state(variables)
    state = {
        todos: []
    }

    // React Life Cycle Methods
    // created in VueJS / Form Load (Visual Basic)
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
        //     res.json().then(data => this.setState({ todos: data }))
        // })
        const temp = localStorage.getItem('todos')
        const loadedTools = JSON.parse(temp)
        if(loadedTools) {
            this.setState({ todos: loadedTools })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem('todos', temp)
        }
    }
    
    // End of React Life Cycle

    // Methods
    handleChange = (id) => {
        // Update set data toggled by child/grandchild component
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if(todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        })
    }

    addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }
    // End of Methods
    render() {
        return (
            // you can also use <React.Fragment></React.Fragment> tag
            // <>
            //     <h1>Hello React World</h1>
            //     <p>This is a react component</p>
            // </>
            // <ul>
            //     {this.state.todos.map(todo => (
            //     <li>{todo.title}</li>
            //     ))}
            // </ul>
            //</div>pass state data to props
            <>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <div className="container">
                            <div className="inner">
                                <Header />
                                <InputTodo addTodoProps={this.addTodoItem} />
                                <TodoList 
                                    todos={this.state.todos} 
                                    handleChangeProps={this.handleChange}
                                    deleteTodoProps={this.delTodo} 
                                    setUpdate={this.setUpdate}
                                />
                            </div>
                        </div>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </>
        )
    }
}

export default TodoContainer