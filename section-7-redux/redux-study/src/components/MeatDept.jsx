import React, { Component } from 'react';
import { connect } from 'react-redux';
import updMeatProducts from '../store/actions/updMeatProducts';

class MeatDept extends Component {
  incrementProducts = (operator, productIndex) => {
    if (operator === '+') {
      updMeatProducts();
    } else if (operator === '-') {
    }
  };

  render() {
    const { meatData } = this.props;
    // console.log(meatData);
    const meatProducts = meatData.map((item, i) => (
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
        <h3>Meat Departament</h3>
        <ul>{meatProducts}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  meatData: state.meat,
});

export default connect(mapStateToProps)(MeatDept);
