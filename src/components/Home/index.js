import _ from 'lodash';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlockNumber } from '../../actions';
import './style.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blockIds: [],
      blockHashes: [],
      blockNumber: null,
    };
  }

  // componentWillMount() {
  //   var blockNumber = web3.eth.blockNumber;
  //   console.log('blockNumber:', blockNumber);
  //   this.setState({
  //     blockNumber: blockNumber,
  //   });
  // }

  componentDidMount() {
    this.props.fetchBlockNumber();
  }

  renderBlocks() {
    var rows = [];
    _.each(this.props.blocks.ids, (value, index) => {
      rows.push(
        <tr key={index}>
          <td>{value}</td>
          <td>
            <Link to={`/block/${this.props.blocks.hash[index]}`}>
              {this.props.blocks.hash[index]}
            </Link>
          </td>
        </tr>
      );
    });
    return rows;
  }

  render() {
    return (
      <div className="Home">
      <h2>Home page</h2>
      Current Block: {this.props.blockNumber}
      <table>
      <thead><tr><th>Block No</th><th>Hash</th></tr></thead>
      <tbody>
        {this.renderBlocks()}
      </tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('Home mapStateToProps state', state);
  return {
    blockNumber: state.blockNumber,
    blocks: state.blocks,
  };
}

export default connect(mapStateToProps, { fetchBlockNumber })(Home);
