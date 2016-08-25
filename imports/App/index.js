import React from 'react'
import ReactDom from 'react-dom'
import { TodosView } from './views'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodosView {...this.props} />
      </div>
    )
  }
}
