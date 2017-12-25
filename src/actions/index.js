import Web3 from 'web3';
import { FETCH_BLOCKNUMBER, FETCH_BLOCKS, FETCH_BLOCK } from './types';
//var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/afw8WxnS3H03EgA0HaAl'));

export const fetchBlockNumber = () => async dispatch => {
  console.log('fetchBlockNumber action');
  const blockNumber = await web3.eth.getBlockNumber();
  console.log('blockNumber', blockNumber);
  dispatch({ type: FETCH_BLOCKNUMBER, payload: blockNumber });

  var maxBlocks = 10;
  if (blockNumber < maxBlocks) {
    maxBlocks = blockNumber;
  }

  var blocks = {
    ids: [],
    hash: [],
  };

  for (var i = 0; i < maxBlocks; i++) {
    var block = await web3.eth.getBlock(blockNumber - i);
    console.log('Got block', block);
    blocks.ids.push(block.number);
    blocks.hash.push(block.hash);
  }

  dispatch({ type: FETCH_BLOCKS, payload: blocks });

};

export const fetchBlock = (hash) => async dispatch => {
  console.log('fetchBlock action', hash);
  const block = await web3.eth.getBlock(hash);
  console.log('Got block', block);

  dispatch({ type: FETCH_BLOCK, payload: block });
};
