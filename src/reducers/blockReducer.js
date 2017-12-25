import { FETCH_BLOCK } from '../actions/types';

export default function(state = [], action) {
  console.log('blockReducer state', state);
  console.log('blockReducer action', action);
  switch (action.type) {
    case FETCH_BLOCK:
      return action.payload;
    default:
      return state;
  }
}
