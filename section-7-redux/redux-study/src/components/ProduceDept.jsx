import React, { Component } from 'react';
import { connect } from 'react-redux';
import updProduceProducts from '../store/actions/updProduceProducts';

class ProduceDept extends Component {
  incrementProducts = (operator, productIndex) => {
    if (operator === '+') {
      updProduceProducts();
    } else if (operator === '-') {
    }
  };

  render() {
    const { produceData } = this.props;
    // console.log(produceData);
    const produceProducts = produceData.map((item, i) => (
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
        <h3>Produce Departament</h3>
        <ul>{produceProducts}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produceData: state.produce,
});

export default connect(mapStateToProps)(ProduceDept);
