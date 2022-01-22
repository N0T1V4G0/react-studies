const UPDATE_MEAT_INVENTORY = 'UPDATE_MEAT_INVENTORY';

const updMeatProducts = () => {
  console.log('Updating Meat');
  return {
    type: UPDATE_MEAT_INVENTORY,
  };
};

export default updMeatProducts;
