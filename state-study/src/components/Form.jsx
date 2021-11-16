import React from 'react';

class Form extends React.Component {
  render() {
    const { controlValue, formValue } = this.props;
    return (
      <form action="">
        <label htmlFor="">
          Original:
          <input type="text" value={formValue} onChange={controlValue} />
        </label>
      </form>
    );
  }
}

export default Form;
