import React, { Component } from 'react';
import { connect } from 'react-redux';

class FrozenDpt extends Component {
  render() {
    console.log(this.props.frozenData);
    return (
      <div>
        <h1>Sanity Check - Frozen</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  frozenData: state.frozen,
});

export default connect(mapStateToProps)(FrozenDpt);
