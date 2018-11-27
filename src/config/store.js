import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';


const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middleware = []

const initialState = {

  data:  [
    {
      key: '1', 
      firstname: 'miguel', 
      lastname: 'vargas',
      age: '34',
      position: 'somewhere',
      team: 'dont like football...the real one',
      club: ' read the one before',
      area: 'floresta',
      marker: 'http://1.bp.blogspot.com/-nkzBWxmBEbM/UCDikvcMRPI/AAAAAAAAV_4/GuOzVNTmplI/s1600/nikola_tesla__the_inventor_of_the_modern_world_by_awolfillustrations-d55yvir.jpg',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Clara_Rockmore_2.JPG',
      modelurl: 'https://img1.cgtrader.com/items/636406/dc63d1f017/human-anatomy-complete-3d-model-obj-fbx-c4d-ma-mb.jpg',
      vuforianame: 'idk',
      assetbundle: 'https://www.google.com',


    } 
  ],
}

const store =  createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware),
));

export default store
