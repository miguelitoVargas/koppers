import { SEARCH_ACTION, UPLOAD_DATA, GET_DATA } from '../actions/index'

function rootReducer(state, action) {
  switch(action.type) {

    case SEARCH_ACTION:
      console.log('en reducer', action.payload)
    return {}

    case UPLOAD_DATA:
      console.log('upload in reducer', action.payload)
    return {}

    case GET_DATA:
      const { data } = action 
    return { data }
    
    default:
    return { ...state }
  }
}

export default rootReducer;
