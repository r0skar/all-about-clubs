import React, { createContext, useReducer, useContext } from 'react'
import { Club } from './types'

export enum SortOrder {
  NAME_ASC = 'name',
  VALUE_DESC = 'value'
}

export enum Status {
  FAILED = 'failed',
  FETCHED = 'fetched',
  FETCHING = 'fetching'
}

interface State {
  status: Status
  content: Club[]
  sortOrder: SortOrder
}

type Action =
  | { type: 'setContent'; content: Club[] }
  | { type: 'setStatus'; status: Status }
  | { type: 'setSortOrder'; order: SortOrder }

const initialState: State = {
  content: [],
  status: Status.FETCHING,
  sortOrder: SortOrder.NAME_ASC
}

const Context = createContext(([] as unknown) as [State, React.Dispatch<Action>])

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setStatus':
      return { ...state, status: action.status }
    case 'setContent':
      return { ...state, content: action.content }
    case 'setSortOrder':
      switch (action.order) {
        case SortOrder.VALUE_DESC:
          return {
            ...state,
            sortOrder: action.order,
            content: [...state.content].sort((a, b) => (a.value === b.value ? 0 : a.value < b.value ? 1 : -1))
          }
        case SortOrder.NAME_ASC:
        default:
          return {
            ...state,
            sortOrder: action.order,
            content: [...state.content].sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
          }
      }
    default:
      throw new Error('Unknown action type.')
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const store = useReducer(Reducer, initialState)
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useStore = () => {
  return useContext(Context)
}
