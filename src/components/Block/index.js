import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlock } from '../../actions';
import { withRouter } from 'react-router'
import './style.css';

class Block extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    var hash = nextProps.match.params.hash;
    this.props.fetchBlock(hash);
  }

  componentDidMount() {
    console.log('componentDidMount');
    var hash = this.props.match.params.hash;
    this.props.fetchBlock(hash);
  }

  render() {

    if (!this.props.block) {
      return (
        <div className="Block">
          <h2>Block Info</h2>
        </div>
      );
    } else {
      console.log('Rendering block', this.props.block);
    }

    const block = this.props.block;
    const difficulty = parseInt(block.difficulty, 10);
    const difficultyTotal = parseInt(block.totalDifficulty, 10);
    const blockTimestamp = Date(parseInt(block.timestamp, 10)).toString();
    const blockTransactions = '';// parseInt(block.transactions.slice().length, 10);

    return (
      <div className="Block">
        <h2>Block Info</h2>
        <div>
          <table>
            <tbody>
              <tr><td className="tdLabel">Height: </td><td>{block.number}</td></tr>
              <tr><td className="tdLabel">Timestamp: </td><td>{blockTimestamp}</td></tr>
              <tr><td className="tdLabel">Transactions: </td><td>{blockTransactions}</td></tr>
              <tr><td className="tdLabel">Hash: </td><td>{block.hash}</td></tr>
              <tr>
                <td className="tdLabel">Parent hash: </td>
                <td>
                  <Link to={`../block/${block.parentHash}`}>
                    {block.parentHash}
                  </Link>
                </td>
              </tr>
              <tr><td className="tdLabel">Nonce: </td><td>{block.nonce}</td></tr>
              <tr><td className="tdLabel">Size: </td><td>{block.size} bytes</td></tr>
              <tr><td className="tdLabel">Difficulty: </td><td>{difficulty}</td></tr>
              <tr><td className="tdLabel">Difficulty: </td><td>{difficultyTotal}</td></tr>
              <tr>
                <td className="tdLabel">Gas Limit: </td>
                <td>{block.gasLimit}</td>
              </tr>
              <tr>
                <td className="tdLabel">Gas Used: </td>
                <td>{block.gasUsed}</td>
              </tr>
              <tr>
                <td className="tdLabel">Sha3Uncles: </td>
                <td>{block.sha3Uncles}</td>
              </tr>
              <tr>
                <td className="tdLabel">Extra data: </td>
                <td>{block.extraData}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  console.log('Block mapStateToProps state', state);
  console.log('Block mapStateToProps ownProps', ownProps);
  return {
    block: state.block,
  };
}

export default withRouter(connect(mapStateToProps, { fetchBlock })(Block));
