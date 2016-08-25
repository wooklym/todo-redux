import React from 'react'
import ReactDOM from 'react-dom'

export default class FilterLink extends React.Component {
  render() {
    const { currentFilter, filter, children, setVisibilityFilter } = this.props
    return (
      <a
        href='#'
        onClick={(e) => {
          e.preventDefault()
          setVisibilityFilter(filter)
        }}
        style={{
          cursor: currentFilter === filter ? 'not-allowed' : 'auto',
          pointerEvents: currentFilter === filter ? 'none' : 'inherit',
          textDecoration: currentFilter === filter ? 'blink' : 'underline'
        }}>
        {children}
      </a>
    )
  }
}
