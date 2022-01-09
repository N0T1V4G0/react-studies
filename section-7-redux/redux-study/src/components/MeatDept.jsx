import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeatDept extends Component {
  render() {
    const { meatData } = this.props;
    // console.log(meatData);
    const meatProducts = meatData.map((item, i) => (
      <li key={i}>
        {item.name} : {item.quantity} unidades
      </li>
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
