import React, { Component } from 'react';
import { connect } from 'react-redux';
import updFrozenProducts from '../store/actions/updFrozenProducts';

class FrozenDpt extends Component {
  incrementProducts = (operator, productIndex) => {
    if (operator === '+') {
      updFrozenProducts();
    } else if (operator === '-') {
    }
  };

  render() {
    const { frozenData } = this.props;
    // console.log(frozenData);
    const frozenProducts = frozenData.map((item, i) => (
      <div key={i}>
        <li>
          {item.name} : {item.quantity} unidades
        </li>
        <input
          type="button"
          value="+"
          onClick={() => {
            this.incrementProducts('+', i);
          }}
        />
        <input type="button" value="-" />
      </div>
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
  // console.log(state);
  return {
    frozenData: state.frozen,
  };
};

export default connect(mapStateToProps)(FrozenDpt);
