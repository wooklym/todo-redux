import React from 'react'
import ReactDOM from 'react-dom'
import FilterLink from './FilterLink'

export default class TodosFilter extends React.Component {
  render() {
    const { visibilityFilter, setVisibilityFilter } = this.props
    return (
      <div>
        Show:
        {' '}
        <FilterLink
          currentFilter={visibilityFilter.filter}
          setVisibilityFilter={setVisibilityFilter}
          filter='SHOW_ALL'>
          All
        </FilterLink>
        {', '}
        <FilterLink
          currentFilter={visibilityFilter.filter}
          setVisibilityFilter={setVisibilityFilter}
          filter='SHOW_ACTIVE'>
          Active
        </FilterLink>
        {', '}
        <FilterLink
          currentFilter={visibilityFilter.filter}
          setVisibilityFilter={setVisibilityFilter}
          filter='SHOW_COMPLETED'>
          Completed
        </FilterLink>
      </div>
    )
  }
}
