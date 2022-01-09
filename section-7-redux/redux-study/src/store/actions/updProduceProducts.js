const UPDATE_PRODUCE_INVENTORY = 'UPDATE_PRODUCE_INVENTORY';

const updProduceProducts = () => {
  console.log('Updating produce');
  return {
    type: UPDATE_PRODUCE_INVENTORY,
  };
};

export default updProduceProducts;
