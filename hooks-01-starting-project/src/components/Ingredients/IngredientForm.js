import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  const [nameInput, setNameInput] = useState('');
  const [amountInput, setAmountInput] = useState('0');

  const handleNameInput = (e) => {
    const input = e.target.value;
    setNameInput(input);
  };

  const handleAmountInput = (e) => {
    setAmountInput(e.target.value);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              name="title"
              value={nameInput}
              onChange={handleNameInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amountInput}
              onChange={handleAmountInput}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
