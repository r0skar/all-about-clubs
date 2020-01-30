import React, { createContext, useReducer, useContext } from 'react'
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
      return { ...state, order: action.order }
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export const useStore = () => {
  return useContext(Context)
}
