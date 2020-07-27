import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import Text from './components/Text/Text';

class App extends Component {
  state = {
    counter: 0,
    counterTrigger: false,
  };

  addCounter = () => {
    const { counter } = this.state;

    if (counter < 10) {
      this.setState({ counter: counter + 1 }, () => {
        if (this.state.counter === 10) this.setState({ counterTrigger: true })
      });
    }

  };

  render() {
    const { counter, counterTrigger } = this.state;

    return (
      <div className="app-container">
        <Counter text="Our counter is at " counter={counter}/>
        <Button classStyles="is-success" onClickFunction={this.addCounter}>Add Counter</Button>
        {counterTrigger
          ? <Text>You reached 10 in your counter. Sorry, you can't add more :-(</Text>
          : <Text>Click the button to add 1 to our counter :-)</Text>
        }
      </div>
    );
  };
}

export default App;
