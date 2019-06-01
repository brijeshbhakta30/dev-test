export const INCREMENT_ACTIVITY_COUNT = 'INCREMENT_ACTIVITY_COUNT';
export const DECREMENT_ACTIVITY_COUNT = 'DECREMENT_ACTIVITY_COUNT';

const initialState = {
  count: 0,
  isProcessing: false,
};

export const addAsyncActivityProcessing = () => ({ type: INCREMENT_ACTIVITY_COUNT });

export const removeAsyncActivityProcessing = () => ({ type: DECREMENT_ACTIVITY_COUNT });

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ACTIVITY_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT_ACTIVITY_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};
