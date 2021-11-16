import React from 'react';

class Card extends React.Component {
  render() {
    const { formValue } = this.props;
    return (
      <form action="">
        <label htmlFor="">
          Espelho:
          <input type="text" value={formValue} />
        </label>
      </form>
    );
  }
}

export default Card;
