import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';


const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middleware = []

const initialState = {

  fields: {
    firstname: {
      value: 'miguel'
    },
    lastname: {
      value: 'popo'
    },
    age: {
      value: ''
    },
    position: {
      value: ''
    },
    team: {
      value: ''
    },
    club: {
      value: ''
    },
    area: {
      value: ''
    },
  },
  loading: false,
  imageUrl: ''
}

const store =  createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware),
));

export default store
