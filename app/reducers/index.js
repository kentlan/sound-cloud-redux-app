import {combineReducers} from 'redux'
import player from './player'
import playlist from './playlist'
import search from './search'

const reducer = combineReducers({
  player,
  playlist,
  search
})

export default reducer
