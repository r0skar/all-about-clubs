import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { Club } from './types'

export enum SortOrder {
  NAME = 'name',
  VALUE = 'value'
}

export enum Status {
  FAILED = 'failed',
  FETCHED = 'fetched',
  FETCHING = 'fetching'
}

interface State {
  status: Status
  content: Club[]
  appTitle: string
  sortOrder: SortOrder
}

type Action =
  | { type: 'setAppTitle'; title: string }
  | { type: 'setContent'; content: Club[] }
  | { type: 'setStatus'; status: Status }
  | { type: 'setSortOrder'; order: SortOrder }

const initialState: State = {
  content: [],
  appTitle: '',
  status: Status.FETCHING,
  sortOrder: SortOrder.NAME
}

const Context = createContext({} as { state: State; dispatch: React.Dispatch<Action> })

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setAppTitle':
      return { ...state, appTitle: action.title }
    case 'setContent':
      return { ...state, content: action.content }
    case 'setStatus':
      return { ...state, status: action.status }
    case 'setSortOrder':
      return { ...state, sortOrder: action.order }
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    let sortedClubs!: Club[]

    switch (state.sortOrder) {
      case SortOrder.VALUE:
        sortedClubs = state.content.sort((a, b) => (a.value === b.value ? 0 : a.value < b.value ? 1 : -1))
        break
      case SortOrder.NAME:
      default:
        sortedClubs = state.content.sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
    }

    dispatch({ type: 'setContent', content: sortedClubs })
  }, [state.sortOrder, state.content, dispatch])

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export const useStore = () => {
  return useContext(Context)
}
