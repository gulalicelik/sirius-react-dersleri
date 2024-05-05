import { CountReducer } from "./reducer";
import { createStore } from 'redux'

export const Store = createStore(CountReducer)