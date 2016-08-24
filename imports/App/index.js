import React from 'react'
import ReactDom from 'react-dom'

export default class App extends React.Component {
  render() {
    const { todos, addTodo } = this.props
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
              <li key={todo.id}>
                {todo.text}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
