import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

// CSS Styles
import './App.css'

// Components
import TodoContainer from './components/TodoContainer'

// Using strict mode to acivate checks and log warnings
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)