import React from 'react';
import { useState } from 'react/cjs/react.development';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const handleIngredientsSubmit = (ingredient) => {
    setIngredients((prevState) => {
      return [...prevState, { ...ingredient, id: Math.random().toString() }];
    });
  };

  return (
    <div className="App">
      <IngredientForm handleIngredientsSubmit={handleIngredientsSubmit} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
