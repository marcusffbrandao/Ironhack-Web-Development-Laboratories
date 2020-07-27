import React, { useState, useEffect } from 'react';
import api from '../../../api/api';
import { FoodCard, AddForm, SearchForm, Cart } from '../../../components';

const Foods = (props) => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => async () => {
    const { data } = await api({
      url: `${process.env.REACT_APP_API_FOODS}/foods`,
      method: 'GET',
    });

    setFoods(data.slice());
    setFilteredFoods(data.slice());
  }, []);

  const filterFoods = (name) => {
    const newFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(name.toLowerCase());
    });

    setFilteredFoods(newFoods);
  }

  const displayFoods = (foods) => {
    return foods.map((food, idx) => {
      return <FoodCard key={idx} name={food.name} calories={food.calories} img={food.image} />
    });
  };
  console.log('COMPONENTE CARREGOU')
  return (
    <div>
       {/* <AddForm handleSubmit={this.handleSubmit} /> */}
        <SearchForm search={filterFoods} />
        <div className="content-container">
          <div className="foods-container">
            {displayFoods(filteredFoods)}
          </div>
          <div className="cart-container">
            <Cart />
          </div>
        </div>
    </div>
  );
};

export default Foods;
