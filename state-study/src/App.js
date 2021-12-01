import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: '',
    };
  }

  controlValue = (event) => {
    this.setState({
      formValue: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form
          formValue={this.state.formValue}
          controlValue={this.controlValue}
        />
        <Card formValue={this.state.formValue} />
      </div>
    );
  }
}

export default App;
