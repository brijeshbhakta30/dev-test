import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import system from './system';
import user, { RESET_STORE } from './user';

const appReducer = combineReducers({
  user,
  system,
  form,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  if (action.type === RESET_STORE) {
    finalState = {};
  }
  return finalState;
}
