import React from 'react'
import ReactDom from 'react-dom'

export default class Todo extends React.Component {
  render() {
    const { text, completed, onClick } = this.props
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration:
            completed ?
              'line-through' :
              'none'
        }}>
        {text}
      </li>
    )
  }
}
