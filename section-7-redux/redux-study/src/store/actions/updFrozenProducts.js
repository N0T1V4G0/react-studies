const UPDATE_FROZEN_INVENTORY = 'UPDATE_FROZEN_INVENTORY';

const updFrozenProducts = () => {
  console.log('Updating frozen');
  return {
    type: UPDATE_FROZEN_INVENTORY,
  };
};

export default updFrozenProducts;
