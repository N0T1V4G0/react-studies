import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import data from './data';
import CardList from './components/CardList';

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
        <div>
          <CardList courseData={data} />
        </div>
      </div>
    );
  }
}

export default App;
