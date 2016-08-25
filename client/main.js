import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, dispatch, subscribe } from 'redux'
import { Meteor } from 'meteor/meteor'

import App from '../imports/App'


const todo = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        completed: state.id === action.id ? !state.completed : state.completed
      }
    default:
      return state
  }
}

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
        return state
  }
}

const visibilityFilter = (state={filter: 'SHOW_ALL'}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        filter: action.filter
      }
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension())

let todoId = 0

const addTodo = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: todoId++,
    text: text,
    completed: false
  })
}

const toggleTodo = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}

const setVisibilityFilter = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}

const render = () => {
  ReactDOM.render(
    <App {...store.getState()}
      addTodo={addTodo}
      toggleTodo={toggleTodo}
      setVisibilityFilter={setVisibilityFilter}
      />,
    document.getElementById('root')
  )
}

store.subscribe(render)

Meteor.startup(() => {
  render()
})
