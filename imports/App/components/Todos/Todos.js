import React from 'react'
import ReactDom from 'react-dom'

export default class Todos extends React.Component {
  render() {
    const { todos, visibilityFilter, addTodo, toggleTodo} = this.props
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

        <ul>
          {
            visibleTodos.map(todo =>
              <li
                key={todo.id}
                onClick={() => {
                  toggleTodo(todo.id)
                }}
                style={{
                  textDecoration:
                    todo.completed ?
                      'line-through' :
                      'none'
                }}>
                {todo.text}
              </li>
            )
          }
        </ul>
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
