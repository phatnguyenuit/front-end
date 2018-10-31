import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  // Put reducers at here
  routing: routerReducer,
  form: formReducer,
});
