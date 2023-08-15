import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const blog = createStore(rootReducer, applyMiddleware(thunk));

export default blog;
