import { combineReducers } from 'redux';
import blockNumberReducer from './blockNumberReducer';
import blocksReducer from './blocksReducer';

export default combineReducers({
  blockNumber: blockNumberReducer,
  blocks: blocksReducer,
});
