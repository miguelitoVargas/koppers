import { SEARCH_ACTION } from '../actions/index'

function rootReducer(state, action) {
  switch(action.type) {

    case SEARCH_ACTION:
      console.log('en reducer', action.data)
    return {}
    
    default:
    return { ...state }
  }
}

export default rootReducer;
