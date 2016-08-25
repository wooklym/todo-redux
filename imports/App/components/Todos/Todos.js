import React from 'react'
import ReactDom from 'react-dom'
import TodoList from './TodoList'

export default class Todos extends React.Component {
  render() {
    const { todos, onTodoClick, visibilityFilter, addTodo, toggleTodo} = this.props
    const visibleTodos = this._getVisibleTodos(todos, visibilityFilter.filter)

    return (
      <div>
        <input ref={node => {
          this.input = node
        }} />

        <button onClick={() => {
          addTodo(this.input.value)
          this.input.value = ''
        }}>
          ADD Todo
        </button>

        <TodoList
          todos={visibleTodos}
          onTodoClick={toggleTodo} />
      </div>
    )
  }

  _getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }
}
