import { combineReducers } from 'redux';
import blockNumberReducer from './blockNumberReducer';
import blocksReducer from './blocksReducer';
import blockReducer from './blockReducer';

export default combineReducers({
  blockNumber: blockNumberReducer,
  blocks: blocksReducer,
  block: blockReducer,
});
