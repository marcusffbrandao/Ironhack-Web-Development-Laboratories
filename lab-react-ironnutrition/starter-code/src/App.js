import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox/FoodBox';
import FormAdd from './components/FormAdd/FormAdd';
import Search from './components/Search/Search';
import SelectedFoods from './components/SelectedFoods/SelectedFoods'

class App extends Component {
  state = {
    foods: [],
    filteredFoods: []
  }

  componentDidMount() {
    this.setState({
      foods: foods.slice(0),
      filteredFoods: foods.slice(0),
    });
  }

  addFoodBox = (data) => {
    const { foods, filteredFoods } = this.state;
    foods.push(data);
    filteredFoods.push(data);
    this.setState({ foods, filteredFoods })
  }

  filterFoods = (filter) => {
    const { foods } = this.state;
    const { name } = filter;

    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(name);
    });

    this.setState({
      filteredFoods,
    })
  }

  render() {
    
    return (
      <div className="App">
        <FormAdd funcAddFood={this.addFoodBox} />
        <Search filterFunction={this.filterFoods}/>
        <div className="columns">
          <div className="column">
            <FoodBox foods={this.state.filteredFoods}/>
          </div>
          <div className="column">
            <SelectedFoods />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
