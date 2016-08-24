import React from 'react'
import ReactDom from 'react-dom'

export default class App extends React.Component {
  render() {
    const { todos, addTodo, toggleTodo } = this.props
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
            todos.map(todo =>
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
                }}
                >
                {todo.text}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
