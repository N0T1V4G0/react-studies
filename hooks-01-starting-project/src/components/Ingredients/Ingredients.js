import React, { useEffect, useState } from 'react';
import { getIngredients, postIngredients } from '../../API/API';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients().then((resData) => {
      const ingredientsArr = [];
      for (let key in resData) {
        ingredientsArr.push({
          id: key,
          title: resData[key].title,
          amount: resData[key].amount,
        });
      }
      setIngredients(ingredientsArr);
    });
  }, []);

  const handleRemoveIngredient = (id) => {
    setIngredients((prevState) => {
      const ingredientsAfterRm = prevState.filter(
        (ingredient) => ingredient.id !== id,
      );
      return ingredientsAfterRm;
    });
  };

  const handleIngredientsSubmit = async (ingredient) => {
    const responseData = await postIngredients(ingredient);
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
