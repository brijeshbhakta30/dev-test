import { createSelector } from 'reselect';
import storage from '../../helper/storage';
import { addAsyncActivityProcessing, removeAsyncActivityProcessing } from './system';

export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const RESET_STORE = 'RESET_STORE';

const initialState = {
  userDetails: {},
};

export const loginUser = credentials => (dispatch, __, { userService }) => {
  dispatch(addAsyncActivityProcessing());
  return userService.loginUser(credentials).then((user) => {
    dispatch(removeAsyncActivityProcessing());
    storage.set('LOGGED_IN_USER', user);
    dispatch({
      type: SET_USER_DETAILS,
      payload: user,
    });
    return user;
  }).catch((error) => {
    dispatch(removeAsyncActivityProcessing());
    return Promise.reject(error);
  });
};

export const registerUser = credentials => (dispatch, __, { userService }) => {
  dispatch(addAsyncActivityProcessing());
  return userService.registerUser(credentials).then((user) => {
    dispatch(removeAsyncActivityProcessing());
    storage.set('LOGGED_IN_USER', user);
    dispatch({
      type: SET_USER_DETAILS,
      payload: user,
    });
    return user;
  }).catch((error) => {
    dispatch(removeAsyncActivityProcessing());
    return Promise.reject(error);
  });
};

export const logout = () => (dispatch) => {
  dispatch(addAsyncActivityProcessing());
  try {
    dispatch({ type: RESET_STORE });
    return storage.removeExceptUsers();
  } finally {
    dispatch(removeAsyncActivityProcessing());
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

const userSelector = state => state.user;

export const getUserSelector = createSelector(
  userSelector,
  state => state.userDetails,
);
