import React, { Component } from 'react';
import { connect } from 'react-redux';

class FrozenDpt extends Component {
  render() {
    const { frozenData } = this.props;
    // console.log(frozenData);
    const frozenProducts = frozenData.map((item, i) => (
      <li key={i}>
        {item.name} : {item.quantity} unidades
      </li>
    ));

    return (
      <div>
        <h3>Frozen Departament</h3>
        <ul>{frozenProducts}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    frozenData: state.frozen,
  };
};

export default connect(mapStateToProps)(FrozenDpt);
