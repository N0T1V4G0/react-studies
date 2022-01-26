import React from 'react';
import { useState } from 'react/cjs/react.development';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const handleRemoveIngredient = (id) => {
    setIngredients((prevState) => {
      const ingredientsAfterRm = prevState.filter(
        (ingredient) => ingredient.id !== id,
      );
      return ingredientsAfterRm;
    });
  };
  const handleIngredientsSubmit = async (ingredient) => {
    const response = await fetch(
      'https://react-ingredients-17014-default-rtdb.firebaseio.com/ingredients.json',
      {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: { 'Content-Type': 'aplication/json' },
      },
    );
    const responseData = await response.json();
    console.log(responseData);
    setIngredients((prevState) => {
      return [...prevState, { ...ingredient, id: responseData.name }];
    });
  };

  return (
    <div className="App">
      <IngredientForm handleIngredientsSubmit={handleIngredientsSubmit} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={handleRemoveIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
