import { FETCH_BLOCKS } from '../actions/types';

export default function(state = [], action) {
  console.log('blocksReducer state', state);
  console.log('blocksReducer action', action);
  switch (action.type) {
    case FETCH_BLOCKS:
      return action.payload;
    default:
      return state;
  }
}
