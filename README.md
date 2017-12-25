# ethexplorer
An Ethereum block explorer using React and web3 tutorial from https://www.codeooze.com/blockchain/ethereum-block-explorer-react-01/

# ganache
candy maple cake sugar pudding cream honey rich smooth crumble sweet treat

# geth
./initPrivateTestnet.sh
./startPrivateTestnet.sh

> personal.newAccount("potato")
"0x21204bcafebd6d9adb5541e22a736b67938ff118"
> miner.setEtherbase(web3.eth.accounts[0])
> eth.getBalance(eth.coinbase)
> miner.start()
> miner.stop()

admin.nodeInfo.enode
net.listening
net.peerCount
admin.peers
eth.coinbase
eth.getBalance(eth.coinbase)
personal
eth.accounts
miner.setEtherbase(web3.eth.accounts[0])
miner.setEtherbase(“0xae13d41d66af28380c7af6d825ab557eb271ffff”)
miner.start()
miner.stop()
miner.hashrate
eth.getBlock(0)
eth.getBlock(“latest”)
eth.blockNumber
web3.eth.getBlock(BLOCK_NUMBER).hash
eth.syncing
debug.verbosity(6) // highest logging level, 3 is default
