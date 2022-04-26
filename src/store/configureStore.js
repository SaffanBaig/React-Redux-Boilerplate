import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer'


export default function configureStore(){
    const initialState = {};
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
      );
    
   return store
}
