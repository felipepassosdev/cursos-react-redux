import { createStore } from 'redux'
import { cousers } from './reducer'
// STORE
const store = createStore(cousers)

export default store