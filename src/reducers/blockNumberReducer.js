import { FETCH_BLOCKNUMBER } from '../actions/types';

export default function(state = [], action) {
  console.log('blockNumberReducer state', state);
  console.log('blockNumberReducer action', action);
  switch (action.type) {
    case FETCH_BLOCKNUMBER:
      return action.payload;
    default:
      return state;
  }
}
