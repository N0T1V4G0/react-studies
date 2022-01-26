export const getIngredients = async () => {
  const response = await fetch(
    'https://react-ingredients-17014-default-rtdb.firebaseio.com/ingredients.json',
  );
  return await response.json();
};

export const postIngredients = async (ingredient) => {
  const response = await fetch(
    'https://react-ingredients-17014-default-rtdb.firebaseio.com/ingredients.json',
    {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'aplication/json' },
    },
  );
  return await response.json();
};
