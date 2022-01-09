import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProduceDept extends Component {
  render() {
    const { produceData } = this.props;
    // console.log(produceData);
    const produceProducts = produceData.map((item, i) => (
      <li key={i}>
        {item.name} : {item.quantity} unidades
      </li>
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
