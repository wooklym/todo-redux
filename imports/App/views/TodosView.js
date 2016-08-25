import React from 'react'
import ReactDOM from 'react-dom'
import { Todos } from '../components/Todos'
import { TodosFilter } from '../components/TodosFilter'

export default class TodosView extends React.Component {
  render() {
    return (
      <div>
        <Todos {...this.props} />
        <TodosFilter {...this.props} />
      </div>
    )
  }
}
