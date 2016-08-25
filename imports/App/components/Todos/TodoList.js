import React from 'react'
import ReactDom from 'react-dom'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const { todos, onTodoClick} = this.props

    return (
      <ul>
        {
          todos.map(todo =>
            <Todo
              key={todo.id}
              onClick={() => onTodoClick(todo.id)}
              {...todo} />
          )
        }
      </ul>
    )
  }
}
